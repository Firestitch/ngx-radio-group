webpackJsonp([2],{

/***/ "../node_modules/css-loader/index.js??ref--3-1!../node_modules/postcss-loader/lib/index.js??ref--3-2!../node_modules/resolve-url-loader/index.js??ref--3-3!../node_modules/sass-loader/lib/loader.js??ref--3-4!../src/fsradiogroup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":host {\n  position: relative;\n  padding-top: .84375em;\n  min-height: 30px;\n  display: inline-block;\n}\n\n:host.ng-invalid.ng-dirty /deep/ mat-hint {\n  display: none !important;\n}\n\n:host /deep/ .mat-form-field-subscript-wrapper {\n  top: calc(100% - 8px);\n}\n\n.mat-form-field-label {\n  display: block;\n  top: 0;\n  -webkit-transform: scale(0.75);\n          transform: scale(0.75);\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n}\n\n:host ::ng-deep .mat-radio-label {\n  line-height: 29px;\n}\n\n:host ::ng-deep mat-radio-group:not(.vertical) mat-radio-button {\n  margin-left: 15px;\n}\n\n:host ::ng-deep mat-radio-group:not(.vertical) mat-radio-button:first-child {\n  margin-left: 0;\n}\n\n:host ::ng-deep mat-radio-group.vertical mat-radio-button {\n  display: block;\n}\n\n:host ::ng-deep mat-radio-group mat-hint {\n  font-size: 75%;\n  font-weight: 400;\n  line-height: 1.125;\n  display: block;\n  margin-top: 0.54166667em;\n}\n\n", "", {"version":3,"sources":["/Users/mendor/work/fs-radio-group/src/src/fsradiogroup.component.scss","/Users/mendor/work/fs-radio-group/src/fsradiogroup.component.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,sBAAA;EACA,iBAAA;EACA,sBAAA;CCCD;;ADEG;EACE,yBAAA;CCCL;;ADEC;EACE,sBAAA;CCCH;;ADGD;EACE,eAAA;EACA,OAAA;EACA,+BAAA;UAAA,uBAAA;EACA,8BAAA;UAAA,sBAAA;CCAD;;ADGD;EAGI,kBAAA;CCFH;;ADKC;EACI,kBAAA;CCFL;;ADLD;EAUU,eAAA;CCDT;;ADKC;EACI,eAAA;CCFL;;ADbD;EAoBM,eAAA;EACA,iBAAA;EACA,mBAAA;EACA,eAAA;EACA,yBAAA;CCHL","file":"fsradiogroup.component.scss","sourcesContent":[":host {\n  position: relative;\n  padding-top: .84375em;\n  min-height: 30px;\n  display: inline-block;\n  // Hide hint if error message\n  &.ng-invalid.ng-dirty {\n    /deep/ mat-hint {\n      display: none !important;\n    }\n  }\n  /deep/ .mat-form-field-subscript-wrapper {\n    top: calc(100% - 8px);\n  }\n}\n\n.mat-form-field-label {\n  display: block;\n  top: 0;\n  transform: scale(.75);\n  transform-origin: 0 0;\n}\n\n:host ::ng-deep {\n\n  .mat-radio-label {\n    line-height: 29px;\n  }\n\n  mat-radio-group:not(.vertical) mat-radio-button {\n      margin-left: 15px;\n\n      &:first-child {\n          margin-left: 0;\n      }\n  }\n\n  mat-radio-group.vertical mat-radio-button {\n      display: block;\n  }\n\n  mat-radio-group {\n    mat-hint {\n      font-size: 75%;\n      font-weight: 400;\n      line-height: 1.125;\n      display: block;\n      margin-top: 0.54166667em;\n    }\n  }\n}\n\n",":host {\n  position: relative;\n  padding-top: .84375em;\n  min-height: 30px;\n  display: inline-block;\n}\n\n:host.ng-invalid.ng-dirty /deep/ mat-hint {\n  display: none !important;\n}\n\n:host /deep/ .mat-form-field-subscript-wrapper {\n  top: calc(100% - 8px);\n}\n\n.mat-form-field-label {\n  display: block;\n  top: 0;\n  transform: scale(0.75);\n  transform-origin: 0 0;\n}\n\n:host ::ng-deep .mat-radio-label {\n  line-height: 29px;\n}\n\n:host ::ng-deep mat-radio-group:not(.vertical) mat-radio-button {\n  margin-left: 15px;\n}\n\n:host ::ng-deep mat-radio-group:not(.vertical) mat-radio-button:first-child {\n  margin-left: 0;\n}\n\n:host ::ng-deep mat-radio-group.vertical mat-radio-button {\n  display: block;\n}\n\n:host ::ng-deep mat-radio-group mat-hint {\n  font-size: 75%;\n  font-weight: 400;\n  line-height: 1.125;\n  display: block;\n  margin-top: 0.54166667em;\n}\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../src/fsradiogroup.component.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js??ref--3-1!../node_modules/postcss-loader/lib/index.js??ref--3-2!../node_modules/resolve-url-loader/index.js??ref--3-3!../node_modules/sass-loader/lib/loader.js??ref--3-4!../src/fsradiogroup.component.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "../src/fsradiogroup.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var material_1 = __webpack_require__("../node_modules/@angular/material/esm2015/material.js");
var fsradiogroup_value_accessor_1 = __webpack_require__("../src/fsradiogroup.value-accessor.ts");
var forms_1 = __webpack_require__("../node_modules/@angular/forms/esm2015/forms.js");
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
            styles: [__webpack_require__("../src/fsradiogroup.component.scss")],
            providers: [fsradiogroup_value_accessor_1.RADIO_VALUE_ACCESSOR],
            viewProviders: [{ provide: forms_1.ControlContainer, useExisting: forms_1.NgForm }]
        })
    ], FsRadioGroupComponent);
    return FsRadioGroupComponent;
}());
exports.FsRadioGroupComponent = FsRadioGroupComponent;


/***/ }),

/***/ "../src/fsradiogroup.value-accessor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var fsradiogroup_component_1 = __webpack_require__("../src/fsradiogroup.component.ts");
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var forms_1 = __webpack_require__("../node_modules/@angular/forms/esm2015/forms.js");
exports.RADIO_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return fsradiogroup_component_1.FsRadioGroupComponent; }),
    multi: true
};


/***/ }),

/***/ "../src/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var common_1 = __webpack_require__("../node_modules/@angular/common/esm2015/common.js");
var fsradiogroup_component_1 = __webpack_require__("../src/fsradiogroup.component.ts");
var material_1 = __webpack_require__("../node_modules/@angular/material/esm2015/material.js");
var forms_1 = __webpack_require__("../node_modules/@angular/forms/esm2015/forms.js");
__export(__webpack_require__("../src/fsradiogroup.component.ts"));
var FsRadioGroupModule = (function () {
    function FsRadioGroupModule() {
    }
    FsRadioGroupModule_1 = FsRadioGroupModule;
    FsRadioGroupModule.forRoot = function () {
        return {
            ngModule: FsRadioGroupModule_1,
            providers: []
        };
    };
    FsRadioGroupModule = FsRadioGroupModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                material_1.MatRadioModule,
                forms_1.FormsModule
            ],
            declarations: [
                fsradiogroup_component_1.FsRadioGroupComponent
            ],
            providers: [],
            exports: [
                fsradiogroup_component_1.FsRadioGroupComponent
            ]
        })
    ], FsRadioGroupModule);
    return FsRadioGroupModule;
    var FsRadioGroupModule_1;
}());
exports.FsRadioGroupModule = FsRadioGroupModule;


/***/ }),

/***/ "../tools lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../tools lazy recursive";

/***/ }),

/***/ "../tools/assets/playground.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Radio Button Group Examples</h1>\n<div class=\"example\">\n    <fs-example title=\"Horizontal Radio Button Group\" componentName=\"horizontal\">\n        <horizontal></horizontal>\n    </fs-example>\n</div>\n\n<div class=\"example\">\n    <fs-example title=\"Vertical Radio Button Group\" componentName=\"vertical\">\n        <vertical></vertical>\n    </fs-example>\n</div>\n"

/***/ }),

/***/ "./app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./app/components/horizontal/horizontal.component.html":
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" fsForm [fsFormBinding]=\"form\">\n  <fs-radio-group [(ngModel)]=\"selectedHorizontal\" fsFormRequired label=\"Radio Buttons\" name=\"horizontal\">\n      <mat-radio-button *ngFor=\"let item of items\" [value]=\"item\">{{ item.name }}</mat-radio-button>\n      <mat-hint>Hint hint hint!</mat-hint>\n  </fs-radio-group>\n\n  <div>\n    <button type=\"button\" mat-raised-button (click)=\"change()\">Set Last</button>\n  </div>\n\n  <fieldset>\n      <legend>Selected</legend>\n      {{ selectedHorizontal | json }}\n  </fieldset>\n</form>\n"

/***/ }),

/***/ "./app/components/horizontal/horizontal.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var HorizontalComponent = (function () {
    function HorizontalComponent() {
        this.selectedHorizontal = null;
        this.items = [
            { name: 'Item 1', id: 1 },
            { name: 'Item 2', id: 2 },
            { name: 'Item 3', id: 3 },
            { name: 'Item 4', id: 4 }
        ];
    }
    HorizontalComponent.prototype.change = function () {
        this.selectedHorizontal = this.items[3];
    };
    HorizontalComponent = __decorate([
        core_1.Component({
            selector: 'horizontal',
            template: __webpack_require__("./app/components/horizontal/horizontal.component.html")
        })
    ], HorizontalComponent);
    return HorizontalComponent;
}());
exports.HorizontalComponent = HorizontalComponent;


/***/ }),

/***/ "./app/components/vertical/vertical.component.html":
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\">\n  <fs-radio-group [(ngModel)]=\"selected\" label=\"Radio Buttons\" orientation=\"vertical\" name=\"vertical\">\n      <mat-radio-button *ngFor=\"let item of items\" [value]=\"item\">{{ item.name }}</mat-radio-button>\n      <mat-hint>Hint hint hint!</mat-hint>\n  </fs-radio-group>\n\n  <fieldset>\n      <legend>Selected</legend>\n      {{ selected | json }}\n  </fieldset>\n</form>\n"

/***/ }),

/***/ "./app/components/vertical/vertical.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var VerticalComponent = (function () {
    function VerticalComponent() {
        this.selected = null;
        this.items = [
            { name: 'Item 1', id: 1 },
            { name: 'Item 2', id: 2 },
            { name: 'Item 3', id: 3 },
            { name: 'Item 4', id: 4 }
        ];
    }
    VerticalComponent.prototype.ngOnInit = function () {
        this.selected = this.items[1];
    };
    VerticalComponent = __decorate([
        core_1.Component({
            selector: 'vertical',
            template: __webpack_require__("./app/components/vertical/vertical.component.html")
        })
    ], VerticalComponent);
    return VerticalComponent;
}());
exports.VerticalComponent = VerticalComponent;


/***/ }),

/***/ "./app/material.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = __webpack_require__("../node_modules/@angular/material/esm2015/material.js");
//import { FlexLayoutModule } from '@angular/flex-layout';
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var table_1 = __webpack_require__("../node_modules/@angular/cdk/esm2015/table.js");
var AppMaterialModule = (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        core_1.NgModule({
            exports: [
                table_1.CdkTableModule,
                material_1.MatAutocompleteModule,
                material_1.MatButtonModule,
                material_1.MatButtonToggleModule,
                material_1.MatCardModule,
                material_1.MatCheckboxModule,
                material_1.MatChipsModule,
                material_1.MatStepperModule,
                material_1.MatDatepickerModule,
                material_1.MatDialogModule,
                material_1.MatExpansionModule,
                material_1.MatGridListModule,
                material_1.MatIconModule,
                material_1.MatInputModule,
                material_1.MatListModule,
                material_1.MatMenuModule,
                material_1.MatNativeDateModule,
                material_1.MatPaginatorModule,
                material_1.MatProgressBarModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatRadioModule,
                material_1.MatRippleModule,
                material_1.MatSelectModule,
                material_1.MatSidenavModule,
                material_1.MatSliderModule,
                material_1.MatSlideToggleModule,
                material_1.MatSnackBarModule,
                material_1.MatSortModule,
                material_1.MatTableModule,
                material_1.MatTabsModule,
                material_1.MatToolbarModule,
                material_1.MatTooltipModule,
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());
exports.AppMaterialModule = AppMaterialModule;


/***/ }),

/***/ "./main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var playground_module_1 = __webpack_require__("./playground.module.ts");
var platform_browser_dynamic_1 = __webpack_require__("../node_modules/@angular/platform-browser-dynamic/esm2015/platform-browser-dynamic.js");
var platform_browser_1 = __webpack_require__("../node_modules/@angular/platform-browser/esm2015/platform-browser.js");
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
/**
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    platform_browser_dynamic_1.platformBrowserDynamic()
        .bootstrapModule(playground_module_1.PlaygroundModule)
        .then(decorateModuleRef)
        .catch(function (err) { return console.error(err); });
}
exports.main = main;
/**
 * Needed for hmr
 * in prod this is replace for document ready
 */
switch (document.readyState) {
    case 'loading':
        document.addEventListener('DOMContentLoaded', _domReadyHandler, false);
        break;
    case 'interactive':
    case 'complete':
    default:
        main();
}
function _domReadyHandler() {
    document.removeEventListener('DOMContentLoaded', _domReadyHandler, false);
    main();
}
function decorateModuleRef(modRef) {
    var appRef = modRef.injector.get(core_1.ApplicationRef);
    var cmpRef = appRef.components[0];
    var _ng = window.ng;
    platform_browser_1.enableDebugTools(cmpRef);
    window.ng.probe = _ng.probe;
    window.ng.coreTokens = _ng.coreTokens;
    return modRef;
}


/***/ }),

/***/ "./playground.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("../tools/assets/playground.scss");
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var app_component_1 = __webpack_require__("./app/app.component.ts");
var forms_1 = __webpack_require__("../node_modules/@angular/forms/esm2015/forms.js");
var platform_browser_1 = __webpack_require__("../node_modules/@angular/platform-browser/esm2015/platform-browser.js");
var src_1 = __webpack_require__("../src/index.ts");
var animations_1 = __webpack_require__("../node_modules/@angular/platform-browser/esm2015/animations.js");
var flex_layout_1 = __webpack_require__("../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
var material_module_1 = __webpack_require__("./app/material.module.ts");
var vertical_component_1 = __webpack_require__("./app/components/vertical/vertical.component.ts");
var horizontal_component_1 = __webpack_require__("./app/components/horizontal/horizontal.component.ts");
var example_1 = __webpack_require__("../node_modules/@firestitch/example/package/index.js");
var form_1 = __webpack_require__("../node_modules/@firestitch/form/package/index.js");
var PlaygroundModule = (function () {
    function PlaygroundModule() {
    }
    PlaygroundModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            imports: [
                platform_browser_1.BrowserModule,
                src_1.FsRadioGroupModule,
                animations_1.BrowserAnimationsModule,
                material_module_1.AppMaterialModule,
                forms_1.FormsModule,
                flex_layout_1.FlexLayoutModule,
                example_1.FsExampleModule,
                form_1.FsFormModule
            ],
            entryComponents: [],
            declarations: [
                app_component_1.AppComponent,
                horizontal_component_1.HorizontalComponent,
                vertical_component_1.VerticalComponent
            ],
            providers: [],
        })
    ], PlaygroundModule);
    return PlaygroundModule;
}());
exports.PlaygroundModule = PlaygroundModule;


/***/ })

},["./main.ts"]);
//# sourceMappingURL=main.map