import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { FsRadioGroupComponent } from './components/radio-group/radio-group.component';


@NgModule({
imports: [
    CommonModule,
    MatRadioModule,
    FormsModule
],
declarations: [
    FsRadioGroupComponent
],
providers: [],
exports: [
  FsRadioGroupComponent
]
})
export class FsRadioGroupModule {
  /*static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsRadioGroupModule,
      providers: []
    };
  }*/
}
