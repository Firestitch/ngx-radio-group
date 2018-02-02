import { Component, Input, ContentChildren, QueryList, ViewChild, AfterContentInit, OnDestroy } from '@angular/core';
import { FsArray } from '@firestitch/common';
import { MatRadioButton, MatRadioGroup } from '@angular/material';
import { RADIO_VALUE_ACCESSOR } from './fsradiogroup.value-accessor';
import { NgForm, ControlContainer } from '@angular/forms';

@Component({
   selector: 'fs-radio-group',
   template: `<div class="mat-form-field-label">{{ label }}</div>
              <mat-radio-group [ngClass]="{ vertical: orientation=='vertical' }">
                <ng-content></ng-content>
              </mat-radio-group>`,
   styleUrls: [ 'fsradiogroup.component.scss' ],
   providers: [RADIO_VALUE_ACCESSOR],
   viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class FsRadioGroupComponent implements AfterContentInit, OnDestroy {

  @Input('orientation') orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() label;
  @Input() name;

  @ContentChildren(MatRadioButton) contentChildren: QueryList<MatRadioButton>;
  @ViewChild(MatRadioGroup) matRadioGroup;

  ngAfterContentInit() {
    for (let button of this.contentChildren.toArray()) {
      // Name is required
      button.name = this.name;
      button._elementRef.nativeElement.addEventListener('click', this.onClick(button), false);
    }
  }

  onClick(button) {
    return event => {
      this.writeValue(button.value);
    }
  }

  _onTouched = () => { };
  _onChange = (value: any) => { };
  onFocused = (event: any) => { };

  registerOnChange(fn: (value: any) => any): void { this._onChange = fn }
  registerOnTouched(fn: () => any): void { this._onTouched = fn }

  writeValue(value: any) {
    if (value != undefined) {
      this._onChange(value);
      this.updateChecked(value);
    }
  }

  updateChecked(value) {
    for (let button of this.contentChildren.toArray()) {
      button.checked = button.value == value ? true : false;
    }
  }

  ngOnDestroy() {
    for (let button of this.contentChildren.toArray()) {
      button._elementRef.nativeElement.removeEventListener('click', this.onClick(button), false);
    }
  }
}
