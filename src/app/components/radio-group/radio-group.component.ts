import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, HostBinding, Input, NgZone, OnDestroy, OnInit, Optional, QueryList, ViewChild, inject } from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  ControlValueAccessor,
  NgControl,
  NgForm,
  ValidationErrors,
  Validator,
} from '@angular/forms';

import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';

import { controlContainerFactory } from '@firestitch/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FsLabelModule } from '@firestitch/label';
import { NgClass } from '@angular/common';


@Component({
    selector: 'fs-radio-group',
    templateUrl: './radio-group.component.html',
    styleUrls: ['./radio-group.component.scss'],
    providers: [],
    viewProviders: [
        {
            provide: ControlContainer,
            useFactory: controlContainerFactory,
            deps: [[new Optional(), NgForm]],
        },
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        FsLabelModule,
        MatRadioGroup,
        NgClass,
    ],
})
export class FsRadioGroupComponent implements Validator, ControlValueAccessor, AfterContentInit, OnInit, OnDestroy {
  private _ngControl = inject(NgControl, { optional: true, self: true });
  private _cdRef = inject(ChangeDetectorRef);


  @Input() public orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() public label: string;
  @Input() public name: string;
  @Input() public disabled: boolean;
  @Input() public radioPosition: 'top' | 'center' = 'center';


  @ContentChildren(MatRadioButton, { descendants: true })
  public contentChildren: QueryList<MatRadioButton>;

  @ContentChildren(MatRadioButton, { descendants: true, read: ElementRef })
  public contentChildElements: QueryList<ElementRef<HTMLElement>>;

  @ViewChild(MatRadioGroup, { static: true })
  public matRadioGroup = null;

  @ViewChild(MatRadioGroup, { static: true, read: ElementRef })
  public matRadioGroupElement: ElementRef<HTMLElement>;

  @HostBinding('class.fs-form-wrapper')
  public formWrapper = true;


  private _ngZone = inject(NgZone);
  private _resizeObserver: ResizeObserver;
  private _disabledStateInitialized = false;
  private _value = null;
  private _required = false;
  private _destroy$ = new Subject<void>();

  constructor() {
    this._ngControl.valueAccessor = this;
  }

  @Input()
  public compareWith = (o1: any, o2: any) => {
      return o1 === o2;
    };

  @Input()
  public set required(value: unknown) {
    this._required = coerceBooleanProperty(value);
  }

  public ngOnInit(): void {
    console.log('init');
    const control = this._ngControl.control;

    const validators = control.validator
      ? [control.validator, this.validate.bind(this)]
      : this.validate.bind(this);

    control.setValidators(validators);
    control.updateValueAndValidity();
  }

  public get value(): unknown {
    return this._value;
  }

  public set value(value: unknown) {
    this._value = value;

    this._onChange(this._value);
  }

  public ngAfterContentInit() {
    this.contentChildren.forEach((child) => {
      this._listenButtonChange(child);
    });

    this.contentChildren.changes
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe((children: QueryList<MatRadioButton>) => {
        children.forEach((child) => {
          this._listenButtonChange(child);
        });

        setTimeout(() => {
          this.updateChecked(this._value);
          this._cdRef.markForCheck();
          this._ngControl.control.updateValueAndValidity();
        });
      });

    this._observeLayout();
  }

  public _onChange = (value: any) => {
    //
  };

  public registerOnChange(fn: (value: any) => any): void {
    this._onChange = fn;
  }
  public registerOnTouched(fn: () => any): void {
    //
  }

  public writeValue(value: any) {
    if (value !== undefined) {
      this.updateChecked(value);
      this._value = value;
    }
  }

  public validate(control: AbstractControl): ValidationErrors | null {
    if (this._required) {
      const valueExists = this._verifyValueExists();

      if (!valueExists) {
        return {
          required: true,
        };
      }
    }

    return null;
  }

  public updateChecked(value) {
    if (this.contentChildren) {
      for (const button of this.contentChildren.toArray()) {
        button.checked = this.compareWith(button.value, value);
      }
    }
  }

  public ngOnDestroy() {
    this._resizeObserver?.disconnect();
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  public setDisabledState(isDisabled: boolean): void {
    if (
      !this._disabledStateInitialized
      && this.disabled === undefined
      && !isDisabled
    ) {
      return;
    }

    this._disabledStateInitialized = true;
    this.disabled = isDisabled;

    if (this._disabledStateInitialized)
    this.contentChildren?.forEach((btn) => {
      btn.disabled = this.disabled;
    });
  }

  private _listenButtonChange(button: MatRadioButton) {
    button.name = this.name;
    button.change
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe(() => {
        if (!button.disabled) {
          this.value = button.value;
        }
      });
  }

  // Re-check the layout whenever the group or one of its options changes size
  private _observeLayout(): void {
    if (typeof ResizeObserver === 'undefined') {
      return;
    }

    this._ngZone.runOutsideAngular(() => {
      this._resizeObserver = new ResizeObserver(() => this._updateWrapped());
      this._observeElements();
    });

    this.contentChildElements.changes
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe(() => this._observeElements());
  }

  private _observeElements(): void {
    this._resizeObserver.disconnect();
    this._resizeObserver.observe(this.matRadioGroupElement.nativeElement);
    this.contentChildElements
      .forEach((element) => this._resizeObserver.observe(element.nativeElement));
  }

  // Horizontal options switch to an even grid only once they no longer fit on
  // one row. They're measured in the one-row layout, since the grid's columns
  // are sized from them.
  private _updateWrapped(): void {
    const group = this.matRadioGroupElement.nativeElement;

    if (this.orientation !== 'horizontal') {
      return;
    }

    group.classList.remove('wrapped');

    const widths = this.contentChildElements
      .map((element) => element.nativeElement.getBoundingClientRect().width);
    const gap = parseFloat(getComputedStyle(group).columnGap) || 0;
    const rowWidth = widths.reduce((sum, width) => sum + width, 0) + gap * (widths.length - 1);

    group.style.setProperty('--fs-radio-group-column-width', `${Math.ceil(Math.max(0, ...widths))}px`);
    // Half a pixel of slack so subpixel rounding doesn't wrap a row that fits
    group.classList.toggle('wrapped', rowWidth > group.getBoundingClientRect().width + 0.5);
  }

  private _verifyValueExists(): boolean {
    return Array.from(this.contentChildren || [])
      .some((child) => {
        return this.compareWith(this.value, child.value);
      });
  }
}
