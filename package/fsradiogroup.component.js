"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var fsradiogroup_value_accessor_1 = require("./fsradiogroup.value-accessor");
var forms_1 = require("@angular/forms");
var FsRadioGroupComponent = (function () {
    function FsRadioGroupComponent() {
        this.orientation = 'horizontal';
        this._onTouched = function () { };
        this._onChange = function (value) { };
        this.onFocused = function (event) { };
    }
    FsRadioGroupComponent.prototype.ngAfterContentInit = function () {
        for (var _i = 0, _a = this.contentChildren.toArray(); _i < _a.length; _i++) {
            var button = _a[_i];
            // Name is required
            button.name = this.name;
            button._elementRef.nativeElement.addEventListener('click', this.onClick(button), false);
        }
    };
    FsRadioGroupComponent.prototype.onClick = function (button) {
        var _this = this;
        return function (event) {
            _this.writeValue(button.value);
        };
    };
    FsRadioGroupComponent.prototype.registerOnChange = function (fn) { this._onChange = fn; };
    FsRadioGroupComponent.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
    FsRadioGroupComponent.prototype.writeValue = function (value) {
        if (value != undefined) {
            this._onChange(value);
            this.updateChecked(value);
        }
    };
    FsRadioGroupComponent.prototype.updateChecked = function (value) {
        for (var _i = 0, _a = this.contentChildren.toArray(); _i < _a.length; _i++) {
            var button = _a[_i];
            button.checked = button.value == value ? true : false;
        }
    };
    FsRadioGroupComponent.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this.contentChildren.toArray(); _i < _a.length; _i++) {
            var button = _a[_i];
            button._elementRef.nativeElement.removeEventListener('click', this.onClick(button), false);
        }
    };
    __decorate([
        core_1.Input('orientation'),
        __metadata("design:type", String)
    ], FsRadioGroupComponent.prototype, "orientation", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FsRadioGroupComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FsRadioGroupComponent.prototype, "name", void 0);
    __decorate([
        core_1.ContentChildren(material_1.MatRadioButton),
        __metadata("design:type", core_1.QueryList)
    ], FsRadioGroupComponent.prototype, "contentChildren", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatRadioGroup),
        __metadata("design:type", Object)
    ], FsRadioGroupComponent.prototype, "matRadioGroup", void 0);
    FsRadioGroupComponent = __decorate([
        core_1.Component({
            selector: 'fs-radio-group',
            template: "<div class=\"mat-form-field-label\">{{ label }}</div>\n              <mat-radio-group [ngClass]=\"{ vertical: orientation=='vertical' }\">\n                <ng-content></ng-content>\n              </mat-radio-group>",
            styleUrls: ['fsradiogroup.component.css'],
            providers: [fsradiogroup_value_accessor_1.RADIO_VALUE_ACCESSOR],
            viewProviders: [{ provide: forms_1.ControlContainer, useExisting: forms_1.NgForm }]
        })
    ], FsRadioGroupComponent);
    return FsRadioGroupComponent;
}());
exports.FsRadioGroupComponent = FsRadioGroupComponent;
//# sourceMappingURL=fsradiogroup.component.js.map