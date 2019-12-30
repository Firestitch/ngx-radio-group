import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { FsLabelModule } from '@firestitch/label';

import { FsRadioGroupComponent } from './components/radio-group/radio-group.component';


@NgModule({
imports: [
    CommonModule,
    MatRadioModule,
    FormsModule,
    FsLabelModule
],
declarations: [
    FsRadioGroupComponent
],
exports: [
  FsRadioGroupComponent
]
})
export class FsRadioGroupModule {
}
