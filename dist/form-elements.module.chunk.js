webpackJsonp(["form-elements.module"],{

/***/ "../../../../../src/app/pages/form-elements/form-elements.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormElementsModule", function() { return FormElementsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_directives_directives_module__ = __webpack_require__("../../../../../src/app/theme/directives/directives.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inputs_inputs_component__ = __webpack_require__("../../../../../src/app/pages/form-elements/inputs/inputs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__inputs_file_uploader_file_uploader_component__ = __webpack_require__("../../../../../src/app/pages/form-elements/inputs/file-uploader/file-uploader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__inputs_image_uploader_image_uploader_component__ = __webpack_require__("../../../../../src/app/pages/form-elements/inputs/image-uploader/image-uploader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__inputs_multiple_image_uploader_multiple_image_uploader_component__ = __webpack_require__("../../../../../src/app/pages/form-elements/inputs/multiple-image-uploader/multiple-image-uploader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__layouts_layouts_component__ = __webpack_require__("../../../../../src/app/pages/form-elements/layouts/layouts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__validations_validations_component__ = __webpack_require__("../../../../../src/app/pages/form-elements/validations/validations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__wizard_wizard_component__ = __webpack_require__("../../../../../src/app/pages/form-elements/wizard/wizard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', redirectTo: 'inputs', pathMatch: 'full' },
    { path: 'inputs', component: __WEBPACK_IMPORTED_MODULE_5__inputs_inputs_component__["a" /* InputsComponent */], data: { breadcrumb: 'Inputs' } },
    { path: 'layouts', component: __WEBPACK_IMPORTED_MODULE_9__layouts_layouts_component__["a" /* LayoutsComponent */], data: { breadcrumb: 'Layouts' } },
    { path: 'validations', component: __WEBPACK_IMPORTED_MODULE_10__validations_validations_component__["a" /* ValidationsComponent */], data: { breadcrumb: 'Validations' } },
    { path: 'wizard', component: __WEBPACK_IMPORTED_MODULE_11__wizard_wizard_component__["a" /* WizardComponent */], data: { breadcrumb: 'Wizard' } }
];
var FormElementsModule = (function () {
    function FormElementsModule() {
    }
    return FormElementsModule;
}());
FormElementsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__theme_directives_directives_module__["a" /* DirectivesModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */].forChild(routes)
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__inputs_inputs_component__["a" /* InputsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__inputs_file_uploader_file_uploader_component__["a" /* FileUploaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__inputs_image_uploader_image_uploader_component__["a" /* ImageUploaderComponent */],
            __WEBPACK_IMPORTED_MODULE_8__inputs_multiple_image_uploader_multiple_image_uploader_component__["a" /* MultipleImageUploaderComponent */],
            __WEBPACK_IMPORTED_MODULE_9__layouts_layouts_component__["a" /* LayoutsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__validations_validations_component__["a" /* ValidationsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__wizard_wizard_component__["a" /* WizardComponent */]
        ]
    })
], FormElementsModule);

//# sourceMappingURL=form-elements.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/form-elements/inputs/file-uploader/file-uploader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n    <div class=\"input-group file-upload\">\n        <input type=\"file\" (change)=\"fileChange(input)\" #input class=\"file-upload-btn\"/>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Choose a file...\" value=\"{{file}}\">\n        <i class=\"fa fa-times delete-file\" (click)=\"removeFile()\" *ngIf=\"file\"></i>\n        <span class=\"input-group-btn\">\n            <button class=\"btn btn-primary\" type=\"button\"><i class=\"fa fa-upload\"></i></button>\n        </span>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/form-elements/inputs/file-uploader/file-uploader.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".file-upload .file-upload-btn {\n  position: absolute;\n  width: 100%;\n  height: 35px;\n  z-index: 9;\n  opacity: 0; }\n\n.file-upload .delete-file {\n  position: absolute;\n  right: 50px;\n  top: 8px;\n  font-size: 16px;\n  opacity: .8;\n  cursor: pointer;\n  z-index: 99;\n  visibility: hidden; }\n\n.file-upload:hover .delete-file {\n  visibility: visible; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/form-elements/inputs/file-uploader/file-uploader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FileUploaderComponent = (function () {
    function FileUploaderComponent() {
    }
    FileUploaderComponent.prototype.fileChange = function (input) {
        var reader = new FileReader();
        if (input.files.length) {
            this.file = input.files[0].name;
        }
    };
    FileUploaderComponent.prototype.removeFile = function () {
        this.file = '';
    };
    return FileUploaderComponent;
}());
FileUploaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'az-file-uploader',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__("../../../../../src/app/pages/form-elements/inputs/file-uploader/file-uploader.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/form-elements/inputs/file-uploader/file-uploader.component.scss")]
    })
], FileUploaderComponent);

//# sourceMappingURL=file-uploader.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/form-elements/inputs/image-uploader/image-uploader.component.html":
/***/ (function(module, exports) {

module.exports = "<input type=\"file\" (change)=\"fileChange(input)\" #input class=\"img-upload-btn\"/>\n\n<button class=\"btn btn-main btn-block\" type=\"button\">\n     <span *ngIf=\"!image\"><i class=\"fa fa-upload\"></i> Select Image... </span>\n     <span *ngIf=\"image\"><i class=\"fa fa-refresh\"></i> Change Image... </span>\n</button>\n\n<div class=\"image-wrapper\">\n    <i *ngIf=\"image\" class=\"fa fa-times delete-img\" (click)=\"removeImage()\"></i>\n    <img [attr.src]=\"image\" *ngIf=\"image\" width=\"100%\">\n    <img src=\"assets/img/app/no-image.png\" *ngIf=\"!image\" width=\"100%\">\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/form-elements/inputs/image-uploader/image-uploader.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img-upload-btn {\n  position: absolute;\n  padding: 0;\n  width: calc(100% - 30px);\n  height: 38px;\n  opacity: 0; }\n\n.image-wrapper {\n  position: relative; }\n  .image-wrapper .delete-img {\n    position: absolute;\n    top: 8px;\n    right: 10px;\n    border: 2px solid #fff;\n    color: #fff;\n    padding: 3px 5px;\n    border-radius: 50%;\n    visibility: hidden;\n    cursor: pointer; }\n  .image-wrapper:hover .delete-img {\n    visibility: visible; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/form-elements/inputs/image-uploader/image-uploader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageUploaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ImageUploaderComponent = (function () {
    function ImageUploaderComponent() {
    }
    ImageUploaderComponent.prototype.fileChange = function (input) {
        var _this = this;
        var reader = new FileReader();
        if (input.files.length) {
            var file = input.files[0];
            reader.onload = function () {
                _this.image = reader.result;
            };
            reader.readAsDataURL(file);
        }
    };
    ImageUploaderComponent.prototype.removeImage = function () {
        this.image = '';
    };
    return ImageUploaderComponent;
}());
ImageUploaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'az-image-uploader',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__("../../../../../src/app/pages/form-elements/inputs/image-uploader/image-uploader.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/form-elements/inputs/image-uploader/image-uploader.component.scss")]
    })
], ImageUploaderComponent);

//# sourceMappingURL=image-uploader.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/form-elements/inputs/inputs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    \n    <div class=\"col-xl-6 col-lg-6 col-12 bottom-30\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>STANDARD</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n\n                <form>\n                    <div class=\"form-group\">\n                        <label for=\"input-1\">Text</label>\n                        <input type=\"text\" class=\"form-control\" id=\"input-1\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"input-2\">Password</label>\n                        <input type=\"password\" class=\"form-control\" id=\"input-2\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"input-3\">With placeholder</label>\n                        <input type=\"text\" class=\"form-control\" id=\"input-3\" placeholder=\"Enter your text here...\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"input-4\">With default value</label>\n                        <input type=\"text\" class=\"form-control\" id=\"input-4\" value=\"This is default value\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"input-5\">Rounded Corners</label>\n                        <input type=\"text\" class=\"form-control form-control-rounded\" id=\"input-5\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"input-6\">With help text</label>\n                        <input type=\"text\" class=\"form-control\" id=\"input-6\">\n                        <span class=\"help-block\">A block of help text that breaks onto a new line and may extend beyond one line.</span>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"input-7\">Disabled</label>\n                        <input type=\"email\" class=\"form-control\" id=\"input-7\" disabled value=\"admin@themeseason.com\">\n                    </div>                    \n                    <div class=\"form-group\">\n                        <label for=\"textarea-1\">Textarea</label>\n                        <textarea class=\"form-control\" id=\"textarea-1\"></textarea>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"input-8\">Small Input</label>\n                        <input type=\"text\" class=\"form-control form-control-sm\" id=\"input-8\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"input-9\">Large Input</label>\n                        <input type=\"text\" class=\"form-control form-control-lg\" id=\"input-9\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"input-10\">Number</label>\n                        <input type=\"number\" class=\"form-control\" value=\"42\" id=\"input-10\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"input-11\">Date and time</label>\n                        <input type=\"datetime-local\" class=\"form-control\"  value=\"2011-08-19T13:45:00\" id=\"input-11\">                       \n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"input-12\">Date</label>\n                        <input type=\"date\" class=\"form-control\" value=\"2011-08-19\" id=\"input-12\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"input-13\">Month</label>\n                        <input type=\"month\" class=\"form-control\" value=\"2011-08\" id=\"input-13\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"input-14\">Week</label>\n                        <input type=\"week\" class=\"form-control\" value=\"2011-W33\" id=\"input-14\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"input-15\">Time</label>\n                        <input type=\"time\" class=\"form-control\" value=\"13:45:00\" id=\"input-15\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"input-16\">Color</label>\n                        <input type=\"color\" class=\"form-control\" value=\"#58bc43\" id=\"input-16\">\n                        <span class=\"help-block sub-little-text\"><strong>Note:</strong> type=\"color\" is not supported in Internet Explorer 11 and earlier versions or Safari 9.1 and earlier versions.</span>\n                    </div>\n                </form>\n              \n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-xl-6 col-lg-6 col-12 bottom-30\">\n        \n        <div widget class=\"card bottom-30\">\n            <div class=\"card-header\">\n                <span>INPUT GROUPS</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n\n                <div class=\"form-group\">\n                     <div class=\"input-group\">\n                        <input type=\"text\" class=\"form-control\">\n                        <div class=\"input-group-addon\"><i class=\"fa fa-user\"></i></div>\n                    </div>\n                </div>\n\n                 <div class=\"form-group\">\n                    <label class=\"sr-only\" for=\"exampleInputAmount\">Amount (in dollars)</label>\n                    <div class=\"input-group\">\n                        <div class=\"input-group-addon\">$</div>\n                            <input type=\"text\" class=\"form-control\">\n                        <div class=\"input-group-addon\">.00</div>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <div class=\"input-group\">\n                        <input type=\"email\" class=\"form-control\" placeholder=\"email\">\n                        <span class=\"input-group-addon text-primary\">@domain.com</span>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <div class=\"input-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\n                        <span class=\"input-group-btn\">\n                            <button type=\"button\" class=\"btn btn-info\">Go!</button>\n                        </span>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon\">$</span>\n                        <span class=\"input-group-addon\">0.00</span>\n                        <input type=\"text\" class=\"form-control\">\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon\">\n                            <input type=\"checkbox\">\n                        </span>\n                        <input type=\"text\" class=\"form-control\">\n                    </div>\n                </div>\n\n                 <div class=\"form-group\">\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon\">\n                            <input type=\"radio\">\n                        </span>\n                        <input type=\"text\" class=\"form-control\">\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <div class=\"input-group\">\n                        <div class=\"input-group-btn\">\n                            <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\"\n                                    data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                    Action\n                            </button>\n                            <div class=\"dropdown-menu\">\n                                <a class=\"dropdown-item\" href=\"javascript:void(0);\">Action</a>\n                                <a class=\"dropdown-item\" href=\"javascript:void(0);\">Another action</a>\n                            </div>\n                        </div>\n                        <input type=\"text\" class=\"form-control\">\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <div class=\"input-group\">\n                        <div class=\"input-group-btn d-block\">\n                            <button type=\"button\" class=\"btn btn-secondary\">Action</button>\n                            <button type=\"button\" class=\"btn btn-secondary dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <span class=\"sr-only\">Toggle Dropdown</span>\n                            </button>\n                            <div class=\"dropdown-menu\">\n                                <a class=\"dropdown-item\" href=\"javascript:void(0);\">Action</a>\n                                <a class=\"dropdown-item\" href=\"javascript:void(0);\">Another action</a>\n                            </div>\n                        </div>\n                        <input type=\"text\" class=\"form-control\" aria-label=\"Text input with segmented button dropdown\">\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <div class=\"input-group\">\n                        <span class=\"input-group-btn\">\n                            <button class=\"btn btn-danger\" type=\"button\">Hate it</button>\n                        </span>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Product name\">\n                        <span class=\"input-group-btn\">\n                            <button class=\"btn btn-success\" type=\"button\">Love it</button>\n                        </span>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <div class=\"input-group input-group-sm\">                        \n                        <div class=\"input-group-addon\"><i class=\"fa fa-paperclip\"></i></div>\n                        <input type=\"text\" class=\"form-control\">\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <div class=\"input-group input-group-lg\">\n                        <div class=\"input-group-addon\"><i class=\"fa fa-paperclip\"></i></div>\n                        <input type=\"text\" class=\"form-control\">\n                    </div>\n                </div>\n             \n            </div>\n        </div>\n\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>INPUT COLORS</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n\n                <div class=\"form-group has-success\">\n                    <label class=\"form-control-label\" for=\"inputSuccess1\">Input with success</label>\n                    <input type=\"text\" class=\"form-control form-control-success\" id=\"inputSuccess1\">\n                </div>\n\n                <div class=\"form-group has-warning\">\n                    <label class=\"form-control-label\" for=\"inputWarning1\">Input with warning</label>\n                    <input type=\"text\" class=\"form-control form-control-warning\" id=\"inputWarning1\">\n                </div>\n\n                <div class=\"form-group has-danger\">\n                    <label class=\"form-control-label\" for=\"inputDanger1\">Input with danger</label>\n                    <input type=\"text\" class=\"form-control form-control-danger\" id=\"inputDanger1\">\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"input-primary\" class=\"text-primary\">Primary input</label>\n                    <input type=\"text\" class=\"form-control bg-primary text-white\" id=\"input-primary\">\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"input-success\" class=\"text-success\">Success input</label>\n                    <input type=\"text\" class=\"form-control bg-success text-white\" id=\"input-success\">\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"input-info\" class=\"text-info\">Info input</label>\n                    <input type=\"text\" class=\"form-control bg-info text-white\" id=\"input-info\">\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"input-warning\" class=\"text-warning\">Warning input</label>\n                    <input type=\"text\" class=\"form-control bg-warning text-white\" id=\"input-warning\">\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"input-danger\" class=\"text-danger\">Danger input</label>\n                    <input type=\"text\" class=\"form-control bg-danger text-white\" id=\"input-danger\">\n                </div>                \n\n            </div>\n        </div>\n\n    </div>\n\n</div>\n\n<div class=\"row bottom-30\">\n    \n    <div class=\"col\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>CHECKBOX</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body row mbm-20\">\n\n                <div class=\"col-md-4 col-12 bottom-15\">   \n                    <h6>Custom checkbox</h6>\n                    <div class=\"form-group\">\n                        <div class=\"custom-controls-stacked\">\n                            <label class=\"custom-control custom-checkbox\">\n                                <input type=\"checkbox\" class=\"custom-control-input\">\n                                <span class=\"custom-control-indicator\"></span>\n                                <span class=\"custom-control-description\">Custom</span>\n                            </label>\n                            <label class=\"custom-control custom-checkbox\">\n                                <input type=\"checkbox\" class=\"custom-control-input checkbox-primary\" checked>\n                                <span class=\"custom-control-indicator\"></span>\n                                <span class=\"custom-control-description\">Primary</span>\n                            </label>\n                            <label class=\"custom-control custom-checkbox\">\n                                <input type=\"checkbox\" class=\"custom-control-input checkbox-success\" checked>\n                                <span class=\"custom-control-indicator\"></span>\n                                <span class=\"custom-control-description\">Success</span>\n                            </label>\n                            <label class=\"custom-control custom-checkbox\">\n                                <input type=\"checkbox\" class=\"custom-control-input checkbox-info\">\n                                <span class=\"custom-control-indicator\"></span>\n                                <span class=\"custom-control-description\">Info</span>\n                            </label>\n                            <label class=\"custom-control custom-checkbox\">\n                                <input type=\"checkbox\" class=\"custom-control-input checkbox-warning\" checked>\n                                <span class=\"custom-control-indicator\"></span>\n                                <span class=\"custom-control-description\">Warning</span>\n                            </label>\n                            <label class=\"custom-control custom-checkbox\">\n                                <input type=\"checkbox\" class=\"custom-control-input checkbox-danger\">\n                                <span class=\"custom-control-indicator\"></span>\n                                <span class=\"custom-control-description\">Danger</span>\n                            </label>\n                            <label class=\"custom-control custom-checkbox\">\n                                <input type=\"checkbox\" class=\"custom-control-input checkbox-main\">\n                                <span class=\"custom-control-indicator\"></span>\n                                <span class=\"custom-control-description\">Main</span>\n                            </label>\n                        </div>\n                    </div>\n                </div> \n                <div class=\"col-md-4 col-12 bottom-15\">   \n                    <h6>Circled checkbox</h6>\n                    <div class=\"form-group\">\n                        <div class=\"custom-controls-stacked\">\n                            <label class=\"custom-control custom-checkbox\">\n                                <input type=\"checkbox\" class=\"custom-control-input checkbox-circle\" checked>\n                                <span class=\"custom-control-indicator\"></span>\n                                <span class=\"custom-control-description\">Custom</span>\n                            </label>\n                            <label class=\"custom-control custom-checkbox\">\n                                <input type=\"checkbox\" class=\"custom-control-input checkbox-primary checkbox-circle\">\n                                <span class=\"custom-control-indicator\"></span>\n                                <span class=\"custom-control-description\">Primary</span>\n                            </label>\n                            <label class=\"custom-control custom-checkbox\">\n                                <input type=\"checkbox\" class=\"custom-control-input checkbox-success checkbox-circle\" checked>\n                                <span class=\"custom-control-indicator\"></span>\n                                <span class=\"custom-control-description\">Success</span>\n                            </label>\n                            <label class=\"custom-control custom-checkbox\">\n                                <input type=\"checkbox\" class=\"custom-control-input checkbox-info checkbox-circle\" checked>\n                                <span class=\"custom-control-indicator\"></span>\n                                <span class=\"custom-control-description\">Info</span>\n                            </label>\n                            <label class=\"custom-control custom-checkbox\">\n                                <input type=\"checkbox\" class=\"custom-control-input checkbox-warning checkbox-circle\">\n                                <span class=\"custom-control-indicator\"></span>\n                                <span class=\"custom-control-description\">Warning</span>\n                            </label>\n                            <label class=\"custom-control custom-checkbox\">\n                                <input type=\"checkbox\" class=\"custom-control-input checkbox-danger checkbox-circle\" checked>\n                                <span class=\"custom-control-indicator\"></span>\n                                <span class=\"custom-control-description\">Danger</span>\n                            </label>\n                            <label class=\"custom-control custom-checkbox\">\n                                <input type=\"checkbox\" class=\"custom-control-input checkbox-main checkbox-circle\" checked>\n                                <span class=\"custom-control-indicator\"></span>\n                                <span class=\"custom-control-description\">Main</span>\n                            </label>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4 col-12\">   \n                    <h6>ABC checkbox</h6>\n                    <div class=\"form-group\">\n                        <div class=\"abc-checkbox\">\n                            <input id=\"checkbox1\" type=\"checkbox\">\n                            <label for=\"checkbox1\">Default</label>\n                        </div>\n                        <div class=\"abc-checkbox abc-checkbox-primary\">\n                            <input id=\"checkbox2\" type=\"checkbox\" checked>\n                            <label for=\"checkbox2\">Primary</label>\n                        </div>\n                        <div class=\"abc-checkbox abc-checkbox-success\">\n                            <input id=\"checkbox3\" type=\"checkbox\">\n                            <label for=\"checkbox3\">Success</label>\n                        </div>\n                        <div class=\"abc-checkbox abc-checkbox-info\">\n                            <input id=\"checkbox4\" type=\"checkbox\" checked>\n                            <label for=\"checkbox4\">Info</label>\n                        </div>\n                        <div class=\"abc-checkbox abc-checkbox-warning\">\n                            <input id=\"checkbox5\" type=\"checkbox\">\n                            <label for=\"checkbox5\">Warning</label>\n                        </div>\n                        <div class=\"abc-checkbox abc-checkbox-danger\">\n                            <input id=\"checkbox6\" type=\"checkbox\" checked>\n                            <label for=\"checkbox6\">Danger</label>\n                        </div>\n                        <div class=\"abc-checkbox abc-checkbox-success\">\n                            <input checked disabled id=\"disabled-checkbox\" type=\"checkbox\">\n                            <label for=\"disabled-checkbox\">Disabled</label>\n                        </div>\n                    </div>\n                </div>  \n\n            </div>\n        </div>\n    </div>    \n\n</div>\n\n<div class=\"row  bottom-30\">\n    \n    <div class=\"col-xl-6 col-lg-6 col-12 bottom-30\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>RADIO BUTTON</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\"> \n\n                <div class=\"col bottom-15\">\n                    <h6>Inline radio buttons</h6>\n                    <div class=\"form-group\">\n                        <label class=\"custom-control custom-radio\">\n                            <input id=\"radio1\" name=\"radio\" type=\"radio\" class=\"custom-control-input\" checked>\n                            <span class=\"custom-control-indicator\"></span>\n                            <span class=\"custom-control-description\">radio button 1</span>\n                        </label>\n                        <label class=\"custom-control custom-radio\">\n                            <input id=\"radio2\" name=\"radio\" type=\"radio\" class=\"custom-control-input\">\n                            <span class=\"custom-control-indicator\"></span>\n                            <span class=\"custom-control-description\">radio button 2</span>\n                        </label>\n                    </div>\n                </div>\n\n                <div class=\"row pl-3 pr-3\">\n                     \n                    <div class=\"col-md-6 col-12 bottom-15\">\n                        <h6>Custom radio buttons</h6>\n                        <div class=\"form-group\">\n                            <div class=\"custom-controls-stacked\">\n                                <label class=\"custom-control custom-radio\">\n                                    <input type=\"radio\" name=\"stacked-radio\" class=\"custom-control-input\">\n                                    <span class=\"custom-control-indicator\"></span>\n                                    <span class=\"custom-control-description\">Default</span>\n                                </label>\n                                <label class=\"custom-control custom-radio\">\n                                    <input type=\"radio\" name=\"stacked-radio\" class=\"custom-control-input radio-primary\">\n                                    <span class=\"custom-control-indicator\"></span>\n                                    <span class=\"custom-control-description\">Primary</span>\n                                </label>\n                                <label class=\"custom-control custom-radio\">\n                                    <input type=\"radio\" name=\"stacked-radio\" class=\"custom-control-input radio-success\" checked>\n                                    <span class=\"custom-control-indicator\"></span>\n                                    <span class=\"custom-control-description\">Success</span>\n                                </label>\n                                <label class=\"custom-control custom-radio\">\n                                    <input type=\"radio\" name=\"stacked-radio\" class=\"custom-control-input radio-info\">\n                                    <span class=\"custom-control-indicator\"></span>\n                                    <span class=\"custom-control-description\">Info</span>\n                                </label>\n                                <label class=\"custom-control custom-radio\">\n                                    <input type=\"radio\" name=\"stacked-radio\" class=\"custom-control-input radio-warning\">\n                                    <span class=\"custom-control-indicator\"></span>\n                                    <span class=\"custom-control-description\">Warning</span>\n                                </label>\n                                <label class=\"custom-control custom-radio\">\n                                    <input type=\"radio\" name=\"stacked-radio\" class=\"custom-control-input radio-danger\">\n                                    <span class=\"custom-control-indicator\"></span>\n                                    <span class=\"custom-control-description\">Danger</span>\n                                </label>\n                                <label class=\"custom-control custom-radio\">\n                                    <input type=\"radio\" name=\"stacked-radio\" class=\"custom-control-input radio-main\">\n                                    <span class=\"custom-control-indicator\"></span>\n                                    <span class=\"custom-control-description\">Main</span>\n                                </label>\n                            </div>\n                        </div>\n\n                    </div>\n\n                    <div class=\"col-md-6 col-12\">\n                        <h6>ABC radio buttons</h6>\n                        <div class=\"form-group\">\n                            <div class=\"abc-radio\">\n                                <input type=\"radio\" name=\"abc-radio\" id=\"abc-radio1\" checked>\n                                <label for=\"abc-radio1\">Default</label>\n                            </div>\n                            <div class=\"abc-radio abc-radio-primary\">\n                                <input type=\"radio\" name=\"abc-radio\" id=\"abc-radio2\">\n                                <label for=\"abc-radio2\">Primary</label>\n                            </div>\n                            <div class=\"abc-radio abc-radio-success\">\n                                <input type=\"radio\" name=\"abc-radio\" id=\"abc-radio3\">\n                                <label for=\"abc-radio3\">Success</label>\n                            </div>\n                            <div class=\"abc-radio abc-radio-info\">\n                                <input type=\"radio\" name=\"abc-radio\" id=\"abc-radio4\">\n                                <label for=\"abc-radio4\">Info</label>\n                            </div>\n                            <div class=\"abc-radio abc-radio-warning\">\n                                <input type=\"radio\" name=\"abc-radio\" id=\"abc-radio5\">\n                                <label for=\"abc-radio5\">Warning</label>\n                            </div>\n                            <div class=\"abc-radio abc-radio-danger\">\n                                <input type=\"radio\" name=\"abc-radio\" id=\"abc-radio6\">\n                                <label for=\"abc-radio6\">Danger</label>\n                            </div>\n                            \n                        </div>\n                    </div>  \n\n                </div>\n                          \n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-xl-6 col-lg-6 col-12\">\n        \n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>SELECTS</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n\n                <div class=\"form-group\">\n                    <label for=\"exampleSelect1\">Example select</label>\n                    <select class=\"form-control\" id=\"exampleSelect1\">\n                        <option>1</option>\n                        <option>2</option>\n                        <option>3</option>\n                        <option>4</option>\n                        <option>5</option>\n                    </select>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"exampleSelect2\">Example multiple select</label>\n                    <select multiple class=\"form-control\" id=\"exampleSelect2\">\n                        <option>1</option>\n                        <option>2</option>\n                        <option>3</option>\n                        <option>4</option>\n                        <option>5</option>\n                    </select>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"exampleSelect3\">Custom select</label>\n                    <select class=\"form-control custom-select\" id=\"exampleSelect3\">\n                        <option selected>Open this select menu</option>\n                        <option value=\"1\">One</option>\n                        <option value=\"2\">Two</option>\n                        <option value=\"3\">Three</option>\n                    </select>\n                </div>\n               \n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row bottom-30\">\n     <div class=\"col-12\">\n        \n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>UPLOADS</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n                \n                <div class=\"row\">\n                    <div class=\"col-lg-4 col-12 bottom-15\">\n                        <h6>File upload</h6>\n                        <az-file-uploader></az-file-uploader>\n\n                        <h6>Image upload</h6>\n                        <az-image-uploader></az-image-uploader>\n                    </div>\n\n                    <div class=\"col-lg-8 col-12 bottom-15\">\n                        <h6 class=\"text-center\">Multiple Image Uploader</h6>\n                        <az-multiple-image-uploader></az-multiple-image-uploader>\n                    </div>\n                </div>                \n               \n            </div>\n        </div>\n\n    </div>    \n</div>\n\n\n<div class=\"row\">\n    \n    <div class=\"col\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>DROP ZONE</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n\n                <form class=\"dropzone\" dropzone action=\"#\" id=\"my-awesome-dropzone\"></form>\n\n            </div>\n        </div>\n    </div>    \n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/form-elements/inputs/inputs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InputsComponent = (function () {
    function InputsComponent() {
    }
    return InputsComponent;
}());
InputsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'az-inputs',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__("../../../../../src/app/pages/form-elements/inputs/inputs.component.html")
    })
], InputsComponent);

//# sourceMappingURL=inputs.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/form-elements/inputs/multiple-image-uploader/multiple-image-uploader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-8 offset-2\">\n    <input type=\"file\" multiple (change)=\"fileChange(input)\" #input class=\"m-img-upload-btn\"/>\n    <button class=\"btn btn-success btn-block\" type=\"button\">\n        <i class=\"fa fa-upload\"></i> Choose images...\n    </button>\n</div>\n\n<div class=\"card images-container\">\n    <div *ngFor=\"let image of images; let i=index;\" class=\"m-image-wrapper\">\n        <i class=\"fa fa-times m-delete-img\" (click)=\"removeImage(i)\"></i>\n        <img [attr.src]=\"image\"> \n    </div> \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/form-elements/inputs/multiple-image-uploader/multiple-image-uploader.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".m-img-upload-btn {\n  position: absolute;\n  padding: 0;\n  width: calc(100% - 30px);\n  height: 38px;\n  opacity: 0; }\n\n.images-container {\n  width: 100%;\n  top: 15px;\n  border: 2px dashed #ccc;\n  background: #f1f1f1;\n  min-height: 293px;\n  padding: 10px;\n  display: block; }\n  .images-container .m-image-wrapper {\n    position: relative;\n    display: inline-block;\n    margin: 10px;\n    width: 120px;\n    height: 120px; }\n    .images-container .m-image-wrapper .m-delete-img {\n      position: absolute;\n      top: 8px;\n      right: 10px;\n      border: 2px solid #fff;\n      color: #fff;\n      padding: 3px 5px;\n      border-radius: 50%;\n      visibility: hidden;\n      cursor: pointer; }\n    .images-container .m-image-wrapper:hover .m-delete-img {\n      visibility: visible; }\n    .images-container .m-image-wrapper img {\n      width: 120px;\n      height: 120px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/form-elements/inputs/multiple-image-uploader/multiple-image-uploader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultipleImageUploaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MultipleImageUploaderComponent = (function () {
    function MultipleImageUploaderComponent(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.images = [];
    }
    MultipleImageUploaderComponent.prototype.fileChange = function (input) {
        this.readFiles(input.files);
    };
    MultipleImageUploaderComponent.prototype.readFile = function (file, reader, callback) {
        reader.onload = function () {
            callback(reader.result);
        };
        reader.readAsDataURL(file);
    };
    MultipleImageUploaderComponent.prototype.readFiles = function (files, index) {
        var _this = this;
        if (index === void 0) { index = 0; }
        var reader = new FileReader();
        if (index in files) {
            this.readFile(files[index], reader, function (result) {
                _this.images.push(result);
                _this.readFiles(files, index + 1);
            });
        }
        else {
            this.changeDetectorRef.detectChanges();
        }
    };
    MultipleImageUploaderComponent.prototype.removeImage = function (index) {
        this.images.splice(index, 1);
    };
    return MultipleImageUploaderComponent;
}());
MultipleImageUploaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'az-multiple-image-uploader',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__("../../../../../src/app/pages/form-elements/inputs/multiple-image-uploader/multiple-image-uploader.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/form-elements/inputs/multiple-image-uploader/multiple-image-uploader.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _a || Object])
], MultipleImageUploaderComponent);

var _a;
//# sourceMappingURL=multiple-image-uploader.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/form-elements/layouts/layouts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row bottom-30\">\n    <div class=\"col\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>INLINE FORM</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n\n                <form class=\"row form-inline\">\n                    <div class=\"form-group col-md-3 col-sm-6\">\n                        <input type=\"email\" class=\"form-control\" placeholder=\"Email\">\n                    </div>\n                    <div class=\"form-group col-md-3 col-sm-6\">\n                        <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n                    </div>  \n                    <div class=\"form-group col-lg-2 col-md-3 col-sm-6\">\n                        <label class=\"custom-control custom-checkbox\">\n                            <input class=\"custom-control-input\" type=\"checkbox\">\n                            <span class=\"custom-control-indicator\"></span>\n                            <span class=\"custom-control-description\">Remember me</span>\n                        </label>\n                    </div> \n                    <div class=\"form-group col-md-3 col-sm-6\">\n                        <button type=\"submit\" class=\"btn btn-main\">Sign in</button>\n                    </div> \n                </form>\n\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">    \n    \n    <div class=\"col-xl-6 col-lg-6 col-12 bottom-30\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>BASIC FORM</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n\n                <form class=\"form\">\n                    <div class=\"form-group\">\n                        <label for=\"email-b-f\">Email</label>\n                        <input id=\"email-b-f\" class=\"form-control\" type=\"email\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"password-b-f\">Password</label>\n                        <input id=\"password-b-f\" class=\"form-control\" type=\"password\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"custom-control custom-checkbox\">\n                            <input class=\"custom-control-input checkbox-main\" type=\"checkbox\" checked=\"\" >\n                            <span class=\"custom-control-indicator\"></span>\n                            <span class=\"custom-control-description align-middle\">Keep me signed in.</span>\n                        </label>\n                        <a href=\"javascript:void(0);\" class=\"text-primary align-middle\">Forgot password?</a>\n                    </div>\n                    <div class=\"form-group\">\n                        <button class=\"btn btn-main btn-block\" type=\"submit\">Sign in</button>\n                    </div>\n                </form>\n\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-xl-6 col-lg-6 col-12 bottom-30\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>HORIZONTAL FORM</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n\n                <h6 class=\"card-title text-center\">To enjoy more, sing in!</h6>\n\n                <form class=\"form-horizontal\">\n                    <div class=\"form-group row text-right\">\n                        <label for=\"email-h-f\" class=\"col-sm-3 form-control-label m-t-5\">Email</label>\n                        <div class=\"col-sm-9\">\n                            <input type=\"email\" class=\"form-control\" id=\"email-h-t\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row text-right\">\n                        <label for=\"password-h-f\" class=\"col-sm-3 form-control-label m-t-5\">Password</label>\n                        <div class=\"col-sm-9\">\n                            <input type=\"password\" class=\"form-control\" id=\"password-h-f\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row text-right\">\n                        <label for=\"re-password-h-f\" class=\"col-sm-3 form-control-label m-t-5\">Re Password</label>\n                        <div class=\"col-sm-9\">\n                            <input type=\"password\" class=\"form-control\" id=\"re-password-h-f\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <div class=\"col-sm-9 offset-sm-3\">\n                            <label class=\"custom-control custom-checkbox\">\n                                <input class=\"custom-control-input checkbox-main\" type=\"checkbox\" checked=\"\" >\n                                <span class=\"custom-control-indicator\"></span>\n                                <span class=\"custom-control-description align-middle\">Keep me signed in</span>\n                            </label>\n                            <button class=\"btn btn-main pull-right\" type=\"submit\">Sign in</button>\n                        </div>\n                    </div>\n                </form>\n\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<div class=\"row\">    \n    \n    <div class=\"col-xl-6 col-lg-6 col-12 bottom-30\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>FORM WITHOUT LABELS</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n\n               <form>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Recipients\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Subject\">\n                    </div>\n                    <div class=\"form-group\">\n                        <textarea class=\"form-control\" placeholder=\"Message\" rows=\"3\"></textarea>\n                    </div>\n                    <button type=\"submit\" class=\"btn btn-main\">Send</button>\n                </form>\n\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-xl-6 col-lg-6 col-12 bottom-30\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>BLOCK FORM</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n\n                <h6 class=\"card-title text-center\">Fill in the fields!</h6>\n\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                        <label for=\"inputFirstName\">First Name</label>\n                        <input type=\"text\" class=\"form-control\" id=\"inputFirstName\" placeholder=\"First Name\">\n                        </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                        <label for=\"inputLastName\">Last Name</label>\n                        <input type=\"text\" class=\"form-control\" id=\"inputLastName\" placeholder=\"Last Name\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                        <label for=\"inputFirstName\">Email</label>\n                        <input type=\"email\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Email\">\n                        </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                        <label for=\"inputWebsite\">Website</label>\n                        <input type=\"text\" class=\"form-control\" id=\"inputWebsite\" placeholder=\"Website\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row justify-content-center\">\n                    <button type=\"submit\" class=\"btn btn-main\">Submit</button>\n                </div>               \n\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/form-elements/layouts/layouts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LayoutsComponent = (function () {
    function LayoutsComponent() {
    }
    return LayoutsComponent;
}());
LayoutsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'az-layouts',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__("../../../../../src/app/pages/form-elements/layouts/layouts.component.html")
    })
], LayoutsComponent);

//# sourceMappingURL=layouts.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/form-elements/validations/validations.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>VALIDATORS</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n\n                <div class=\"col-md-9 col-12 offset-md-1\">\n\n                    <form (ngSubmit)=\"onSubmit(myForm)\" [formGroup]=\"myForm\">\n                      \n                        <div class=\"form-group row text-sm-right\">\n                            <label class=\"col-sm-3 form-control-label m-t-5\">Simple</label>\n                            <div class=\"col-sm-8 text-left\">\n                                <input class=\"form-control checking-field\" type=\"text\" formControlName=\"simple\" required>\n                                <span class=\"help-block text-danger\" *ngIf=\"myForm.get('simple').touched && myForm.get('simple').hasError('required')\">Field is required</span>                              \n                            </div>\n                        </div>\n\n                        <div class=\"form-group row text-sm-right\">\n                            <label class=\"col-sm-3 form-control-label m-t-5\">Min length (3)</label>\n                            <div class=\"col-sm-8 text-left\">\n                                <input class=\"form-control checking-field\" type=\"text\" formControlName=\"minLength\" required>\n                                <span class=\"help-block\" *ngIf=\"myForm.get('minLength').touched\">\n                                    <span class=\"text-danger\" *ngIf=\"myForm.get('minLength').hasError('required')\">Field is required</span>\n                                    <span class=\"text-danger\" *ngIf=\"myForm.get('minLength').hasError('minlength')\">Minimum of 3 characters</span>\n                                </span>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group row text-sm-right\">\n                            <label class=\"col-sm-3 form-control-label m-t-5\">Max length (10)</label>\n                            <div class=\"col-sm-8 text-left\">\n                                <input class=\"form-control checking-field\" type=\"text\" formControlName=\"maxLength\" required>\n                                <span class=\"help-block text-danger\" *ngIf=\"myForm.get('maxLength').touched && myForm.get('maxLength').hasError('required')\">Field is required</span>                              \n                                <span class=\"help-block text-danger\" *ngIf=\"myForm.get('maxLength').touched && myForm.get('maxLength').hasError('maxlength')\">Maximum of 10 characters</span>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group row text-sm-right\">\n                            <label class=\"col-sm-3 form-control-label m-t-5\">Email</label>\n                            <div class=\"col-sm-8 text-left\">\n                                <input class=\"form-control checking-field\" type=\"email\" formControlName=\"email\" required>\n                                <span class=\"help-block text-danger\" *ngIf=\"myForm.get('email').touched && myForm.get('email').hasError('required')\">Email is required</span>                              \n                                <span class=\"help-block text-danger\" *ngIf=\"myForm.get('email').touched && myForm.get('email').hasError('invalidEmail')\">Invalid email address</span>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group row text-sm-right\">\n                            <label class=\"col-sm-3 form-control-label m-t-5\">Password</label>\n                            <div class=\"col-sm-8 text-left\">\n                                <input class=\"form-control checking-field\" type=\"password\" formControlName=\"password\" minlength=\"6\" required>\n                                <span class=\"help-block text-danger\" *ngIf=\"myForm.get('password').touched && myForm.get('password').hasError('required')\">Password is required</span>                              \n                                <span class=\"help-block text-danger\" *ngIf=\"myForm.get('password').touched && myForm.get('password').hasError('minlength')\">Password isn't long enough, minimum of 6 characters</span>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group row text-sm-right\">\n                            <label class=\"col-sm-3 form-control-label m-t-5\">Confirm Password</label>\n                            <div class=\"col-sm-8 text-left\">\n                                <input class=\"form-control checking-field\" type=\"password\" formControlName=\"confirmPassword\" required>\n                                <span class=\"help-block text-danger\" *ngIf=\"myForm.get('confirmPassword').touched && myForm.get('confirmPassword').hasError('required')\">Password is required</span>                              \n                                <span class=\"help-block text-danger\" *ngIf=\"myForm.get('confirmPassword').touched && myForm.get('confirmPassword').hasError('mismatchedPasswords')\">Passwords do not match</span> \n                            </div>\n                        </div>\n\n                        <div class=\"form-group row text-sm-right\">\n                            <label class=\"col-sm-3 form-control-label m-t-5\">Website</label>\n                            <div class=\"col-sm-8 text-left\">\n                                <input class=\"form-control checking-field\" type=\"text\" formControlName=\"website\" required>\n                                <span class=\"help-block text-danger\" *ngIf=\"myForm.get('website').touched && myForm.get('website').hasError('required')\">Website is required</span>                              \n                                <span class=\"help-block text-danger\" *ngIf=\"myForm.get('website').touched && myForm.get('website').hasError('invalidUrl')\">Invalid url address</span>\n                            </div>\n                        </div>\n                        \n                        <div class=\"form-group row\">\n                            <div class=\"col-sm-8 offset-sm-3 text-center\">\n                                <button class=\"btn btn-main\" type=\"submit\" [disabled]=\"myForm.invalid\">Validate &amp; Submit</button>\n                            </div>\n                        </div>\n                    </form>\n\n\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/form-elements/validations/validations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationsComponent; });
/* unused harmony export emailValidator */
/* unused harmony export websiteValidator */
/* unused harmony export matchingPasswords */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ValidationsComponent = (function () {
    function ValidationsComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ValidationsComponent.prototype.ngOnInit = function () {
        this.myForm = this.formBuilder.group({
            simple: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            minLength: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3)])],
            maxLength: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(10)])],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, emailValidator])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            website: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, websiteValidator])]
        }, { validator: matchingPasswords('password', 'confirmPassword') });
    };
    ValidationsComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        console.log(value, valid);
    };
    return ValidationsComponent;
}());
ValidationsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'az-validations',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__("../../../../../src/app/pages/form-elements/validations/validations.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object])
], ValidationsComponent);

function emailValidator(control) {
    var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    if (control.value && !emailRegexp.test(control.value)) {
        return { invalidEmail: true };
    }
}
function websiteValidator(control) {
    var websiteRegexp = /(https?:\/\/)?([\w\d]+\.)?[\w\d]+\.\w+\/?.+$/;
    if (control.value && !websiteRegexp.test(control.value)) {
        return { invalidUrl: true };
    }
}
function matchingPasswords(passwordKey, passwordConfirmationKey) {
    return function (group) {
        var password = group.controls[passwordKey];
        var passwordConfirmation = group.controls[passwordConfirmationKey];
        if (password.value !== passwordConfirmation.value) {
            return passwordConfirmation.setErrors({ mismatchedPasswords: true });
        }
    };
}
var _a;
//# sourceMappingURL=validations.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/form-elements/wizard/wizard-validation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardValidationService; });
var WizardValidationService = (function () {
    function WizardValidationService() {
    }
    WizardValidationService.emailValidator = function (control) {
        var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
        if (control.value && !emailRegexp.test(control.value)) {
            return { invalidEmail: true };
        }
    };
    WizardValidationService.matchingPasswords = function (passwordKey, passwordConfirmationKey) {
        return function (group) {
            var password = group.controls[passwordKey];
            var passwordConfirmation = group.controls[passwordConfirmationKey];
            if (password.value !== passwordConfirmation.value) {
                return passwordConfirmation.setErrors({ mismatchedPasswords: true });
            }
        };
    };
    WizardValidationService.numberValidator = function (control) {
        var onlyNumberRegexp = /.*[^0-9].*/;
        if (control.value && onlyNumberRegexp.test(control.value)) {
            return { invalidNumber: true };
        }
    };
    return WizardValidationService;
}());

//# sourceMappingURL=wizard-validation.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/form-elements/wizard/wizard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-12\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>Form Wizard</span>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n                <div class=\"row\">\n                    <div *ngFor=\"let step of steps; let last = last\" class=\"col-md-3 col-sm-6 col-12 step\" [class.active]=\"step.active\" [class.valid]=\"step.valid\" [ngClass]=\"{'last' : last }\">\n                        <div class=\"step-icon\">\n                            <i class=\"fa {{ step.icon }}\" aria-hidden=\"true\"></i>\n                        </div> \n                        <span class=\"step-name\" [class.active]=\"step.active\" [class.valid]=\"step.valid\">{{step.name}}</span>    \n                    </div> \n                </div>               \n             \n                <div *ngFor=\"let step of steps\" [hidden]=\"!step.active\" class=\"col form-wizard\">\n                    <div class=\"row form-title\">\n                        <h4><i class=\"fa {{ step.icon }}\"></i> {{step.name}}</h4>\n                    </div>\n                        \n                    <form *ngIf=\"step.name=='Account Information'\" [formGroup]=\"accountForm\" class=\"row\">\n                        <div class=\"form-group col-md-7\" [ngClass]=\"{'has-danger' : step.hasError && accountForm.get('username').hasError('required'), 'has-success' : !accountForm.get('username').hasError('required') }\">\n                            <label class=\"form-control-label\">Username</label>\n                            <div class=\"input-group\"> \n                                <div class=\"input-group-addon\"><i class=\"fa fa-user-o\"></i></div>   \n                                <input formControlName=\"username\" class=\"form-control\" [ngClass]=\"{'form-control-danger' :  accountForm.get('username').hasError('required'), 'form-control-success' :  !accountForm.get('username').hasError('required') }\" type=\"text\"> \n                            </div>\n                            <span class=\"help-block text-danger\" *ngIf=\"step.hasError && accountForm.get('username').hasError('required')\">Username is required</span>                             \n                        </div>\n\n                        <div class=\"form-group col-md-7\" [ngClass]=\"{'has-danger' : (step.hasError && accountForm.get('password').hasError('required')) || (step.hasError && accountForm.get('password').hasError('minlength')), \n                                                                     'has-success' : !accountForm.get('password').hasError('required') && !accountForm.get('password').hasError('minlength')}\">\n                            <label class=\"form-control-label\">Password</label> \n                            <div class=\"input-group\"> \n                                <div class=\"input-group-addon\"><i class=\"fa fa-key\"></i></div>                       \n                                <input formControlName=\"password\" class=\"form-control\" [ngClass]=\"{'form-control-danger' : (step.hasError && accountForm.get('password').hasError('required')) || (step.hasError && accountForm.get('password').hasError('minlength')),                                                                                                        'form-control-success' : !accountForm.get('password').hasError('required') && !accountForm.get('password').hasError('minlength')}\" type=\"password\">\n                            </div>\n                            <span class=\"help-block text-danger\" *ngIf=\"step.hasError && accountForm.get('password').hasError('required')\">Password is required</span>                              \n                            <span class=\"help-block text-danger\" *ngIf=\"step.hasError && accountForm.get('password').hasError('minlength')\">Password isn't long enough, minimum of 6 characters</span>                            \n                        </div>\n\n                        <div class=\"form-group col-md-7\" [ngClass]=\"{'has-danger' : (step.hasError && accountForm.get('confirmPassword').hasError('required')) || (step.hasError && accountForm.get('confirmPassword').hasError('mismatchedPasswords')), \n                                                                     'has-success' : !accountForm.get('confirmPassword').hasError('required') && !accountForm.get('confirmPassword').hasError('mismatchedPasswords')}\">\n                            <label class=\"form-control-label\">Confirm Password</label>                              \n                            <div class=\"input-group\"> \n                                <div class=\"input-group-addon\"><i class=\"fa fa-key\"></i></div>     \n                                <input formControlName=\"confirmPassword\" class=\"form-control\" [ngClass]=\"{'form-control-danger' : (step.hasError && accountForm.get('confirmPassword').hasError('required')) || (step.hasError && accountForm.get('confirmPassword').hasError('mismatchedPasswords')), \n                                                                                                          'form-control-success' : !accountForm.get('confirmPassword').hasError('required') && !accountForm.get('confirmPassword').hasError('mismatchedPasswords')}\" type=\"password\" >\n                            </div>\n                            <span class=\"help-block text-danger\" *ngIf=\"step.hasError && accountForm.get('confirmPassword').hasError('required')\">Password is required</span>                              \n                            <span class=\"help-block text-danger\" *ngIf=\"step.hasError && accountForm.get('confirmPassword').hasError('mismatchedPasswords')\">Passwords do not match</span> \n                        </div>\n\n                        <div class=\"form-group col-md-7\" [ngClass]=\"{'has-danger' : (step.hasError && accountForm.get('email').hasError('required')) || (step.hasError && accountForm.get('email').hasError('invalidEmail')), \n                                                            'has-success' : !accountForm.get('email').hasError('required') && !accountForm.get('email').hasError('invalidEmail')}\">\n                            <label class=\"form-control-label\">Email</label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-addon\"><i class=\"fa fa-envelope\"></i></div>\n                                <input formControlName=\"email\" class=\"form-control\" [ngClass]=\"{'form-control-danger' : (step.hasError && accountForm.get('email').hasError('required')) || (step.hasError && accountForm.get('email').hasError('invalidEmail')), \n                                                                                                'form-control-success' :  !accountForm.get('email').hasError('required') && !accountForm.get('email').hasError('invalidEmail')}\" type=\"text\">                      \n                            </div>\n                            <span class=\"help-block text-danger\" *ngIf=\"step.hasError && accountForm.get('email').hasError('required')\">Email is required</span>                              \n                            <span class=\"help-block text-danger\" *ngIf=\"step.hasError && accountForm.get('email').hasError('invalidEmail')\">Invalid email address</span>\n                        </div>\n                    </form>\n\n                    <form *ngIf=\"step.name=='Personal Information'\" [formGroup]=\"personalForm\" class=\"row\">\n                        <div class=\"form-group col-md-2\">\n                            <label class=\"form-control-label\">Salutation</label>\n                            <select formControlName=\"salutation\" class=\"form-control\">\n                                <option>Mr</option>\n                                <option>Mrs</option>\n                            </select>\n                        </div>      \n\n                        <div class=\"form-group col-md-5\" [ngClass]=\"{'has-danger' : step.hasError && personalForm.get('firstname').hasError('required'), 'has-success' : !personalForm.get('firstname').hasError('required') }\">\n                            <label class=\"form-control-label\">First Name</label>\n                            <input formControlName=\"firstname\" class=\"form-control\" [ngClass]=\"{'form-control-danger' :  personalForm.get('firstname').hasError('required'), 'form-control-success' :  !personalForm.get('firstname').hasError('required') }\" type=\"text\"> \n                            <span class=\"help-block text-danger\" *ngIf=\"step.hasError && personalForm.get('firstname').hasError('required')\">First Name is required</span>                             \n                        </div>\n\n                        <div class=\"form-group col-md-5\" [ngClass]=\"{'has-danger' : step.hasError && personalForm.get('lastname').hasError('required'), 'has-success' : !personalForm.get('lastname').hasError('required') }\">\n                            <label class=\"form-control-label\">Last Name</label>\n                            <input formControlName=\"lastname\" class=\"form-control\" [ngClass]=\"{'form-control-danger' :  personalForm.get('lastname').hasError('required'), 'form-control-success' :  !personalForm.get('lastname').hasError('required') }\" type=\"text\"> \n                            <span class=\"help-block text-danger\" *ngIf=\"step.hasError && personalForm.get('lastname').hasError('required')\">Last Name is required</span>                             \n                        </div>\n\n                        <div class=\"form-group col-md-3\">\n                            <label class=\"form-control-label\">Gender</label>\n                            <select formControlName=\"gender\" class=\"form-control\">\n                                <option>Male</option>\n                                <option>Female</option>\n                            </select>\n                        </div>\n\n                        <div class=\"form-group col-md-5\" [ngClass]=\"{'has-danger' : (step.hasError && personalForm.get('email').hasError('required')) || (step.hasError && personalForm.get('email').hasError('invalidEmail')), \n                                                                     'has-success' : !personalForm.get('email').hasError('required') && !personalForm.get('email').hasError('invalidEmail')}\">\n                            <label class=\"form-control-label\">Contact email</label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-addon\"><i class=\"fa fa-envelope\"></i></div>\n                                <input formControlName=\"email\" class=\"form-control\" [ngClass]=\"{'form-control-danger' : (step.hasError && personalForm.get('email').hasError('required')) || (step.hasError && personalForm.get('email').hasError('invalidEmail')), \n                                                                                                'form-control-success' :  !personalForm.get('email').hasError('required') && !personalForm.get('email').hasError('invalidEmail')}\" type=\"text\">                      \n                            </div>\n                            <span class=\"help-block text-danger\" *ngIf=\"step.hasError && personalForm.get('email').hasError('required')\">Email is required</span>                              \n                            <span class=\"help-block text-danger\" *ngIf=\"step.hasError && personalForm.get('email').hasError('invalidEmail')\">Invalid email address</span>\n                        </div>\n\n                        <div class=\"form-group col-md-4\" [ngClass]=\"{'has-danger' : step.hasError && personalForm.get('phone').hasError('required'), 'has-success' : !personalForm.get('phone').hasError('required') }\">\n                            <label class=\"form-control-label\">Phone</label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-addon\"><i class=\"fa fa-phone\"></i></div>\n                                <input formControlName=\"phone\" class=\"form-control\" [ngClass]=\"{'form-control-danger' :  personalForm.get('phone').hasError('required'), 'form-control-success' :  !personalForm.get('phone').hasError('required') }\" type=\"number\"> \n                            </div>\n                            <span class=\"help-block text-danger\" *ngIf=\"step.hasError && personalForm.get('phone').hasError('required')\">Phone is required</span>                             \n                        </div>\n\n                        <div class=\"form-group col-md-2\" [ngClass]=\"{'has-danger' : step.hasError && personalForm.get('zipcode').hasError('required'), 'has-success' : !personalForm.get('zipcode').hasError('required') }\">\n                            <label class=\"form-control-label\">Zip Code</label>\n                            <input formControlName=\"zipcode\" class=\"form-control\" [ngClass]=\"{'form-control-danger' :  personalForm.get('zipcode').hasError('required'), 'form-control-success' :  !personalForm.get('zipcode').hasError('required') }\" type=\"text\"> \n                            <span class=\"help-block text-danger\" *ngIf=\"step.hasError && personalForm.get('zipcode').hasError('required')\">required</span>                             \n                        </div>\n\n                        <div class=\"form-group col-md-5\" [ngClass]=\"{'has-danger' : step.hasError && personalForm.get('country').hasError('required'), 'has-success' : !personalForm.get('country').hasError('required') }\">\n                            <label class=\"form-control-label\">Select Country</label>\n                            <select formControlName=\"country\" class=\"form-control\" [ngClass]=\"{'form-control-danger' : step.hasError && personalForm.get('country').hasError('required'), 'form-control-success' : !personalForm.get('country').hasError('required') }\">\n                                <option>USA</option>\n                                <option>Canada</option>\n                                <option>Mexico</option>\n                                <option>UK</option>\n                                <option>France</option>\n                                <option>Italy</option>\n                            </select>\n                            <span class=\"help-block text-danger\" *ngIf=\"step.hasError && personalForm.get('country').hasError('required')\">Country is required</span>                             \n                        </div>\n\n                        <div class=\"form-group col-md-5\">\n                            <label class=\"form-control-label\">Select State</label>\n                            <select formControlName=\"state\" class=\"form-control\">\n                                <option>Arkansas</option>\n                                <option>Texas</option>\n                                <option>California</option>\n                                <option>Florida</option>\n                                <option>Other</option>\n                            </select>\n                        </div>\n                        \n                        <div class=\"form-group col\">\n                            <label class=\"form-control-label\">Address</label>\n                            <textarea formControlName=\"address\" class=\"form-control\"></textarea>\n                        </div>                     \n                    </form>\n\n                    <form *ngIf=\"step.name=='Payment Information'\" [formGroup]=\"paymentForm\" class=\"row\">\n                        <div class=\"form-group col-md-7\" [ngClass]=\"{'has-danger' : step.hasError && paymentForm.get('cardtype').hasError('required'), 'has-success' : !paymentForm.get('cardtype').hasError('required') }\">\n                            <label class=\"form-control-label\">Card Type</label>\n                            <select formControlName=\"cardtype\" class=\"form-control\" [ngClass]=\"{'form-control-danger' : step.hasError && paymentForm.get('cardtype').hasError('required'), 'form-control-success' : !paymentForm.get('cardtype').hasError('required') }\">\n                                <option>Visa</option>\n                                <option>Master Card</option>\n                                <option>Other</option>\n                            </select>\n                            <span class=\"help-block text-danger\" *ngIf=\"step.hasError && paymentForm.get('cardtype').hasError('required')\">Card Type is required</span>                             \n                        </div>\n\n                        <div class=\"form-group col-md-7\" [ngClass]=\"{'has-danger' : (step.hasError && paymentForm.get('cardnumber').hasError('required')) || (step.hasError && paymentForm.get('cardnumber').hasError('invalidNumber')), \n                                                                     'has-success' : !paymentForm.get('cardnumber').hasError('required') && !paymentForm.get('cardnumber').hasError('invalidNumber')}\">\n                            <label class=\"form-control-label\">Card Number</label>\n                            <input formControlName=\"cardnumber\" class=\"form-control\" [ngClass]=\"{'form-control-danger' : (step.hasError && paymentForm.get('cardnumber').hasError('required')) || (step.hasError && paymentForm.get('cardnumber').hasError('invalidNumber')), \n                                                                                                 'form-control-success' : !paymentForm.get('cardnumber').hasError('required') && !paymentForm.get('cardnumber').hasError('invalidNumber') }\" type=\"text\" maxlength=\"16\"> \n                            <span class=\"help-block text-danger\" *ngIf=\"step.hasError && paymentForm.get('cardnumber').hasError('required')\">Card Number is required</span>                             \n                            <span class=\"help-block text-danger\" *ngIf=\"step.hasError && paymentForm.get('cardnumber').hasError('invalidNumber')\">Invalid Card Number</span>\n                        </div> \n\n                        <div class=\"form-group col-md-7\" [ngClass]=\"{'has-danger' : (step.hasError && paymentForm.get('cvc').hasError('required')) || (step.hasError && paymentForm.get('cvc').hasError('invalidNumber')), \n                                                                     'has-success' : !paymentForm.get('cvc').hasError('required') && !paymentForm.get('cvc').hasError('invalidNumber') }\">\n                            <label class=\"form-control-label\">CVC</label>\n                            <input formControlName=\"cvc\" class=\"form-control\" [ngClass]=\"{'form-control-danger' : (step.hasError && paymentForm.get('cvc').hasError('required')) || (step.hasError && paymentForm.get('cvc').hasError('invalidNumber')), \n                                                                                          'form-control-success' : !paymentForm.get('cvc').hasError('required') && !paymentForm.get('cvc').hasError('invalidNumber') }\" type=\"text\" maxlength=\"3\"> \n                            <span class=\"help-block text-danger\" *ngIf=\"step.hasError && paymentForm.get('cvc').hasError('required')\">CVC is required</span>                             \n                            <span class=\"help-block text-danger\" *ngIf=\"step.hasError && paymentForm.get('cvc').hasError('invalidNumber')\">Invalid CVC</span>\n                        </div> \n\n                        <div class=\"form-group col-md-7\" [ngClass]=\"{'has-danger' : step.hasError && paymentForm.get('expirymonth').hasError('required'), 'has-success' : !paymentForm.get('expirymonth').hasError('required') }\">\n                            <label class=\"form-control-label\">Expiry Month</label>\n                            <select formControlName=\"expirymonth\" class=\"form-control\" [ngClass]=\"{'form-control-danger' : step.hasError && paymentForm.get('expirymonth').hasError('required'), 'form-control-success' : !paymentForm.get('expirymonth').hasError('required') }\">\n                                <option>01</option>\n                                <option>02</option>\n                                <option>03</option>\n                                <option>04</option>\n                                <option>05</option>\n                                <option>06</option>\n                                <option>07</option>\n                                <option>08</option>\n                                <option>09</option>\n                                <option>10</option>\n                                <option>11</option>\n                                <option>12</option>\n                            </select>\n                            <span class=\"help-block text-danger\" *ngIf=\"step.hasError && paymentForm.get('expirymonth').hasError('required')\">Expiry Month is required</span>                             \n                        </div>\n\n                        <div class=\"form-group col-md-7\" [ngClass]=\"{'has-danger' : step.hasError && paymentForm.get('expiryyear').hasError('required'), 'has-success' : !paymentForm.get('expiryyear').hasError('required') }\">\n                            <label class=\"form-control-label\">Expiry Year</label>\n                            <select formControlName=\"expiryyear\" class=\"form-control\" [ngClass]=\"{'form-control-danger' : step.hasError && paymentForm.get('expiryyear').hasError('required'), 'form-control-success' : !paymentForm.get('expiryyear').hasError('required') }\">\n                                <option>2017</option>\n                                <option>2018</option>\n                                <option>2019</option>\n                                <option>2020</option>\n                                <option>2021</option>\n                                <option>2022</option>\n                                <option>2023</option>\n                                <option>2024</option>\n                            </select>\n                            <span class=\"help-block text-danger\" *ngIf=\"step.hasError && paymentForm.get('expiryyear').hasError('required')\">Expiry Year is required</span>                             \n                        </div>\n                    </form>\n                   \n                    <div *ngIf=\"step.name=='Confirm Your Details'\" class=\"row\">\n                        <div class=\"col-2\"><strong class=\"text-truncate\">Username</strong></div>\n                        <div class=\"col-10\"><i>{{details.username}}</i></div>\n                        <div class=\"col-2\"><strong class=\"text-truncate\">Full Name</strong></div>\n                        <div class=\"col-10\"><i>{{details.fullname}}</i></div>\n                        <div class=\"col-2\"><strong class=\"text-truncate\">Gender</strong></div>\n                        <div class=\"col-10\"><i>{{details.gender}} &nbsp;</i></div>\n                        <div class=\"col-2\"><strong class=\"text-truncate\">Contact Email</strong></div>\n                        <div class=\"col-10\"><i>{{details.email}}</i></div>\n                        <div class=\"col-2\"><strong class=\"text-truncate\">Phone NO.</strong></div>\n                        <div class=\"col-10\"><i>{{details.phone}}</i></div>\n                        <div class=\"col-2\"><strong class=\"text-truncate\">Address</strong></div>\n                        <div class=\"col-10\"><i>{{details.address}} &nbsp;</i></div>\n                        <div class=\"col-2\"><strong class=\"text-truncate\">Country</strong></div>\n                        <div class=\"col-10\"><i>{{details.country}}</i></div>\n                        <div class=\"col-2\"><strong class=\"text-truncate\">Zip Code</strong></div>\n                        <div class=\"col-10\"><i>{{details.zipcode}}</i></div>\n                        <div class=\"col-2\"><strong class=\"text-truncate\">Card Type</strong></div>\n                        <div class=\"col-10\"><i>{{details.cardtype}}</i></div>\n                        <div class=\"col-2\"><strong class=\"text-truncate\">Card Number</strong></div>\n                        <div class=\"col-10\"><i>{{details.cardnumber}}</i></div>\n                    </div>\n\n                </div> \n\n                <div class=\"row\"> \n                    <div class=\"col-12\">\n                        <button class=\"btn btn-primary pull-left\" (click)=\"prev()\"><i class=\"fa fa-chevron-left arrow\"></i>&nbsp; Prev Step</button>\n                        <button *ngIf=\"!steps[steps.length-1].active\" class=\"btn btn-primary pull-right\" (click)=\"next()\">Next Step &nbsp;<i class=\"fa fa-chevron-right arrow\"></i></button>\n                        <button *ngIf=\"steps[steps.length-1].active\" class=\"btn btn-primary pull-right\" (click)=\"confirm()\">Confirm &nbsp;<i class=\"fa fa-check arrow\"></i></button>\n                    </div> \n                </div>         \n\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/form-elements/wizard/wizard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#2E0502\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#640D05\",\"gray\":\"#555\",\"gray-light\":\"#ccc\"}';\n  display: none; }\n\n.step {\n  text-align: center; }\n  .step:before, .step:after {\n    content: '';\n    position: absolute;\n    background-color: #ccc;\n    top: 0;\n    margin-top: 23px;\n    width: 50%;\n    height: 5px;\n    border-top: 1px solid #555;\n    border-bottom: 1px solid #555; }\n  .step:before {\n    left: 0; }\n  .step:after {\n    right: 0; }\n  .step:first-child:before {\n    display: none; }\n  .step.last:after {\n    display: none; }\n  .step .step-icon {\n    position: relative;\n    z-index: 2;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background: #ccc;\n    border: 1px solid #555;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    margin: 0 auto; }\n    .step .step-icon i {\n      margin: 0 auto;\n      font-size: 20px;\n      color: #555; }\n  .step.active:before, .step.active:after {\n    background: #bf1725;\n    border: none; }\n  .step.active .step-icon {\n    background: #bf1725;\n    border: none; }\n    .step.active .step-icon i {\n      color: #fff; }\n  .step.valid:before, .step.valid:after {\n    background: #2d922d;\n    border: none; }\n  .step.valid .step-icon {\n    background: #2d922d;\n    border: none; }\n    .step.valid .step-icon i {\n      color: #fff; }\n  .step .step-name {\n    display: block;\n    margin-top: 14px;\n    color: #555; }\n    .step .step-name.active {\n      color: #bf1725; }\n    .step .step-name.valid {\n      color: #2d922d; }\n\n.form-wizard {\n  margin-top: 25px;\n  margin-bottom: 20px;\n  background: #e9ebee;\n  padding-top: 15px;\n  min-height: 400px; }\n  .form-wizard .form-title {\n    margin-bottom: 15px;\n    color: #555;\n    border-bottom: 1px solid #ccc;\n    padding: 0 15px; }\n  .form-wizard .form-control-label {\n    color: #242424 !important; }\n  .form-wizard .help-block {\n    position: absolute;\n    font-size: 11px; }\n\n.arrow {\n  font-size: 12px; }\n\n@media (max-width: 767px) {\n  .step {\n    margin-bottom: 10px;\n    text-align: left; }\n    .step .step-icon {\n      float: left;\n      margin-right: 15px; }\n    .step:before, .step:after {\n      content: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/form-elements/wizard/wizard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wizard_validation_service__ = __webpack_require__("../../../../../src/app/pages/form-elements/wizard/wizard-validation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WizardComponent = (function () {
    function WizardComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.details = {};
        this.steps = [
            { name: 'Account Information', icon: 'fa-lock', active: true, valid: false, hasError: false },
            { name: 'Personal Information', icon: 'fa-user', active: false, valid: false, hasError: false },
            { name: 'Payment Information', icon: 'fa-credit-card', active: false, valid: false, hasError: false },
            { name: 'Confirm Your Details', icon: 'fa-check-square-o', active: false, valid: false, hasError: false }
        ];
        this.accountForm = this.formBuilder.group({
            'username': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'password': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(6)])],
            'confirmPassword': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'email': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__wizard_validation_service__["a" /* WizardValidationService */].emailValidator])]
        }, { validator: __WEBPACK_IMPORTED_MODULE_2__wizard_validation_service__["a" /* WizardValidationService */].matchingPasswords('password', 'confirmPassword') });
        this.personalForm = this.formBuilder.group({
            'salutation': [''],
            'firstname': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'lastname': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'gender': [''],
            'email': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__wizard_validation_service__["a" /* WizardValidationService */].emailValidator])],
            'phone': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'zipcode': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'country': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'state': [''],
            'address': ['']
        });
        this.paymentForm = this.formBuilder.group({
            'cardtype': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'cardnumber': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__wizard_validation_service__["a" /* WizardValidationService */].numberValidator])],
            'cvc': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__wizard_validation_service__["a" /* WizardValidationService */].numberValidator])],
            'expirymonth': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'expiryyear': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
    }
    WizardComponent.prototype.next = function () {
        var accountForm = this.accountForm;
        var personalForm = this.personalForm;
        var paymentForm = this.paymentForm;
        if (this.steps[this.steps.length - 1].active)
            return false;
        this.steps.some(function (step, index, steps) {
            if (index < steps.length - 1) {
                if (step.active) {
                    if (step.name == 'Account Information') {
                        if (accountForm.valid) {
                            step.active = false;
                            step.valid = true;
                            steps[index + 1].active = true;
                            return true;
                        }
                        else {
                            step.hasError = true;
                        }
                    }
                    if (step.name == 'Personal Information') {
                        if (personalForm.valid) {
                            step.active = false;
                            step.valid = true;
                            steps[index + 1].active = true;
                            return true;
                        }
                        else {
                            step.hasError = true;
                        }
                    }
                    if (step.name == 'Payment Information') {
                        if (paymentForm.valid) {
                            step.active = false;
                            step.valid = true;
                            steps[index + 1].active = true;
                            return true;
                        }
                        else {
                            step.hasError = true;
                        }
                    }
                }
            }
        });
        this.details.username = this.accountForm.value.username;
        this.details.fullname = this.personalForm.value.firstname + " " + this.personalForm.value.lastname;
        this.details.gender = this.personalForm.value.gender;
        this.details.email = this.personalForm.value.email;
        this.details.phone = this.personalForm.value.phone;
        this.details.country = this.personalForm.value.country;
        this.details.zipcode = this.personalForm.value.zipcode;
        this.details.address = this.personalForm.value.address;
        this.details.cardtype = this.paymentForm.value.cardtype;
        this.details.cardnumber = this.paymentForm.value.cardnumber;
    };
    WizardComponent.prototype.prev = function () {
        if (this.steps[0].active)
            return false;
        this.steps.some(function (step, index, steps) {
            if (index != 0) {
                if (step.active) {
                    step.active = false;
                    steps[index - 1].active = true;
                    return true;
                }
            }
        });
    };
    WizardComponent.prototype.confirm = function () {
        this.steps.forEach(function (step) { return step.valid = true; });
    };
    return WizardComponent;
}());
WizardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'az-wizard',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__("../../../../../src/app/pages/form-elements/wizard/wizard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/form-elements/wizard/wizard.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__wizard_validation_service__["a" /* WizardValidationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object])
], WizardComponent);

var _a;
//# sourceMappingURL=wizard.component.js.map

/***/ })

});
//# sourceMappingURL=form-elements.module.chunk.js.map