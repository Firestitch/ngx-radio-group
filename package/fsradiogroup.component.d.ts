import { QueryList, AfterContentInit, OnDestroy } from '@angular/core';
import { MatRadioButton } from '@angular/material';
export declare class FsRadioGroupComponent implements AfterContentInit, OnDestroy {
    orientation: 'horizontal' | 'vertical';
    label: any;
    name: any;
    contentChildren: QueryList<MatRadioButton>;
    matRadioGroup: any;
    ngAfterContentInit(): void;
    onClick(button: any): (event: any) => void;
    _onTouched: () => void;
    _onChange: (value: any) => void;
    onFocused: (event: any) => void;
    registerOnChange(fn: (value: any) => any): void;
    registerOnTouched(fn: () => any): void;
    writeValue(value: any): void;
    updateChecked(value: any): void;
    ngOnDestroy(): void;
}
