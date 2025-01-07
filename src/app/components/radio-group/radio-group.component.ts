import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  QueryList,
  Self,
  ViewChild,
} from '@angular/core';
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

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'fs-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
  providers: [],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsRadioGroupComponent implements Validator, ControlValueAccessor, AfterContentInit, OnInit, OnDestroy {

  @Input() public orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() public label: string;
  @Input() public name: string;
  @Input() public disabled: boolean;
  @Input() public radioPosition: 'top' | 'center' = 'center';


  @ContentChildren(MatRadioButton, { descendants: true })
  public contentChildren: QueryList<MatRadioButton>;

  @ViewChild(MatRadioGroup, { static: true })
  public matRadioGroup = null;

  @HostBinding('class.fs-form-wrapper')
  public formWrapper = true;


  private _value = null;
  private _required = false;
  private _destroy$ = new Subject<void>();
  
  constructor(
    @Optional() @Self() private _ngControl: NgControl,
    private _cdRef: ChangeDetectorRef,
  ) {
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
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;

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

  private _verifyValueExists(): boolean {
    return Array.from(this.contentChildren || [])
      .some((child) => {
        return this.compareWith(this.value, child.value);
      });
  }
}
