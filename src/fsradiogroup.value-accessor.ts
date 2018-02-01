import { FsRadioGroupComponent } from './fsradiogroup.component';
import { Provider, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

export const RADIO_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FsRadioGroupComponent),
  multi: true
};
