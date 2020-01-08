import { Component } from '@angular/core';

@Component({
  selector: 'horizontal',
  templateUrl: 'horizontal.component.html'
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
