import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  forwardRef,
  HostBinding,
  Input,
  OnDestroy,
  QueryList,
  ViewChild
} from '@angular/core';
import { ControlContainer, ControlValueAccessor, NG_VALUE_ACCESSOR, NgForm } from '@angular/forms';
import { MatRadioButton, MatRadioGroup, MatRadioChange } from '@angular/material/radio';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'fs-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: [ 'radio-group.component.scss' ],
  providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FsRadioGroupComponent),
      multi: true
    }
  ],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsRadioGroupComponent implements ControlValueAccessor, AfterContentInit, OnDestroy {

  @Input() public orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() public label: string;
  @Input() public name: string;
  @Input() public disabled: boolean;
  @Input() public radioPosition: 'top' | 'center' = 'top';

  @Input()
  public compareWith = (o1: any, o2: any) => { return o1 === o2};

  @ContentChildren(MatRadioButton)
  public contentChildren: QueryList<MatRadioButton>;

  @ViewChild(MatRadioGroup, { static: true })
  public matRadioGroup = null;

  @HostBinding('class.fs-form-wrapper')
  public formWrapper = true;

  private _value = null;
  private _destroy$ = new Subject<void>();

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

        if (this.value) {
          const selectedValueExists = Array.from(children)
            .some((child) => {
              return this.compareWith(this.value, child.value);
            });

          if (!selectedValueExists) {
            // to prevent ExpressionChangedAfterItHasBeenCheckedError
            setTimeout(() => {
              this.value = null;
            });
          }
        }
      });
  }

  public _onChange = (value: any) => { };

  public registerOnChange(fn: (value: any) => any): void { this._onChange = fn }
  public registerOnTouched(fn: () => any): void {  }

  public writeValue(value: any) {
    if (value !== undefined) {
      this.updateChecked(value);
      this._value = value;
    }
  }

  public updateChecked(value) {
    if (this.contentChildren) {
      for (const button of this.contentChildren.toArray()) {
        button.checked = this.compareWith(button.value, value);
      }
    }
  }

  public ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;

    this.contentChildren.forEach((btn) => {
      btn.disabled = this.disabled;
    })
  }

  private _listenButtonChange(button: MatRadioButton) {
    button.name = this.name;
    button.change
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe((event: MatRadioChange) => {
        if (!button.disabled) {
          this.value = button.value;
        }
      });
  }
}
