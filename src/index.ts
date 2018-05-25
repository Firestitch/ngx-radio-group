import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FsRadioGroupComponent } from './components/radiogroup/radiogroup.component';
import { FsCommonModule } from '@firestitch/common';
import { MatRadioModule } from '@angular/material';
import { FormsModule } from '@angular/forms';


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
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsRadioGroupModule,
      providers: []
    };
  }
}
