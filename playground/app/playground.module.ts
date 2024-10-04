import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { FsExampleModule } from '@firestitch/example';
import { FsFormModule } from '@firestitch/form';
import { FsMessageModule } from '@firestitch/message';
import { FsRadioGroupModule } from '@firestitch/radiogroup';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HorizontalComponent } from './components/horizontal/horizontal.component';
import { VerticalMultilineComponent } from './components/vertical-multiline/vertical-multiline.component';
import { VerticalComponent } from './components/vertical/vertical.component';
import { AppMaterialModule } from './material.module';


@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    FsRadioGroupModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsFormModule,
    FsExampleModule.forRoot(),
    FsMessageModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    HorizontalComponent,
    VerticalComponent,
    VerticalMultilineComponent,
  ],
})
export class PlaygroundModule {
}
