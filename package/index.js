(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("@firestitch/radiogroup", [], factory);
	else if(typeof exports === 'object')
		exports["@firestitch/radiogroup"] = factory();
	else
		root["@firestitch/radiogroup"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/index.js??ref--3-1!../node_modules/postcss-loader/lib/index.js??ref--3-2!../node_modules/resolve-url-loader/index.js??ref--3-3!../node_modules/sass-loader/lib/loader.js??ref--3-4!./fsradiogroup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":host {\n  position: relative;\n  padding-top: .84375em;\n  min-height: 30px;\n  display: inline-block;\n}\n\n:host.ng-invalid.ng-dirty /deep/ mat-hint {\n  display: none !important;\n}\n\n:host /deep/ .mat-form-field-subscript-wrapper {\n  top: calc(100% - 8px);\n}\n\n.mat-form-field-label {\n  display: block;\n  top: 0;\n  -webkit-transform: scale(0.75);\n          transform: scale(0.75);\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n}\n\n:host ::ng-deep .mat-radio-label {\n  line-height: 29px;\n}\n\n:host ::ng-deep mat-radio-group:not(.vertical) mat-radio-button {\n  margin-left: 15px;\n}\n\n:host ::ng-deep mat-radio-group:not(.vertical) mat-radio-button:first-child {\n  margin-left: 0;\n}\n\n:host ::ng-deep mat-radio-group.vertical mat-radio-button {\n  display: block;\n}\n\n:host ::ng-deep mat-radio-group mat-hint {\n  font-size: 75%;\n  font-weight: 400;\n  line-height: 1.125;\n  display: block;\n  margin-top: 0.54166667em;\n}\n\n", "", {"version":3,"sources":["/Users/mendor/work/fs-radio-group/src/src/fsradiogroup.component.scss","/Users/mendor/work/fs-radio-group/src/fsradiogroup.component.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,sBAAA;EACA,iBAAA;EACA,sBAAA;CCCD;;ADEG;EACE,yBAAA;CCCL;;ADEC;EACE,sBAAA;CCCH;;ADGD;EACE,eAAA;EACA,OAAA;EACA,+BAAA;UAAA,uBAAA;EACA,8BAAA;UAAA,sBAAA;CCAD;;ADGD;EAGI,kBAAA;CCFH;;ADKC;EACI,kBAAA;CCFL;;ADLD;EAUU,eAAA;CCDT;;ADKC;EACI,eAAA;CCFL;;ADbD;EAoBM,eAAA;EACA,iBAAA;EACA,mBAAA;EACA,eAAA;EACA,yBAAA;CCHL","file":"fsradiogroup.component.scss","sourcesContent":[":host {\n  position: relative;\n  padding-top: .84375em;\n  min-height: 30px;\n  display: inline-block;\n  // Hide hint if error message\n  &.ng-invalid.ng-dirty {\n    /deep/ mat-hint {\n      display: none !important;\n    }\n  }\n  /deep/ .mat-form-field-subscript-wrapper {\n    top: calc(100% - 8px);\n  }\n}\n\n.mat-form-field-label {\n  display: block;\n  top: 0;\n  transform: scale(.75);\n  transform-origin: 0 0;\n}\n\n:host ::ng-deep {\n\n  .mat-radio-label {\n    line-height: 29px;\n  }\n\n  mat-radio-group:not(.vertical) mat-radio-button {\n      margin-left: 15px;\n\n      &:first-child {\n          margin-left: 0;\n      }\n  }\n\n  mat-radio-group.vertical mat-radio-button {\n      display: block;\n  }\n\n  mat-radio-group {\n    mat-hint {\n      font-size: 75%;\n      font-weight: 400;\n      line-height: 1.125;\n      display: block;\n      margin-top: 0.54166667em;\n    }\n  }\n}\n\n",":host {\n  position: relative;\n  padding-top: .84375em;\n  min-height: 30px;\n  display: inline-block;\n}\n\n:host.ng-invalid.ng-dirty /deep/ mat-hint {\n  display: none !important;\n}\n\n:host /deep/ .mat-form-field-subscript-wrapper {\n  top: calc(100% - 8px);\n}\n\n.mat-form-field-label {\n  display: block;\n  top: 0;\n  transform: scale(0.75);\n  transform-origin: 0 0;\n}\n\n:host ::ng-deep .mat-radio-label {\n  line-height: 29px;\n}\n\n:host ::ng-deep mat-radio-group:not(.vertical) mat-radio-button {\n  margin-left: 15px;\n}\n\n:host ::ng-deep mat-radio-group:not(.vertical) mat-radio-button:first-child {\n  margin-left: 0;\n}\n\n:host ::ng-deep mat-radio-group.vertical mat-radio-button {\n  display: block;\n}\n\n:host ::ng-deep mat-radio-group mat-hint {\n  font-size: 75%;\n  font-weight: 400;\n  line-height: 1.125;\n  display: block;\n  margin-top: 0.54166667em;\n}\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./fsradiogroup.component.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js??ref--3-1!../node_modules/postcss-loader/lib/index.js??ref--3-2!../node_modules/resolve-url-loader/index.js??ref--3-3!../node_modules/sass-loader/lib/loader.js??ref--3-4!./fsradiogroup.component.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./fsradiogroup.component.ts":
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
var core_1 = __webpack_require__("@angular/core");
var material_1 = __webpack_require__("@angular/material");
var fsradiogroup_value_accessor_1 = __webpack_require__("./fsradiogroup.value-accessor.ts");
var forms_1 = __webpack_require__("@angular/forms");
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
            styles: [__webpack_require__("./fsradiogroup.component.scss")],
            providers: [fsradiogroup_value_accessor_1.RADIO_VALUE_ACCESSOR],
            viewProviders: [{ provide: forms_1.ControlContainer, useExisting: forms_1.NgForm }]
        })
    ], FsRadioGroupComponent);
    return FsRadioGroupComponent;
}());
exports.FsRadioGroupComponent = FsRadioGroupComponent;


/***/ }),

/***/ "./fsradiogroup.value-accessor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var fsradiogroup_component_1 = __webpack_require__("./fsradiogroup.component.ts");
var core_1 = __webpack_require__("@angular/core");
var forms_1 = __webpack_require__("@angular/forms");
exports.RADIO_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return fsradiogroup_component_1.FsRadioGroupComponent; }),
    multi: true
};


/***/ }),

/***/ "./index.ts":
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
var core_1 = __webpack_require__("@angular/core");
var common_1 = __webpack_require__("@angular/common");
var fsradiogroup_component_1 = __webpack_require__("./fsradiogroup.component.ts");
var material_1 = __webpack_require__("@angular/material");
var forms_1 = __webpack_require__("@angular/forms");
__export(__webpack_require__("./fsradiogroup.component.ts"));
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

/***/ "@angular/common":
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/core":
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/forms":
/***/ (function(module, exports) {

module.exports = require("@angular/forms");

/***/ }),

/***/ "@angular/material":
/***/ (function(module, exports) {

module.exports = require("@angular/material");

/***/ })

/******/ });
});
//# sourceMappingURL=index.map