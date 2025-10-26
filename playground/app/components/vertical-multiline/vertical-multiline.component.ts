import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FsRadioGroupComponent } from '../../../../src/app/components/radio-group/radio-group.component';
import { FsFormModule } from '@firestitch/form';
import { MatRadioButton } from '@angular/material/radio';
import { MatFormField, MatSuffix, MatPrefix, MatHint } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { JsonPipe } from '@angular/common';

@Component({
    selector: 'vertical-multiline',
    templateUrl: 'vertical-multiline.component.html',
    styleUrls: [
        './vertical-multiline.component.scss',
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        FormsModule,
        FsRadioGroupComponent,
        FsFormModule,
        MatRadioButton,
        MatFormField,
        MatInput,
        MatSuffix,
        MatPrefix,
        MatHint,
        JsonPipe,
    ],
})
export class VerticalMultilineComponent implements OnInit {

  public selected = null;
  public value: number;

  ngOnInit() {
  }
}
