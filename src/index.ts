import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FsRadioGroupComponent } from './fsradiogroup.component';
import { FsCommonModule } from '@firestitch/common';
import { MatRadioModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

export * from './fsradiogroup.component';

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
