import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'vertical',
  templateUrl: 'vertical.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
