import {
  Component,
  Input,
  ContentChildren,
  QueryList,
  ViewChild,
  AfterContentInit,
  OnDestroy,
  Provider,
  forwardRef
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

  public ngAfterContentInit() {
    for (const button of this.contentChildren.toArray()) {
      // Name is required
      button.name = this.name;
      button._elementRef.nativeElement.addEventListener('click', this.onClick(button), false);
    }
  }

  public onClick(button) {

    if (button.disabled) {
      return;
    }

    return event => {
      this.writeValue(button.value);
    }
  }

  public _onTouched = () => { };
  public _onChange = (value: any) => { };
  public onFocused = (event: any) => { };

  public registerOnChange(fn: (value: any) => any): void { this._onChange = fn }
  public registerOnTouched(fn: () => any): void { this._onTouched = fn }

  public writeValue(value: any) {
    if (value != undefined) {
      this._onChange(value);
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
