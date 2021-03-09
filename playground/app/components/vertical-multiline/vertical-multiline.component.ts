import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vertical-multiline',
  templateUrl: 'vertical-multiline.component.html',
  styleUrls: [
    './vertical-multiline.component.scss',
  ],
})
export class VerticalMultilineComponent implements OnInit {

  public selected = null;
  public value: number;

  ngOnInit() {
  }
}
