import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FsRadioGroupComponent } from '../../../../src/app/components/radio-group/radio-group.component';
import { FsFormModule } from '@firestitch/form';
import { MatRadioButton } from '@angular/material/radio';
import { MatHint } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { JsonPipe } from '@angular/common';

@Component({
    selector: 'vertical',
    templateUrl: 'vertical.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        FormsModule,
        FsRadioGroupComponent,
        FsFormModule,
        MatRadioButton,
        MatHint,
        MatButton,
        JsonPipe,
    ],
})
export class VerticalComponent implements OnInit {

  public selected = null;
  public items: any = [
      { name: 'Item 1', id: 1 },
      { name: 'Item 2', id: 2 },
      { name: 'Item 3', id: 3 },
      { name: 'Item 4', id: 4 }
    ];

  public ngOnInit() {
    this.selected = this.items[1];
  }

  public test() {
    this.items = [
      { name: 'Item 1', id: 1 },
      { name: 'Item 2', id: 2 },
      { name: 'Item 3', id: 3 }
    ];

  }
}
