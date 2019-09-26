import {
  Component,
  Input,
  ContentChildren,
  QueryList,
  ViewChild,
  AfterContentInit,
  OnDestroy,
  Provider,
  forwardRef,
  HostBinding
} from '@angular/core';
import { NgForm, ControlContainer, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { MatRadioButton, MatRadioGroup } from '@angular/material';

export const RADIO_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FsRadioGroupComponent),
  multi: true
};


@Component({
   selector: 'fs-radio-group',
   templateUrl: './radio-group.component.html',
   styleUrls: [ 'radio-group.component.scss' ],
   providers: [RADIO_VALUE_ACCESSOR],
   viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class FsRadioGroupComponent implements ControlValueAccessor, AfterContentInit, OnDestroy {

  @Input() public orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() public label;
  @Input() public name;
  @Input() public disabled;

  @ContentChildren(MatRadioButton) public contentChildren: QueryList<MatRadioButton>;
  @ViewChild(MatRadioGroup) public matRadioGroup = null;

  @HostBinding('class.fs-form-wrapper') formWrapper = true;

  public ngAfterContentInit() {
    this.contentChildren.forEach((btn) => {
      // Name is required
      btn.name = this.name;
      btn._elementRef.nativeElement.addEventListener('click', this.onClick(btn), false);
    });
  }

  public onClick(button) {

    return () => {
      if (!button.disabled) {
        this._onChange(button.value);
      }
    };
  }

  public _onChange = (value: any) => { };

  public registerOnChange(fn: (value: any) => any): void { this._onChange = fn }
  public registerOnTouched(fn: () => any): void {  }

  public writeValue(value: any) {
    if (value != undefined) {
      this.updateChecked(value);
    }
  }

  public updateChecked(value) {
    for (const button of this.contentChildren.toArray()) {
      button.checked = button.value == value;
    }
  }

  public ngOnDestroy() {
    for (const button of this.contentChildren.toArray()) {
      button._elementRef.nativeElement.removeEventListener('click', this.onClick(button), false);
    }
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;

    this.contentChildren.forEach((btn) => {
      btn.disabled = this.disabled;
    })
  }
}
