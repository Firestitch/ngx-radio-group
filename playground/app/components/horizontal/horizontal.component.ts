import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FsFormModule } from '@firestitch/form';
import { FsRadioGroupComponent } from '../../../../src/app/components/radio-group/radio-group.component';
import { MatRadioButton } from '@angular/material/radio';
import { MatHint } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { JsonPipe } from '@angular/common';

@Component({
    selector: 'horizontal',
    templateUrl: 'horizontal.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        FormsModule,
        FsFormModule,
        FsRadioGroupComponent,
        MatRadioButton,
        MatHint,
        MatButton,
        JsonPipe,
    ],
})
export class HorizontalComponent {

  public selectedHorizontal = { name: 'Item 2', id: 2 };

  public items = [
    { name: 'Item 1', id: 1 },
    { name: 'Item 2', id: 2 },
    { name: 'Item 3', id: 3 },
    { name: 'Item 4', id: 4 }
  ];

  public compareWith(o1, o2) {
    return o1 && o2 && o1.id === o2.id
  }
}
