import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vertical',
  templateUrl: 'vertical.component.html'
})
export class VerticalComponent implements OnInit {

  selected = null;

  items = [
      { name: 'Item 1', id: 1 },
      { name: 'Item 2', id: 2 },
      { name: 'Item 3', id: 3 },
      { name: 'Item 4', id: 4 }
    ];

  ngOnInit() {
    this.selected = this.items[1];
  }
}
