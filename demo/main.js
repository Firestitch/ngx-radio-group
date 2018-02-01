webpackJsonp([2],{

/***/ "../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!../src/fsradiogroup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":host {\n  position: relative;\n  padding-top: .84375em;\n  min-height: 30px;\n  display: inline-block;\n}\n\n.mat-form-field-label {\n  display: block;\n  top: 0;\n  -webkit-transform: scale(0.75) translateZ(0.001px);\n          transform: scale(0.75) translateZ(0.001px);\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n}\n\n:host ::ng-deep .mat-radio-label {\n  line-height: 29px;\n}\n\n:host ::ng-deep mat-radio-group:not(.vertical) mat-radio-button {\n  margin-left: 15px;\n}\n\n:host ::ng-deep mat-radio-group:not(.vertical) mat-radio-button:first-child {\n  margin-left: 0;\n}\n\n:host ::ng-deep mat-radio-group.vertical mat-radio-button {\n  display: block;\n}\n\n", "", {"version":3,"sources":["C:/Projects/fs-radio-group/src/C:/Projects/fs-radio-group/src/src/fsradiogroup.component.scss","C:/Projects/fs-radio-group/src/C:/Projects/fs-radio-group/fsradiogroup.component.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,sBAAA;EACA,iBAAA;EACA,sBAAA;CCCD;;ADED;EACE,eAAA;EACA,OAAA;EACA,mDAAA;UAAA,2CAAA;EACA,8BAAA;UAAA,sBAAA;CCCD;;ADIC;EACE,kBAAA;CCDH;;ADFD;EAOM,kBAAA;CCDL;;ADAgC;EAIvB,eAAA;CCAT;;ADVD;EAeM,eAAA;CCDL","file":"fsradiogroup.component.scss","sourcesContent":[":host {\n  position: relative;\n  padding-top: .84375em;\n  min-height: 30px;\n  display: inline-block;\n}\n\n.mat-form-field-label {\n  display: block;\n  top: 0;\n  transform: scale(.75) translateZ(.001px);\n  transform-origin: 0 0;\n}\n\n:host ::ng-deep {\n\n  .mat-radio-label {\n    line-height: 29px;\n  }\n\n  mat-radio-group:not(.vertical) mat-radio-button {\n      margin-left: 15px;\n\n      &:first-child {\n          margin-left: 0;\n      }\n  }\n\n  mat-radio-group.vertical mat-radio-button {\n      display: block;\n  }\n}\n\n",":host {\n  position: relative;\n  padding-top: .84375em;\n  min-height: 30px;\n  display: inline-block;\n}\n\n.mat-form-field-label {\n  display: block;\n  top: 0;\n  transform: scale(0.75) translateZ(0.001px);\n  transform-origin: 0 0;\n}\n\n:host ::ng-deep .mat-radio-label {\n  line-height: 29px;\n}\n\n:host ::ng-deep mat-radio-group:not(.vertical) mat-radio-button {\n  margin-left: 15px;\n}\n\n:host ::ng-deep mat-radio-group:not(.vertical) mat-radio-button:first-child {\n  margin-left: 0;\n}\n\n:host ::ng-deep mat-radio-group.vertical mat-radio-button {\n  display: block;\n}\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!./app/components/fs-component-examples/fs-component-examples.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"fs-component-examples.component.css","sourceRoot":""}]);

// exports


/***/ }),

/***/ "../src/fsradiogroup.component.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!../src/fsradiogroup.component.scss");

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
var fsradiogroup_value_accessor_1 = __webpack_require__("../src/fsradiogroup.value-accessor.ts");
var FsRadioGroupComponent = (function () {
    function FsRadioGroupComponent() {
        this.orientation = 'horizontal';
    }
    FsRadioGroupComponent.prototype.writeValue = function (value) {
        //if (!this.isEquals(value, this.innerValue)) {
        //    this.innerValue = value;
        //
    };
    FsRadioGroupComponent.prototype.registerOnChange = function (fn) {
        //this.onChangeCallback = fn;
    };
    FsRadioGroupComponent.prototype.registerOnTouched = function (fn) {
        //this.onTouchedCallback = fn;
    };
    __decorate([
        core_1.Input('orientation'),
        __metadata("design:type", String)
    ], FsRadioGroupComponent.prototype, "orientation", void 0);
    __decorate([
        core_1.Input('label'),
        __metadata("design:type", Object)
    ], FsRadioGroupComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input('ngModel'),
        __metadata("design:type", Object)
    ], FsRadioGroupComponent.prototype, "model", void 0);
    FsRadioGroupComponent = __decorate([
        core_1.Component({
            selector: 'fs-radio-group',
            template: "<div class=\"mat-form-field-label\">{{label}}</div>\n              <mat-radio-group [(ngModel)]=\"model\" [ngClass]=\"{ vertical: orientation=='vertical' }\">\n                <ng-content></ng-content>\n              </mat-radio-group>",
            styles: [__webpack_require__("../src/fsradiogroup.component.scss")],
            providers: [fsradiogroup_value_accessor_1.RADIO_VALUE_ACCESSOR]
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

module.exports = "<div class=\"overview\">\n    <h1>Overview</h1>\n    <li><b>npm run serve</b> Starts the playground web server</li>\n    <li><b>npm run package</b> Builds the NPM package for publishing</li>\n    <li><b>npm run demo</b> Builds the demo site</li>\n    <li><b>npm run lint</b> Validates the NPM package</li>    \n</div>\n\n<fs-component-examples>\n\n    <div class=\"example\">\n        <fs-component-example fsTitle=\"Horizontal Checkboxes\" fsHtml=\"...\" fsTs=\"...\" fsCss=\"...\">     \n            <horizontal></horizontal>\n        </fs-component-example>  \n    </div>  \n\n    <div class=\"example\">\n        <fs-component-example fsTitle=\"Vertical Checkboxes\" fsHtml=\"...\" fsTs=\"...\" fsCss=\"...\">     \n            <vertical></vertical>\n        </fs-component-example>  \n    </div>  \n\n</fs-component-examples>"

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

/***/ "./app/components/fs-component-example/fs-component-example.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <!-- <div>{{title}}</div>\r\n        source icon\r\n\r\n    <div>\r\n        <tabs>\r\n            <html><ts><css>\r\n    \r\n    <running-example> -->\r\n        <ng-content></ng-content>\r\n    \r\n</div>"

/***/ }),

/***/ "./app/components/fs-component-example/fs-component-example.component.ts":
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
var FsComponentExampleComponent = (function () {
    function FsComponentExampleComponent() {
    }
    FsComponentExampleComponent = __decorate([
        core_1.Component({
            selector: 'fs-component-example',
            template: __webpack_require__("./app/components/fs-component-example/fs-component-example.component.html")
        })
    ], FsComponentExampleComponent);
    return FsComponentExampleComponent;
}());
exports.FsComponentExampleComponent = FsComponentExampleComponent;


/***/ }),

/***/ "./app/components/fs-component-examples/fs-component-examples.component.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!./app/components/fs-component-examples/fs-component-examples.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./app/components/fs-component-examples/fs-component-examples.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>"

/***/ }),

/***/ "./app/components/fs-component-examples/fs-component-examples.component.ts":
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
var FsComponentExamplesComponent = (function () {
    function FsComponentExamplesComponent() {
    }
    FsComponentExamplesComponent = __decorate([
        core_1.Component({
            selector: 'fs-component-examples',
            template: __webpack_require__("./app/components/fs-component-examples/fs-component-examples.component.html"),
            styles: [__webpack_require__("./app/components/fs-component-examples/fs-component-examples.component.css")]
        })
    ], FsComponentExamplesComponent);
    return FsComponentExamplesComponent;
}());
exports.FsComponentExamplesComponent = FsComponentExamplesComponent;


/***/ }),

/***/ "./app/components/horizontal/horizontal.component.html":
/***/ (function(module, exports) {

module.exports = "\n<fs-radio-group [(ngModel)]=\"selected\" label=\"Radio Buttons\">\n    <mat-radio-button *ngFor=\"let item of items\" [value]=\"item\">{{ item.name }}</mat-radio-button>\n</fs-radio-group>\n\n<fieldset>\n    <legend>Selected</legend>\n    {{ selected | json }}\n</fieldset>\n"

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
        this.selected = [];
        this.items = [
            { name: 'Item 1', id: 1 },
            { name: 'Item 2', id: 2 },
            { name: 'Item 3', id: 3 },
            { name: 'Item 4', id: 4 }
        ];
    }
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

module.exports = "\n<fs-radio-group [(ngModel)]=\"selected\" label=\"Radio Buttons\" orientation=\"vertical\">\n    <mat-radio-button *ngFor=\"let item of items\" [value]=\"item\">{{ item.name }}</mat-radio-button>\n</fs-radio-group>\n\n<fieldset>\n    <legend>Selected</legend>\n    {{ selected | json }}\n</fieldset>\n"

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
        this.selected = [];
        this.items = [
            { name: 'Item 1', id: 1 },
            { name: 'Item 2', id: 2 },
            { name: 'Item 3', id: 3 },
            { name: 'Item 4', id: 4 }
        ];
    }
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
var fs_component_example_component_1 = __webpack_require__("./app/components/fs-component-example/fs-component-example.component.ts");
var fs_component_examples_component_1 = __webpack_require__("./app/components/fs-component-examples/fs-component-examples.component.ts");
var vertical_component_1 = __webpack_require__("./app/components/vertical/vertical.component.ts");
var horizontal_component_1 = __webpack_require__("./app/components/horizontal/horizontal.component.ts");
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
                flex_layout_1.FlexLayoutModule
            ],
            entryComponents: [],
            declarations: [
                app_component_1.AppComponent,
                fs_component_example_component_1.FsComponentExampleComponent,
                fs_component_examples_component_1.FsComponentExamplesComponent,
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