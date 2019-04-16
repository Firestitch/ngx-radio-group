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
import { NgForm, ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
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
export class FsRadioGroupComponent implements AfterContentInit, OnDestroy {

  @Input() public orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() public label;
  @Input() public name;

  @ContentChildren(MatRadioButton) public contentChildren: QueryList<MatRadioButton>;
  @ViewChild(MatRadioGroup) public matRadioGroup = null;

  @HostBinding('class.fs-form-wrapper') formWrapper = true;

  public ngAfterContentInit() {
    for (const radio of this.contentChildren.toArray()) {
      // Name is required
      radio.name = this.name;
      radio._elementRef.nativeElement.addEventListener('click', this.onClick(radio), false);
    }
  }

  public onClick(button) {

    if (button.disabled) {
      return;
    }

    return event => {
      this._onChange(button.value);
    }
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
}
