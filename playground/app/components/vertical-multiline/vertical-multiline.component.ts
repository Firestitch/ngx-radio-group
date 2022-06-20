import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'vertical-multiline',
  templateUrl: 'vertical-multiline.component.html',
  styleUrls: [
    './vertical-multiline.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerticalMultilineComponent implements OnInit {

  public selected = null;
  public value: number;

  ngOnInit() {
  }
}
