"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fsradiogroup_component_1 = require("./fsradiogroup.component");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
exports.RADIO_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return fsradiogroup_component_1.FsRadioGroupComponent; }),
    multi: true
};
//# sourceMappingURL=fsradiogroup.value-accessor.js.map