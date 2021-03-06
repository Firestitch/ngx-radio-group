import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vertical-multiline',
  templateUrl: 'vertical-multiline.component.html'
})
export class VerticalMultilineComponent implements OnInit {

  selected = null;

  items = [
      { name: 'Item 1', subname: 'Sub Name 1', id: 1 },
      { name: 'Item 2', subname: 'Sub Name 2', id: 2 },
      { name: 'Item 3', subname: 'Sub Name 3', id: 3 },
      { name: 'Item 4', subname: 'Sub Name 4', id: 4 }
    ];

  ngOnInit() {
    this.selected = this.items[1];
  }
}
