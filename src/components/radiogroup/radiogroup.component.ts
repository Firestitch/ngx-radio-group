import { Component, Input, ContentChildren, QueryList, ViewChild, AfterContentInit, OnDestroy } from '@angular/core';
import { NgForm, ControlContainer } from '@angular/forms';
import { MatRadioButton, MatRadioGroup } from '@angular/material';

import { FsArray } from '@firestitch/common';

import { RADIO_VALUE_ACCESSOR } from './../../fsradiogroup.value-accessor';


@Component({
   selector: 'fs-radio-group',
   templateUrl: './radiogroup.component.html',
   styleUrls: [ 'radiogroup.component.scss' ],
   providers: [RADIO_VALUE_ACCESSOR],
   viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class FsRadioGroupComponent implements AfterContentInit, OnDestroy {

  @Input('orientation') public orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() public label;
  @Input() public name;

  @ContentChildren(MatRadioButton) public contentChildren: QueryList<MatRadioButton>;
  @ViewChild(MatRadioGroup) public matRadioGroup = null;

  public ngAfterContentInit() {
    for (let button of this.contentChildren.toArray()) {
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
    for (let button of this.contentChildren.toArray()) {
      button.checked = button.value == value ? true : false;
    }
  }

  public ngOnDestroy() {
    for (let button of this.contentChildren.toArray()) {
      button._elementRef.nativeElement.removeEventListener('click', this.onClick(button), false);
    }
  }
}
