import { Component, Input } from '@angular/core';
import { FsArray } from '@firestitch/common';
import { RADIO_VALUE_ACCESSOR } from './fsradiogroup.value-accessor';

@Component({
   selector: 'fs-radio-group',
   template: `<div class="mat-form-field-label">{{label}}</div>
              <mat-radio-group [(ngModel)]="model" [ngClass]="{ vertical: orientation=='vertical' }">
                <ng-content></ng-content>
              </mat-radio-group>`,
   styleUrls: [ 'fsradiogroup.component.scss' ],
   providers: [RADIO_VALUE_ACCESSOR]
})
export class FsRadioGroupComponent {

  @Input('orientation') orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input('label') label;
  @Input('ngModel') model;

  writeValue(value: any) {
    //if (!this.isEquals(value, this.innerValue)) {
    //    this.innerValue = value;
    //
  }


  registerOnChange(fn: any) {
    //this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    //this.onTouchedCallback = fn;
  }
}
