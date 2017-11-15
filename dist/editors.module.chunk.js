webpackJsonp(["editors.module"],{

/***/ "../../../../../src/app/pages/editors/ckeditor/ckeditor.component.html":
/***/ (function(module, exports) {

module.exports = " <ckeditor\n    [(ngModel)]=\"ckeditorContent\"\n    [config]=\"config\"\n    (change)=\"onChange($event)\"\n    (ready)=\"onReady($event)\"\n    (focus)=\"onFocus($event)\"\n    (blur)=\"onBlur($event)\"\n    debounce=\"500\">\n  </ckeditor>"

/***/ }),

/***/ "../../../../../src/app/pages/editors/ckeditor/ckeditor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CkeditorComponent; });
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

var CkeditorComponent = (function () {
    function CkeditorComponent() {
        this.ckeditorContent = '<div>Hey we are testing CKEditor</div>';
        this.config = {
            uiColor: '#F0F3F4',
            height: '350',
            extraPlugins: 'divarea'
        };
    }
    CkeditorComponent.prototype.onChange = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.ckeditorContent = event;
        });
    };
    CkeditorComponent.prototype.onReady = function (event) { };
    CkeditorComponent.prototype.onFocus = function (event) {
        console.log("editor is focused");
    };
    CkeditorComponent.prototype.onBlur = function (event) {
    };
    return CkeditorComponent;
}());
CkeditorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'az-ckeditor',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__("../../../../../src/app/pages/editors/ckeditor/ckeditor.component.html")
    }),
    __metadata("design:paramtypes", [])
], CkeditorComponent);

//# sourceMappingURL=ckeditor.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/editors/editors.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorsModule", function() { return EditorsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_ckeditor__ = __webpack_require__("../../../../ng2-ckeditor/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_froala_wysiwyg__ = __webpack_require__("../../../../angular2-froala-wysiwyg/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ckeditor_ckeditor_component__ = __webpack_require__("../../../../../src/app/pages/editors/ckeditor/ckeditor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__froala_froala_component__ = __webpack_require__("../../../../../src/app/pages/editors/froala/froala.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: 'ckeditor', pathMatch: 'full' },
    { path: 'ckeditor', component: __WEBPACK_IMPORTED_MODULE_6__ckeditor_ckeditor_component__["a" /* CkeditorComponent */], data: { breadcrumb: 'Ckeditor' } },
    { path: 'froala-editor', component: __WEBPACK_IMPORTED_MODULE_7__froala_froala_component__["a" /* FroalaComponent */], data: { breadcrumb: 'Froala Editor' } }
];
var EditorsModule = (function () {
    function EditorsModule() {
    }
    return EditorsModule;
}());
EditorsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5_angular2_froala_wysiwyg__["a" /* FroalaEditorModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_5_angular2_froala_wysiwyg__["b" /* FroalaViewModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4_ng2_ckeditor__["CKEditorModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */].forChild(routes)
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__ckeditor_ckeditor_component__["a" /* CkeditorComponent */],
            __WEBPACK_IMPORTED_MODULE_7__froala_froala_component__["a" /* FroalaComponent */]
        ]
    })
], EditorsModule);

//# sourceMappingURL=editors.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/editors/froala/froala.component.html":
/***/ (function(module, exports) {

module.exports = "<div [froalaEditor]>Hey we are testing Froala Editor</div>"

/***/ }),

/***/ "../../../../../src/app/pages/editors/froala/froala.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FroalaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FroalaComponent = (function () {
    function FroalaComponent() {
    }
    return FroalaComponent;
}());
FroalaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'az-froala',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__("../../../../../src/app/pages/editors/froala/froala.component.html")
    })
], FroalaComponent);

//# sourceMappingURL=froala.component.js.map

/***/ }),

/***/ "../../../../angular2-froala-wysiwyg/editor/editor.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FroalaEditorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");


var FroalaEditorDirective = (function () {
    function FroalaEditorDirective(el) {
        // editor options
        this._opts = {
            immediateAngularModelUpdate: false,
            angularIgnoreAttrs: null
        };
        this.SPECIAL_TAGS = ['img', 'button', 'input', 'a'];
        this.INNER_HTML_ATTR = 'innerHTML';
        this._hasSpecialTag = false;
        this._listeningEvents = [];
        this._editorInitialized = false;
        this._oldModel = null;
        // Begin ControlValueAccesor methods.
        this.onChange = function (_) { };
        this.onTouched = function () { };
        // froalaModel directive as output: update model if editor contentChanged
        this.froalaModelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // froalaInit directive as output: send manual editor initialization
        this.froalaInit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        var element = el.nativeElement;
        // check if the element is a special tag
        if (this.SPECIAL_TAGS.indexOf(element.tagName.toLowerCase()) != -1) {
            this._hasSpecialTag = true;
        }
        // jquery wrap and store element
        this._$element = $(element);
    }
    // Form model content changed.
    FroalaEditorDirective.prototype.writeValue = function (content) {
        this.updateEditor(content);
    };
    FroalaEditorDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    FroalaEditorDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    Object.defineProperty(FroalaEditorDirective.prototype, "froalaEditor", {
        // End ControlValueAccesor methods.
        // froalaEditor directive as input: store the editor options
        set: function (opts) {
            this._opts = opts || this._opts;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FroalaEditorDirective.prototype, "froalaModel", {
        // froalaModel directive as input: store initial editor content
        set: function (content) {
            this.updateEditor(content);
        },
        enumerable: true,
        configurable: true
    });
    // Update editor with model contents.
    FroalaEditorDirective.prototype.updateEditor = function (content) {
        if (JSON.stringify(this._oldModel) == JSON.stringify(content)) {
            return;
        }
        this._model = content;
        if (this._editorInitialized) {
            this.setContent();
        }
    };
    // update model if editor contentChanged
    FroalaEditorDirective.prototype.updateModel = function () {
        var modelContent = null;
        if (this._hasSpecialTag) {
            var attributeNodes = this._$element[0].attributes;
            var attrs = {};
            for (var i = 0; i < attributeNodes.length; i++) {
                var attrName = attributeNodes[i].name;
                if (this._opts.angularIgnoreAttrs && this._opts.angularIgnoreAttrs.indexOf(attrName) != -1) {
                    continue;
                }
                attrs[attrName] = attributeNodes[i].value;
            }
            if (this._$element[0].innerHTML) {
                attrs[this.INNER_HTML_ATTR] = this._$element[0].innerHTML;
            }
            modelContent = attrs;
        }
        else {
            var returnedHtml = this._$element.froalaEditor('html.get');
            if (typeof returnedHtml === 'string') {
                modelContent = returnedHtml;
            }
        }
        this._oldModel = modelContent;
        // Update froalaModel.
        this.froalaModelChange.emit(modelContent);
        // Update form model.
        this.onChange(modelContent);
    };
    // register event on jquery element
    FroalaEditorDirective.prototype.registerEvent = function (element, eventName, callback) {
        if (!element || !eventName || !callback) {
            return;
        }
        this._listeningEvents.push(eventName);
        element.on(eventName, callback);
    };
    FroalaEditorDirective.prototype.initListeners = function () {
        var self = this;
        // bind contentChange and keyup event to froalaModel
        this.registerEvent(this._$element, 'froalaEditor.contentChanged', function () {
            self.updateModel();
        });
        if (this._opts.immediateAngularModelUpdate) {
            this.registerEvent(this._editor, 'keyup', function () {
                self.updateModel();
            });
        }
    };
    // register events from editor options
    FroalaEditorDirective.prototype.registerFroalaEvents = function () {
        if (!this._opts.events) {
            return;
        }
        for (var eventName in this._opts.events) {
            if (this._opts.events.hasOwnProperty(eventName)) {
                this.registerEvent(this._$element, eventName, this._opts.events[eventName]);
            }
        }
    };
    FroalaEditorDirective.prototype.createEditor = function () {
        if (this._editorInitialized) {
            return;
        }
        this.setContent(true);
        // Registering events before initializing the editor will bind the initialized event correctly.
        this.registerFroalaEvents();
        // init editor
        this._editor = this._$element.froalaEditor(this._opts).data('froala.editor').$el;
        this.initListeners();
        this._editorInitialized = true;
    };
    FroalaEditorDirective.prototype.setHtml = function () {
        this._$element.froalaEditor('html.set', this._model || '', true);
        //This will reset the undo stack everytime the model changes externally. Can we fix this?
        this._$element.froalaEditor('undo.reset');
        this._$element.froalaEditor('undo.saveStep');
    };
    FroalaEditorDirective.prototype.setContent = function (firstTime) {
        if (firstTime === void 0) { firstTime = false; }
        var self = this;
        // set initial content
        if (this._model || this._model == '') {
            this._oldModel = this._model;
            if (this._hasSpecialTag) {
                var tags = this._model;
                // add tags on element
                if (tags) {
                    for (var attr in tags) {
                        if (tags.hasOwnProperty(attr) && attr != this.INNER_HTML_ATTR) {
                            this._$element.attr(attr, tags[attr]);
                        }
                    }
                    if (tags.hasOwnProperty(this.INNER_HTML_ATTR)) {
                        this._$element[0].innerHTML = tags[this.INNER_HTML_ATTR];
                    }
                }
            }
            else {
                if (firstTime) {
                    this.registerEvent(this._$element, 'froalaEditor.initialized', function () {
                        self.setHtml();
                    });
                }
                else {
                    self.setHtml();
                }
            }
        }
    };
    FroalaEditorDirective.prototype.destroyEditor = function () {
        if (this._editorInitialized) {
            this._$element.off(this._listeningEvents.join(" "));
            this._editor.off('keyup');
            this._$element.froalaEditor('destroy');
            this._listeningEvents.length = 0;
            this._editorInitialized = false;
        }
    };
    FroalaEditorDirective.prototype.getEditor = function () {
        if (this._$element) {
            return this._$element.froalaEditor.bind(this._$element);
        }
        return null;
    };
    // send manual editor initialization
    FroalaEditorDirective.prototype.generateManualController = function () {
        var self = this;
        var controls = {
            initialize: this.createEditor.bind(this),
            destroy: this.destroyEditor.bind(this),
            getEditor: this.getEditor.bind(this),
        };
        this.froalaInit.emit(controls);
    };
    // TODO not sure if ngOnInit is executed after @inputs
    FroalaEditorDirective.prototype.ngOnInit = function () {
        // check if output froalaInit is present. Maybe observers is private and should not be used?? TODO how to better test that an output directive is present.
        if (!this.froalaInit.observers.length) {
            this.createEditor();
        }
        else {
            this.generateManualController();
        }
    };
    FroalaEditorDirective.prototype.ngOnDestroy = function () {
        this.destroyEditor();
    };
    FroalaEditorDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[froalaEditor]',
                    providers: [{
                            provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"], useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return FroalaEditorDirective; }),
                            multi: true
                        }]
                },] },
    ];
    /** @nocollapse */
    FroalaEditorDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    ]; };
    FroalaEditorDirective.propDecorators = {
        'froalaEditor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'froalaModel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'froalaModelChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'froalaInit': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return FroalaEditorDirective;
}());
//# sourceMappingURL=editor.directive.js.map

/***/ }),

/***/ "../../../../angular2-froala-wysiwyg/editor/editor.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FroalaEditorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_directive__ = __webpack_require__("../../../../angular2-froala-wysiwyg/editor/editor.directive.js");


var FroalaEditorModule = (function () {
    function FroalaEditorModule() {
    }
    FroalaEditorModule.forRoot = function () {
        return { ngModule: FroalaEditorModule, providers: [] };
    };
    FroalaEditorModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [__WEBPACK_IMPORTED_MODULE_1__editor_directive__["a" /* FroalaEditorDirective */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_1__editor_directive__["a" /* FroalaEditorDirective */]]
                },] },
    ];
    /** @nocollapse */
    FroalaEditorModule.ctorParameters = function () { return []; };
    return FroalaEditorModule;
}());
//# sourceMappingURL=editor.module.js.map

/***/ }),

/***/ "../../../../angular2-froala-wysiwyg/editor/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_directive__ = __webpack_require__("../../../../angular2-froala-wysiwyg/editor/editor.directive.js");
/* unused harmony reexport FroalaEditorDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_module__ = __webpack_require__("../../../../angular2-froala-wysiwyg/editor/editor.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__editor_module__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../angular2-froala-wysiwyg/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FERootModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor__ = __webpack_require__("../../../../angular2-froala-wysiwyg/editor/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view__ = __webpack_require__("../../../../angular2-froala-wysiwyg/view/index.js");
/* unused harmony reexport FroalaEditorDirective */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__editor__["a"]; });
/* unused harmony reexport FroalaViewDirective */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__view__["a"]; });





var MODULES = [
    __WEBPACK_IMPORTED_MODULE_1__editor__["a" /* FroalaEditorModule */],
    __WEBPACK_IMPORTED_MODULE_2__view__["a" /* FroalaViewModule */]
];
var FERootModule = (function () {
    function FERootModule() {
    }
    FERootModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    imports: [
                        __WEBPACK_IMPORTED_MODULE_1__editor__["a" /* FroalaEditorModule */].forRoot(),
                        __WEBPACK_IMPORTED_MODULE_2__view__["a" /* FroalaViewModule */].forRoot()
                    ],
                    exports: MODULES
                },] },
    ];
    /** @nocollapse */
    FERootModule.ctorParameters = function () { return []; };
    return FERootModule;
}());
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../angular2-froala-wysiwyg/view/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view_directive__ = __webpack_require__("../../../../angular2-froala-wysiwyg/view/view.directive.js");
/* unused harmony reexport FroalaViewDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_module__ = __webpack_require__("../../../../angular2-froala-wysiwyg/view/view.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__view_module__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../angular2-froala-wysiwyg/view/view.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FroalaViewDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var FroalaViewDirective = (function () {
    function FroalaViewDirective(renderer, element) {
        this.renderer = renderer;
        this._element = element.nativeElement;
    }
    Object.defineProperty(FroalaViewDirective.prototype, "froalaView", {
        // update content model as it comes
        set: function (content) {
            this._element.innerHTML = content;
        },
        enumerable: true,
        configurable: true
    });
    FroalaViewDirective.prototype.ngAfterViewInit = function () {
        this.renderer.setElementClass(this._element, "fr-view", true);
    };
    FroalaViewDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[froalaView]'
                },] },
    ];
    /** @nocollapse */
    FroalaViewDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    ]; };
    FroalaViewDirective.propDecorators = {
        'froalaView': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return FroalaViewDirective;
}());
//# sourceMappingURL=view.directive.js.map

/***/ }),

/***/ "../../../../angular2-froala-wysiwyg/view/view.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FroalaViewModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_directive__ = __webpack_require__("../../../../angular2-froala-wysiwyg/view/view.directive.js");


var FroalaViewModule = (function () {
    function FroalaViewModule() {
    }
    FroalaViewModule.forRoot = function () {
        return { ngModule: FroalaViewModule, providers: [] };
    };
    FroalaViewModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [__WEBPACK_IMPORTED_MODULE_1__view_directive__["a" /* FroalaViewDirective */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_1__view_directive__["a" /* FroalaViewDirective */]]
                },] },
    ];
    /** @nocollapse */
    FroalaViewModule.ctorParameters = function () { return []; };
    return FroalaViewModule;
}());
//# sourceMappingURL=view.module.js.map

/***/ }),

/***/ "../../../../ng2-ckeditor/lib/ckbutton.directive.js":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
/**
 * CKGroup component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
 *      <ckbutton [name]="'SaveButton'" [command]="'saveCommand'" (click)="save($event)"
 *                [icon]="'/save.png'" [toolbar]="'customGroup,1'" [label]="'Save'">
 *      </ckbutton>
 *   </ckeditor>
 */
var CKButtonDirective = (function () {
    function CKButtonDirective() {
        this.click = new core_1.EventEmitter();
    }
    CKButtonDirective.prototype.initialize = function (editor) {
        var _this = this;
        editor.instance.addCommand(this.command, {
            exec: function (evt) {
                _this.click.emit(evt);
            }
        });
        editor.instance.ui.addButton(this.name, {
            label: this.label,
            command: this.command,
            toolbar: this.toolbar,
            icon: this.icon
        });
    };
    CKButtonDirective.prototype.ngOnInit = function () {
        if (!this.name)
            throw new Error("Attribute 'name' is required on <ckbutton>");
        if (!this.command)
            throw new Error("Attribute 'command' is required on <ckbutton>");
    };
    return CKButtonDirective;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CKButtonDirective.prototype, "click", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CKButtonDirective.prototype, "label", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CKButtonDirective.prototype, "command", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CKButtonDirective.prototype, "toolbar", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CKButtonDirective.prototype, "name", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CKButtonDirective.prototype, "icon", void 0);
CKButtonDirective = __decorate([
    core_1.Directive({
        selector: 'ckbutton'
    })
], CKButtonDirective);
exports.CKButtonDirective = CKButtonDirective;
//# sourceMappingURL=ckbutton.directive.js.map

/***/ }),

/***/ "../../../../ng2-ckeditor/lib/ckeditor.component.js":
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
// Imports
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var ckbutton_directive_1 = __webpack_require__("../../../../ng2-ckeditor/lib/ckbutton.directive.js");
var ckgroup_directive_1 = __webpack_require__("../../../../ng2-ckeditor/lib/ckgroup.directive.js");
/**
 * CKEditor component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500"></ckeditor>
 */
var CKEditorComponent = CKEditorComponent_1 = (function () {
    /**
     * Constructor
     */
    function CKEditorComponent(zone) {
        this.change = new core_1.EventEmitter();
        this.ready = new core_1.EventEmitter();
        this.blur = new core_1.EventEmitter();
        this.focus = new core_1.EventEmitter();
        this._value = '';
        this.zone = zone;
    }
    Object.defineProperty(CKEditorComponent.prototype, "value", {
        get: function () { return this._value; },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this.onChange(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * On component destroy
     */
    CKEditorComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        if (this.instance) {
            setTimeout(function () {
                _this.instance.removeAllListeners();
                _this.instance.destroy();
                _this.instance = null;
            });
        }
    };
    /**
     * On component view init
     */
    CKEditorComponent.prototype.ngAfterViewInit = function () {
        // Configuration
        this.ckeditorInit(this.config || {});
    };
    /**
     * Value update process
     */
    CKEditorComponent.prototype.updateValue = function (value) {
        var _this = this;
        this.zone.run(function () {
            _this.value = value;
            _this.onChange(value);
            _this.onTouched();
            _this.change.emit(value);
        });
    };
    /**
     * CKEditor init
     */
    CKEditorComponent.prototype.ckeditorInit = function (config) {
        var _this = this;
        if (typeof CKEDITOR == 'undefined') {
            console.warn('CKEditor 4.x is missing (http://ckeditor.com/)');
        }
        else {
            // CKEditor replace textarea
            this.instance = CKEDITOR.replace(this.host.nativeElement, config);
            // Set initial value
            this.instance.setData(this.value);
            // listen for instanceReady event
            this.instance.on('instanceReady', function (evt) {
                // send the evt to the EventEmitter
                _this.ready.emit(evt);
            });
            // CKEditor change event
            this.instance.on('change', function () {
                _this.onTouched();
                var value = _this.instance.getData();
                // Debounce update
                if (_this.debounce) {
                    if (_this.debounceTimeout)
                        clearTimeout(_this.debounceTimeout);
                    _this.debounceTimeout = setTimeout(function () {
                        _this.updateValue(value);
                        _this.debounceTimeout = null;
                    }, parseInt(_this.debounce));
                }
                else {
                    _this.updateValue(value);
                }
            });
            // CKEditor blur event
            this.instance.on('blur', function (evt) {
                _this.blur.emit(evt);
            });
            // CKEditor focus event
            this.instance.on('focus', function (evt) {
                _this.focus.emit(evt);
            });
            // Add Toolbar Groups to Editor. This will also add Buttons within groups.
            this.toolbarGroups.forEach(function (group) {
                group.initialize(_this);
            });
            // Add Toolbar Buttons to Editor.
            this.toolbarButtons.forEach(function (button) {
                button.initialize(_this);
            });
        }
    };
    /**
     * Implements ControlValueAccessor
     */
    CKEditorComponent.prototype.writeValue = function (value) {
        this._value = value;
        if (this.instance)
            this.instance.setData(value);
    };
    CKEditorComponent.prototype.onChange = function (_) { };
    CKEditorComponent.prototype.onTouched = function () { };
    CKEditorComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    CKEditorComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    return CKEditorComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CKEditorComponent.prototype, "config", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CKEditorComponent.prototype, "debounce", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CKEditorComponent.prototype, "change", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CKEditorComponent.prototype, "ready", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CKEditorComponent.prototype, "blur", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CKEditorComponent.prototype, "focus", void 0);
__decorate([
    core_1.ViewChild('host'),
    __metadata("design:type", Object)
], CKEditorComponent.prototype, "host", void 0);
__decorate([
    core_1.ContentChildren(ckbutton_directive_1.CKButtonDirective),
    __metadata("design:type", core_1.QueryList)
], CKEditorComponent.prototype, "toolbarButtons", void 0);
__decorate([
    core_1.ContentChildren(ckgroup_directive_1.CKGroupDirective),
    __metadata("design:type", core_1.QueryList)
], CKEditorComponent.prototype, "toolbarGroups", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], CKEditorComponent.prototype, "value", null);
CKEditorComponent = CKEditorComponent_1 = __decorate([
    core_1.Component({
        selector: 'ckeditor',
        providers: [
            {
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(function () { return CKEditorComponent_1; }),
                multi: true
            }
        ],
        template: "<textarea #host></textarea>",
    }),
    __metadata("design:paramtypes", [core_1.NgZone])
], CKEditorComponent);
exports.CKEditorComponent = CKEditorComponent;
var CKEditorComponent_1;
//# sourceMappingURL=ckeditor.component.js.map

/***/ }),

/***/ "../../../../ng2-ckeditor/lib/ckeditor.module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var ckeditor_component_1 = __webpack_require__("../../../../ng2-ckeditor/lib/ckeditor.component.js");
var ckbutton_directive_1 = __webpack_require__("../../../../ng2-ckeditor/lib/ckbutton.directive.js");
var ckgroup_directive_1 = __webpack_require__("../../../../ng2-ckeditor/lib/ckgroup.directive.js");
/**
 * CKEditorModule
 */
var CKEditorModule = (function () {
    function CKEditorModule() {
    }
    return CKEditorModule;
}());
CKEditorModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [
            ckeditor_component_1.CKEditorComponent,
            ckbutton_directive_1.CKButtonDirective,
            ckgroup_directive_1.CKGroupDirective
        ],
        exports: [
            ckeditor_component_1.CKEditorComponent,
            ckbutton_directive_1.CKButtonDirective,
            ckgroup_directive_1.CKGroupDirective
        ]
    })
], CKEditorModule);
exports.CKEditorModule = CKEditorModule;
//# sourceMappingURL=ckeditor.module.js.map

/***/ }),

/***/ "../../../../ng2-ckeditor/lib/ckgroup.directive.js":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var ckbutton_directive_1 = __webpack_require__("../../../../ng2-ckeditor/lib/ckbutton.directive.js");
/**
 * CKGroup component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
 *      <ckgroup [name]="'exampleGroup2'" [previous]="'1'" [subgroupOf]="'exampleGroup1'">
 *          .
 *          .
 *      </ckgroup>
 *   </ckeditor>
 */
var CKGroupDirective = (function () {
    function CKGroupDirective() {
    }
    CKGroupDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        // Reconfigure each button's toolbar property within ckgroup to hold its parent's name
        this.toolbarButtons.forEach(function (button) { return button.toolbar = _this.name; });
    };
    CKGroupDirective.prototype.initialize = function (editor) {
        editor.instance.ui.addToolbarGroup(this.name, this.previous, this.subgroupOf);
        // Initialize each button within ckgroup
        this.toolbarButtons.forEach(function (button) {
            button.initialize(editor);
        });
    };
    return CKGroupDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CKGroupDirective.prototype, "name", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CKGroupDirective.prototype, "previous", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CKGroupDirective.prototype, "subgroupOf", void 0);
__decorate([
    core_1.ContentChildren(ckbutton_directive_1.CKButtonDirective),
    __metadata("design:type", core_1.QueryList)
], CKGroupDirective.prototype, "toolbarButtons", void 0);
CKGroupDirective = __decorate([
    core_1.Directive({
        selector: 'ckgroup'
    })
], CKGroupDirective);
exports.CKGroupDirective = CKGroupDirective;
//# sourceMappingURL=ckgroup.directive.js.map

/***/ }),

/***/ "../../../../ng2-ckeditor/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ckeditor_module_1 = __webpack_require__("../../../../ng2-ckeditor/lib/ckeditor.module.js");
exports.CKEditorModule = ckeditor_module_1.CKEditorModule;
var ckeditor_component_1 = __webpack_require__("../../../../ng2-ckeditor/lib/ckeditor.component.js");
exports.CKEditorComponent = ckeditor_component_1.CKEditorComponent;
var ckbutton_directive_1 = __webpack_require__("../../../../ng2-ckeditor/lib/ckbutton.directive.js");
exports.CKButtonDirective = ckbutton_directive_1.CKButtonDirective;
var ckgroup_directive_1 = __webpack_require__("../../../../ng2-ckeditor/lib/ckgroup.directive.js");
exports.CKGroupDirective = ckgroup_directive_1.CKGroupDirective;
//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=editors.module.chunk.js.map