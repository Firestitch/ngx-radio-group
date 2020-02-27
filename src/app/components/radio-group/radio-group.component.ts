import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  forwardRef,
  HostBinding,
  Input,
  OnDestroy,
  Provider,
  QueryList,
  ViewChild
} from '@angular/core';
import { ControlContainer, ControlValueAccessor, NG_VALUE_ACCESSOR, NgForm } from '@angular/forms';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export const RADIO_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FsRadioGroupComponent),
  multi: true
};


@Component({
  selector: 'fs-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: [ 'radio-group.component.scss' ],
  providers: [RADIO_VALUE_ACCESSOR],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsRadioGroupComponent implements ControlValueAccessor, AfterContentInit, OnDestroy {

  @Input() public orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() public label;
  @Input() public name;
  @Input() public disabled;

  @Input()
  public compareWith = (o1: any, o2: any) => { return o1 === o2};

  @ContentChildren(MatRadioButton)
  public contentChildren: QueryList<MatRadioButton>;

  @ViewChild(MatRadioGroup, { static: true })
  public matRadioGroup = null;

  @HostBinding('class.fs-form-wrapper')
  public formWrapper = true;

  private _destroy$ = new Subject<void>();

  public ngAfterContentInit() {
    this.contentChildren.forEach((children) => {

      this._listenButtonChange(children);


      // children._elementRef.nativeElement.addEventListener('click', this.onClick(children), false);
    });

    this.contentChildren.changes
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe((children: MatRadioButton) => {
        this._destroy$.next();
        this._listenButtonChange(children);
        // children._elementRef.nativeElement.addEventListener('click', this.onClick(children), false);
      });

    // this.contentChildren.forEach((btn) => {
    //   // Name is required
    //   btn.name = this.name;
    //   btn._elementRef.nativeElement.addEventListener('click', this.onClick(btn), false);
    // });
  }

  // public onClick(button) {
  //
  //   return () => {
  //     if (!button.disabled) {
  //       this._onChange(button.value);
  //     }
  //   };
  // }

  public _onChange = (value: any) => { };

  public registerOnChange(fn: (value: any) => any): void { this._onChange = fn }
  public registerOnTouched(fn: () => any): void {  }

  public writeValue(value: any) {
    if (value != undefined) {
      this.updateChecked(value);
    }
  }

  public updateChecked(value) {
    if (this.contentChildren) {
      for (const button of this.contentChildren.toArray()) {
        button.checked = this.compareWith(button.value, value);
      }
    }
  }

  public ngOnDestroy() {
    for (const button of this.contentChildren.toArray()) {
      // button._elementRef.nativeElement.removeEventListener('click', this.onClick(button), false);
    }
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;

    this.contentChildren.forEach((btn) => {
      btn.disabled = this.disabled;
    })
  }

  private _listenButtonChange(button: MatRadioButton) {
    button.name = this.name;

    button.change
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe(() => {
        if (!button.disabled) {
          this._onChange(button.value);
        }
      });
  }
}
