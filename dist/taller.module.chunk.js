webpackJsonp(["taller.module"],{

/***/ "../../../../../src/app/componentes/auto-form/auto-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"nuevo-auto\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-label\" style=\"display: none;\">\n        <div class=\"modal-dialog modal-lg\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header generic \">\n                    <h4 class=\"modal-title\" id=\"modal-label\"><i class=\"fa fa-car\"></i> Nuevo auto</h4>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n                </div>\n                <div class=\"modal-body\">\n                        <div class=\"clearfix\">\n                                <ul class=\"nav nav-tabs top pull-left w-100p\">\n                                    <li class=\"nav-item\">\n                                        <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#ta\">Datos</a>\n                                    </li>\n                                  \n                                                       \n                                </ul>\n                            </div>\n                            <div class=\"tab-content top\">\n                                    <div class=\"tab-pane active\" id=\"ta\">\n                                            <form [formGroup]=\"autoForm\">\n                                                    <div class=\"row\">\n                                                        <div class=\"col-md-6\" >\n                                                                <div [ngClass]=\"{'has-success':autoForm.get('placa').value != '' }\">\n                                                                        <div class=\"form-group\">\n                                                                                <label for=\"\">Placa:</label>\n                                                                                <input [ngClass]=\"{'form-control-success':autoForm.get('placa').value != '' }\" formControlName=\"placa\" type=\"text\" class=\"form-control\">\n                                                                        </div>\n\n                                                                </div>\n                                                                <div [ngClass]=\"{'has-success':autoForm.get('ano').value != '' }\">\n                                                                        <div class=\"form-group\">\n                                                                                <label for=\"\">Ano:</label>\n                                                                                <input [ngClass]=\"{'form-control-success':autoForm.get('ano').value != '' }\" formControlName=\"ano\" type=\"number\" class=\"form-control\">\n                                    \n                                                                        </div>\n\n                                                                </div>\n                                                                <div [ngClass]=\"{'has-success':autoForm.get('marca').value != '' }\" >\n                                                                        <div [ngClass]=\"{'has-success':autoForm.get('marca').value != '' }\">\n                                                                                <div class=\"form-group\">\n                                                                                        <label for=\"\">Marca:</label>\n                                                                                        <input [ngClass]=\"{'form-control-success':autoForm.get('marca').value != '' }\" formControlName=\"marca\" type=\"text\" class=\"form-control\">\n                                            \n                                                                                </div>\n\n                                                                        </div>\n\n                                                                </div>\n                                                               \n                                                               \n                                                               \n                                                                \n                                                            \n                                                        \n                                                           \n                                                            </div>\n                                                       \n                                                        <div class=\"col-md-6\" >  \n                                                            \n                                                                <div [ngClass]=\"{'has-success':autoForm.get('modelo').value != '' }\">\n                                                                        <div class=\"form-group\">\n                                                                                <label for=\"\">Modelo:</label>\n                                                                                <input [ngClass]=\"{'form-control-success':autoForm.get('modelo').value != '' }\" formControlName=\"modelo\" type=\"text\" class=\"form-control\">\n                                    \n                                                                        </div>\n\n                                                                </div>\n                                                                       \n                                                                  \n                                                            \n                                                                    <div [ngClass]=\"{'has-success':autoForm.get('kilometros').value != '' }\">\n                                                                            <div class=\"form-group\">\n                                                                                    <label for=\"\">Kilometraje:</label>\n                                                                                    <input [ngClass]=\"{'form-control-success':autoForm.get('kilometros').value != ''}\" formControlName=\"kilometros\" type=\"text\" class=\"form-control\">\n                                                                            </div>\n    \n                                                                    </div>\n\n                                                                   \n                                                                <div [ngClass]=\"{'has-success':autoForm.get('kilometros').value != '' }\">\n                                                                                <div class=\"form-group\">\n                                                                                    <label for=\"exampleSelect1\">Seleccione Cliente</label>\n                                                                                    <div class=\"input-group\">\n                                                                                        <div class=\"input-group-addon\"><i class=\"fa fa-user-plus\"></i></div>\n                                                                                             <ng-select\n                                                                                                formControlName=\"cliente_id\"\n                                                                                                [(options)]=\"clientes\"\n                                                                                                [placeholder]=\"cliente\"\n                                                                                                [multiple]=\"false\"\n                                                                                            >\n                                                                                            </ng-select>\n                                                                                    </div>\n                                                                                  \n                                                                                        \n                \n                                                                                </div>\n                                                                </div>\n                                                                    \n                                                             \n                                                              \n                                                            </div>\n                                                    </div>\n                                                   \n                                                     \n                                                  </form>\n                                     \n                                    </div>\n                           \n\n                                </div>  \n         \n              \n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" [disabled]=\"!autoForm.valid\" (click)=\"saveAuto()\" class=\"btn btn-primary\" data-dismiss=\"modal\">Guardar</button>\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/componentes/auto-form/auto-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_select_service__ = __webpack_require__("../../../../../src/app/services/select.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_endpoint_service__ = __webpack_require__("../../../../../src/app/services/endpoint.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AutoFormComponent = (function () {
    function AutoFormComponent(fb, ep, select) {
        this.fb = fb;
        this.ep = ep;
        this.select = select;
        this.clientes = [];
        this.saved = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["EventEmitter"]();
        this.autoForm = this.fb.group({
            placa: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            ano: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            modelo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            marca: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            cliente_id: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            kilometros: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])]
        });
    }
    AutoFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.select.loadClientes().then(function (res) {
            _this.clientes = res;
        });
    };
    AutoFormComponent.prototype.saveAuto = function () {
        var _this = this;
        this.ep.saveAuto(this.autoForm.value).then(function (result) {
            _this.saved.emit(true);
        }, function (err) {
            _this.saved.emit(false);
        });
    };
    return AutoFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_core__["EventEmitter"]) === "function" && _a || Object)
], AutoFormComponent.prototype, "saved", void 0);
AutoFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'auto-form',
        template: __webpack_require__("../../../../../src/app/componentes/auto-form/auto-form.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_endpoint_service__["a" /* EndPointService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_endpoint_service__["a" /* EndPointService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__services_select_service__["a" /* SelectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_select_service__["a" /* SelectService */]) === "function" && _d || Object])
], AutoFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=auto-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/detalle-form/detalle-form.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"nuevo-detalle\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-label\" style=\"display: none;\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header generic \">\n        <h4 class=\"modal-title\" id=\"modal-label\"><i class=\"fa fa-car\"></i> Nuevo  Detalle de Auto</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"clearfix\">\n          <ul class=\"nav nav-tabs top pull-left w-100p\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#ta\">Datos</a>\n            </li>\n\n\n          </ul>\n        </div>\n        <div class=\"tab-content top\">\n          <div class=\"tab-pane active\" id=\"ta\">\n            <form [formGroup]=\"detalleForm\">\n              <div class=\"row\">\n                <div class=\"col-md-4\" >\n                  <div [ngClass]=\"{'has-success':detalleForm.get('parte').value != '' }\">\n                    <div class=\"form-group\">\n                      <label>Parte del Carro:</label>\n                      <input [ngClass]=\"{'form-control-success':detalleForm.get('parte').value != '' }\" formControlName=\"parte\" type=\"text\" class=\"form-control\">\n                    </div>\n                  \n                </div>\n           \n                </div>\n                <div class=\"col-md-4\">\n                    <div [ngClass]=\"{'has-success':detalleForm.get('observacion').value != '' }\">\n                        <div class=\"form-group\">\n                            <label>Observacion:</label>\n                            <select formControlName=\"detalle\" class=\"form-control\" >\n                              <option value=\"rayon\">Rayon</option>\n                              <option value=\"golpe\">Golpe</option>\n                              <option value=\"cambio\">Cambio</option>\n                            </select>\n                          </div>\n                    </div>\n                  </div>\n                <div class=\"col-md-4\">\n                    <div [ngClass]=\"{'has-success':detalleForm.get('observacion').value != '' }\">\n                        <div class=\"form-group\">\n                            <label>Observacion:</label>\n                            <input [ngClass]=\"{'form-control-success':detalleForm.get('observacion').value != '' }\" formControlName='observacion' type=\"text\" class=\"form-control\">\n                          </div>\n                    </div>\n                 \n\n                </div>\n                </div>\n              \n\n\n            </form>\n        \n\n          </div>\n\n\n        </div>\n\n\n      </div>\n      <div class=\"modal-footer\">\n        <button  data-dismiss=\"modal\" type=\"button\" [disabled]=\"!detalleForm.valid\" (click)=\"addDetalle()\" class=\"btn btn-primary\">Guardar</button>\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/detalle-form/detalle-form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_select_service__ = __webpack_require__("../../../../../src/app/services/select.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_endpoint_service__ = __webpack_require__("../../../../../src/app/services/endpoint.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetalleFormComponent = (function () {
    function DetalleFormComponent(fb, ep, select) {
        this.fb = fb;
        this.ep = ep;
        this.select = select;
        this.detalles = [];
        this.saved = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.parte = '';
        this.detalleForm = this.fb.group({
            parte: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required])],
            detalle: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required])],
            observacion: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required])],
        });
    }
    DetalleFormComponent.prototype.ngOnInit = function () {
    };
    DetalleFormComponent.prototype.addDetalle = function () {
        this.saved.emit(this.detalleForm.value);
        this.detalleForm.reset();
        this.detalleForm.setValue({ parte: '', observacion: '', detalle: '' });
    };
    DetalleFormComponent.prototype.setParte = function (parte) {
        this.detalleForm.controls['parte'].setValue(parte);
    };
    return DetalleFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], DetalleFormComponent.prototype, "saved", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], DetalleFormComponent.prototype, "parte", void 0);
DetalleFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'detalle-form',
        template: __webpack_require__("../../../../../src/app/componentes/detalle-form/detalle-form.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_endpoint_service__["a" /* EndPointService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_endpoint_service__["a" /* EndPointService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_select_service__["a" /* SelectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_select_service__["a" /* SelectService */]) === "function" && _d || Object])
], DetalleFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=detalle-form.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/producto-form/producto-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"nuevo-producto\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-label\" style=\"display: none;\">\n        <div class=\"modal-dialog modal-lg\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header generic \">\n                    <h4 class=\"modal-title\" id=\"modal-label\"><i class=\"fa fa-shopping-bag\"></i> Nuevo producto</h4>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n                </div>\n                <div class=\"modal-body\">\n                        <div class=\"clearfix\">\n                                <ul class=\"nav nav-tabs top pull-left w-100p\">\n                                    <li class=\"nav-item\">\n                                        <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#ta\">Datos</a>\n                                    </li>\n                                  \n                                                       \n                                </ul>\n                            </div>\n                            <div class=\"tab-content top\">\n                                    <div class=\"tab-pane active\" id=\"ta\">\n                                        <form [formGroup]=\"productoForm\" class=\"row form-inline\">\n                                                <div class=\"col-md-12\">\n                                                        <div class=\"row\">\n                                                                <div class=\"form-group col-md-3 col-sm-6\" [ngClass]=\"{}\">\n                                                                        <input type=\"text\" formControlName=\"nombre\" class=\"form-control\" placeholder=\"Nombre\">\n                                                                    </div>\n                                                                    <div class=\"form-group col-md-2 col-sm-6\" [ngClass]=\"{}\">\n                                                                        <input type=\"number\" formControlName=\"cantidad\" class=\"form-control\" placeholder=\"Cantidad Inicial\">\n                                                                    </div>\n                                                                    <div class=\"form-group col-md-3 col-sm-6\" [ngClass]=\"{}\">\n                                                                            <input type=\"number\" formControlName=\"precio_compra\" class=\"form-control\" placeholder=\"Precio Compra $\">\n                                                                        </div>\n                                                                   \n                                                                    <div class=\"form-group col-xl-4 col-sm-3\" [ngClass]=\"{}\">\n                                                                            \n                                                                              <div class=\"input-group\">\n                                                                                  <div class=\"input-group-addon\">Unidad</div>\n                                                                                       <ng-select\n                                                                                          formControlName=\"unidad_medida_id\"\n                                                                                          [(options)]=\"unidades\"\n                                                                                          [placeholder]=\"Unidad\"\n                                                                                          [multiple]=\"false\"\n                                                                                      >\n                                                                                      </ng-select>\n                                                                              </div>\n                                                                    </div>\n                        \n                                                                   \n                                                                        \n                                                                    \n                                                        </div>\n                        \n                                                        <div class=\"row\">\n                                                              \n                                                               \n                                                                \n                        \n                                                        </div>\n                                                  \n                                                   \n                        \n                                                </div>\n                                      \n                                               \n                                           \n                                              \n                                        </form>  \n                                     \n                                    </div>\n                           \n\n                                </div>  \n         \n              \n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" [disabled]=\"!productoForm.valid\" (click)=\"saveProducto()\" class=\"btn btn-primary\" data-dismiss=\"modal\">Guardar</button>\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/componentes/producto-form/producto-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_select_service__ = __webpack_require__("../../../../../src/app/services/select.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_endpoint_service__ = __webpack_require__("../../../../../src/app/services/endpoint.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductoFormComponent = (function () {
    function ProductoFormComponent(fb, ep, select) {
        this.fb = fb;
        this.ep = ep;
        this.select = select;
        this.unidades = [];
        this.saved = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["EventEmitter"]();
        this.productoForm = this.fb.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            cantidad: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            precio_compra: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            unidad_medida_id: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])]
        });
    }
    ProductoFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.select.loadUnidadMedida().then(function (res) {
            _this.unidades = res;
        });
    };
    ProductoFormComponent.prototype.saveProducto = function () {
        var _this = this;
        this.ep.saveProducto(this.productoForm.value).then(function (result) {
            _this.saved.emit(true);
        }, function (err) {
            _this.saved.emit(false);
        });
    };
    return ProductoFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_core__["EventEmitter"]) === "function" && _a || Object)
], ProductoFormComponent.prototype, "saved", void 0);
ProductoFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'producto-form',
        template: __webpack_require__("../../../../../src/app/componentes/producto-form/producto-form.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_endpoint_service__["a" /* EndPointService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_endpoint_service__["a" /* EndPointService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__services_select_service__["a" /* SelectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_select_service__["a" /* SelectService */]) === "function" && _d || Object])
], ProductoFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=producto-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/servicio-form/servicio-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"nuevo-servicio\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-label\" style=\"display: none;\">\n        <div class=\"modal-dialog modal-lg\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header generic \">\n                    <h4 class=\"modal-title\" id=\"modal-label\"><i class=\"fa fa-wrench\"></i> Nuevo servicio</h4>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n                </div>\n                <div class=\"modal-body\">\n                        <div class=\"clearfix\">\n                                <ul class=\"nav nav-tabs top pull-left w-100p\">\n                                    <li class=\"nav-item\">\n                                        <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#ta\">Datos</a>\n                                    </li>\n                                  \n                                                       \n                                </ul>\n                            </div>\n                            <div class=\"tab-content top\">\n                                    <div class=\"tab-pane active\" id=\"ta\">\n                                        <form [formGroup]=\"servicioForm\" class=\"row form-inline\">\n                                                <div class=\"form-group col-md-6 col-sm-6\" [ngClass]=\"{}\">\n                                                    <input type=\"text\" formControlName=\"nombre\" class=\"form-control\" placeholder=\"Nombre\">\n                                                </div>\n                                                <div class=\"form-group col-md-6 col-sm-6\" [ngClass]=\"{}\">\n                                                    <input type=\"number\" formControlName=\"precio\" class=\"form-control\" placeholder=\"Precio $\">\n                                                </div>\n                                             \n                                            \n                                            \n                                                \n                                              \n                                        </form>  \n                                     \n                                    </div>\n                           \n\n                                </div>  \n         \n              \n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" [disabled]=\"!servicioForm.valid\" (click)=\"saveServicio()\" class=\"btn btn-primary\" data-dismiss=\"modal\">Guardar</button>\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/componentes/servicio-form/servicio-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicioFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_select_service__ = __webpack_require__("../../../../../src/app/services/select.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_endpoint_service__ = __webpack_require__("../../../../../src/app/services/endpoint.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServicioFormComponent = (function () {
    function ServicioFormComponent(fb, ep, select) {
        this.fb = fb;
        this.ep = ep;
        this.select = select;
        this.clientes = [];
        this.saved = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["EventEmitter"]();
        this.servicioForm = this.fb.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            precio: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
        });
    }
    ServicioFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.select.loadClientes().then(function (res) {
            _this.clientes = res;
        });
    };
    ServicioFormComponent.prototype.saveServicio = function () {
        var _this = this;
        this.ep.saveServicio(this.servicioForm.value).then(function (result) {
            _this.saved.emit(true);
        }, function (err) {
            _this.saved.emit(false);
        });
    };
    return ServicioFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_core__["EventEmitter"]) === "function" && _a || Object)
], ServicioFormComponent.prototype, "saved", void 0);
ServicioFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'servicio-form',
        template: __webpack_require__("../../../../../src/app/componentes/servicio-form/servicio-form.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_endpoint_service__["a" /* EndPointService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_endpoint_service__["a" /* EndPointService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__services_select_service__["a" /* SelectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_select_service__["a" /* SelectService */]) === "function" && _d || Object])
], ServicioFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=servicio-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/taller/estimaciones/estimaciones.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n        <div class=\"col\">\n            <div widget class=\"card\">\n                <div class=\"card-header\">\n                    <span class=\"text-uppercase\">Cotizaciones</span>\n                    <div class=\"widget-controls\"> \n                        <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                        <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                        <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                        <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                        <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                    </div>        \n                </div>\n                <div class=\"card-block widget-body\">\n    \n    \n                    <div class=\"w-200 pull-right bottom-15\">\n                        <div class=\"input-group input-group-sm\">\n                            <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\n                            <input class=\"form-control\" id=\"table-search-input\" [(ngModel)]=\"searchText\" type=\"text\" placeholder=\"Buscar por numero...\">\n                        </div>\n                    </div> \n                    <div class=\"w-200 pull-left bottom-15\">\n                           <button data-toggle=\"modal\" data-target=\"#nuevo-estimacion\" class=\"btn btn-outline generic btn-sm\">\n                               <i class=\"fa fa-plus-circle btn-sm \"> </i>\n                               Nuevo\n                           </button>\n                        </div> \n                        <div class=\"table-responsive\">\n                                <table class=\"table\">\n                                    <thead>\n                                        <tr>\n                                     \n                                            <th>Numero</th>\n                                            <th>Auto / Cliente</th>\n                                            <th>Servicios</th>\n                                            <th>Subtotal</th>\n                                            <th>Iva</th>\n                                            <th>Total</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let presup of data\">\n                                            <td>{{presup.id}}</td>\n                                            <td>  <b>Cliente:</b> {{presup.cliente.nombre}} {{presup.cliente.apellido}} <br/> <b>Auto:</b> {{presup.auto.marca}} {{presup.auto.modelo}} - placa: {{presup.auto.placa}}</td>\n                                            <td> \n                                                    <ul class=\"list-group\">\n                                                            <li *ngFor=\"let item of presup.presupuesto_items\" class=\"list-group-item justify-content-between\">                        \n                                                                <b>{{item.cantidad}}</b> {{item.descripcion}}\n                                                                <span class=\"badge badge-main badge-pill\">{{item.precio}}$</span>\n                                                            </li>\n                                                         \n                                                     \n                                                     </ul>  \n                                            </td>\n                                            <td> <span class=\"badge badge-success big-text\">{{presup.subTotal}} $</span></td>\n                                            <td> <span class=\"badge badge-warning big-text\"> {{presup.iva}}</span></td>\n                                            <td><span class=\"badge badge-main big-text\">{{presup.total}}$</span>  </td>\n\n                                            <td> <a href=\"{{url}}get_pdf_presupuesto/{{presup.id}}\"><button  class=\"btn btn-main btn-sm\"><i class=\"fa fa-file-pdf-o\"></i>Cotizacion</button></a>  </td>\n                                           \n                                        </tr>\n                                  \n                                 \n                                    </tbody>\n                                </table>\n                            </div>\n                 \n                </div>\n            </div>\n        </div>\n        <div class=\"modal fade\" id=\"nuevo-estimacion\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-label\" style=\"display: none;\">\n                <div class=\"modal-dialog modal-lg\" role=\"document\">\n                    <div class=\"modal-content\">\n                        <div class=\"modal-header generic \">\n                            <h4 class=\"modal-title\" id=\"modal-label\"><i class=\"fa fa-estimacion\"></i> Nueva Estimacion</h4>\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n                        </div>\n                        <div class=\"modal-body\">\n                                <div class=\"clearfix\">\n                                        <ul class=\"nav nav-tabs top pull-left w-100p\">\n                                            <li class=\"nav-item\">\n                                                <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#ta\">Datos</a>\n                                            </li>\n                                                               \n                                        </ul>\n                                    </div>\n                                    <div class=\"tab-content top\">\n                                            <div class=\"tab-pane active\" id=\"ta\">\n                                                    <form [formGroup]=\"estimacionForm\">\n                                                            <div class=\"row\">\n                                                                <div class=\"col-md-6\" >\n                                                                        <div [ngClass]=\"{'has-success':estimacionForm.get('fecha').value != '' }\">\n                                                                                <div class=\"form-group\">\n                                                                                        <label for=\"\">Fecha:</label>\n                                                                                        <input [ngClass]=\"{'form-control-success':estimacionForm.get('fecha').value != '' }\" formControlName=\"fecha\" type=\"date\" class=\"form-control\">\n                                                                                </div>\n    \n                                                                        </div>\n                                                                        <div [ngClass]=\"{'has-success':estimacionForm.get('subTotal').value != '' }\">\n                                                                                <div class=\"form-group\">\n                                                                                        <label for=\"\">SubTotal:</label>\n                                                                                        <input disabled [ngClass]=\"{'form-control-success':estimacionForm.get('subTotal').value != '' }\" formControlName=\"subTotal\" type=\"number\" class=\"form-control bg-success text-white\">\n                                            \n                                                                                </div>\n    \n                                                                        </div>\n                                                                        <div [ngClass]=\"{'has-success':estimacionForm.get('iva').value != '' }\">\n                                                                                <div class=\"form-group\">\n                                                                                        <label for=\"\">Monto de Iva:</label>\n                                                                                        <input disabled [ngClass]=\"{'form-control-success':estimacionForm.get('iva').value != '' }\" formControlName=\"iva\" type=\"number\" class=\"form-control bg-warning text-white\">\n                                            \n                                                                                </div>\n    \n                                                                        </div>\n                                                                        <div [ngClass]=\"{'has-success':estimacionForm.get('total').value != '' }\">\n                                                                                <div class=\"form-group\">\n                                                                                        <label for=\"\">Monto Total:</label>\n                                                                                        <input disabled [ngClass]=\"{'form-control-success':estimacionForm.get('total').value != '' }\" formControlName=\"total\" type=\"number\" class=\"form-control bg-primary text-white\">\n                                            \n                                                                                </div>\n    \n                                                                        </div>\n                                                                       \n                                           \n                                                                    \n                                                                \n                                                                   \n                                                                    </div>\n                                                               \n                                                                <div class=\"col-md-6\"  >\n                                                                        \n\n                                                            \n                                                            <div class=\"form-group\">\n                                                                    <label for=\"exampleSelect1\">Auto</label>\n                                                                            <ng-select\n                                                                            formControlName=\"auto_id\"\n                                                                            [(options)]=\"autos\"\n                                                                            [placeholder]=\"autosLabel\"\n                                                                            [multiple]=\"false\"\n                                                                        >\n                                                                        </ng-select>\n                                                                     \n                                                                \n                                                                        \n\n                                                                </div>\n\n                                                                <div class=\"form-group\">\n                                                                        <label for=\"exampleSelect1\">Cliente</label>\n                                                                                <ng-select\n                                                                                formControlName=\"cliente_id\"\n                                                                                [(options)]=\"clientes\"\n                                                                                [placeholder]=\"clientesLabel\"\n                                                                                [multiple]=\"false\"\n                                                                            >\n                                                                            </ng-select>\n                                                                         \n                                                                    \n                                                                            \n    \n                                                                    </div>\n            \n                                                                            \n                                                                     \n                                                                      \n                                                                    </div>\n                                                            </div>\n                                                           \n                                                             \n                                                          </form>\n                                                          <div class=\"card card-outline-default text-center\">\n                                                            <div class=\"card-header \">\n                                                                    Items de Presupuesto\n                                                                </div>\n                                                            <div class=\"card-block\">\n                                                                    <form [formGroup]=\"itemPresupuestoForm\" class=\"row form-inline\">\n                                                                            <div class=\"form-group col-md-10 col-sm-6\" [ngClass]=\"{}\">\n                                            \n                                                                                <div class=\"row\">\n                                                                                    <div class=\"col-md-2\">\n                                                                                            <input type=\"number\"  formControlName=\"cantidad\" class=\"form-control\" placeholder=\"Cantidad\">\n                                                                                    </div>\n                                                                                    <div class=\"col-md-8\">\n                                                                                            <input type=\"text\" formControlName=\"descripcion\" class=\"form-control\" placeholder=\"Descripcion\">\n                                                                                    </div>\n                                                                                    <div class=\"col-md-2\">\n                                                                                            <input  type=\"number\" formControlName=\"precio\" class=\"form-control\" placeholder=\"$\">\n                                                                                    </div>\n                                                                                </div>\n                                                                               \n                                                                               \n                                                                            </div>\n                                                                         \n                                                                        \n                                                                            <div class=\"form-group col-md-2 col-sm-6\" *ngIf=\"create\">\n                                                                                <button [disabled]=\"!itemPresupuestoForm.valid\" (click)=\"addItem()\" type=\"submit\" class=\"btn btn-primary\">Agregar</button>\n                                                                            </div>\n                                                                            \n                                                                            <div class=\"form-group col-md-2 col-sm-6\" *ngIf=\"!create\">\n                                                                                <button [disabled]=\"!itemPresupuestoForm.valid\" (click)=\"editRole()\" type=\"submit\" class=\"btn btn-primary\">Editar</button>\n                                                                            </div>\n                                                                    </form>  \n                                                                    <table class=\"table table-striped\">\n                                                                            <thead>\n                                                                                <tr>\n                                                                                    <th>#</th>\n                                                                                    <th>Descripcion</th>\n                                                                                    <th>Precio</th>\n                                                                                    <th></th>\n                            \n                                                                                </tr>\n                                                                            </thead>\n                                                                            <tbody>\n                                                                                <tr *ngFor=\"let item of items;let i = index\">\n                                                                                    <th scope=\"row\">{{item.cantidad}}</th>\n                                                                                    <th>{{item.descripcion}}</th>\n                                                                                    <th>{{item.precio}} $</th>\n                                                                                    <td><button (click)=\"eliminarItem(i)\" class=\"btn btn-danger\"><i class=\"fa fa-trash-o\"></i> </button></td>\n                                                                                </tr>\n                                                                                \n                                                                            </tbody>\n                                                                        </table>\n                                                            </div>\n                                                        </div>\n                                             \n                                            </div>\n                                        \n     \n                                        </div>  \n                 \n                      \n                        </div>\n                        <div class=\"modal-footer\">\n                            <button type=\"button\" [disabled]=\"!estimacionForm.valid\" (click)=\"savePresupuesto()\" class=\"btn btn-primary\" data-dismiss=\"modal\">Guardar</button>\n                            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/pages/taller/estimaciones/estimaciones.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".big-text {\n  font-size: 1.2em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/taller/estimaciones/estimaciones.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstimacionesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_endpoint_service__ = __webpack_require__("../../../../../src/app/services/endpoint.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_global_service__ = __webpack_require__("../../../../../src/app/services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_select_service__ = __webpack_require__("../../../../../src/app/services/select.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__estimaciones_service__ = __webpack_require__("../../../../../src/app/pages/taller/estimaciones/estimaciones.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EstimacionesComponent = (function () {
    function EstimacionesComponent(_dynamicTablesService, fb, selectService, global, ep) {
        var _this = this;
        this._dynamicTablesService = _dynamicTablesService;
        this.fb = fb;
        this.selectService = selectService;
        this.global = global;
        this.ep = ep;
        this.clientes = [];
        this.autos = [];
        this.items = [];
        this.create = true;
        this.cliente = "Seleccione cliente";
        this.autoLabel = "Seleccione Auto";
        this.estimacionForm = this.fb.group({
            auto_id: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required])],
            fecha: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required])],
            subTotal: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required])],
            iva: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required])],
            total: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required])],
            cliente_id: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required])],
            items: ['']
        });
        this.itemPresupuestoForm = this.fb.group({
            cantidad: [1, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required])],
            descripcion: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required])],
            precio: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required])]
        });
        _dynamicTablesService.getAll().then(function (res) {
            console.log("en component", res);
            _this.data = res;
        });
        this.url = ep.getApiUrl();
        console.log('url definitive', this.url);
    }
    EstimacionesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectService.loadAutos().then(function (res) {
            _this.autos = res;
        });
        this.selectService.loadClientes().then(function (res) {
            _this.clientes = res;
        });
    };
    EstimacionesComponent.prototype.savePresupuesto = function () {
        var _this = this;
        this.estimacionForm.controls['items'].setValue(this.items);
        console.log(this.estimacionForm.value);
        this._dynamicTablesService.savePresupuesto(this.estimacionForm.value).then(function (result) {
            _this._dynamicTablesService.getPdfPresupuesto(result.presupuesto).then(function (res) {
                console.log(res);
            });
            _this._dynamicTablesService.getAll().then(function (res) {
                console.log("en component", res);
                _this.data = res;
                _this.estimacionForm.reset();
                _this.estimacionForm.setValue({
                    auto_id: '',
                    fecha: '',
                    subTotal: '',
                    iva: '',
                    total: '',
                    cliente_id: '',
                    items: []
                });
                _this.items = [];
            });
        });
    };
    EstimacionesComponent.prototype.addItem = function () {
        this.items.push(this.itemPresupuestoForm.value);
        this.itemPresupuestoForm.reset();
        var arrayAux = this.items;
        var totalVal = 0;
        arrayAux.forEach(function (element) {
            totalVal = totalVal + (element.precio * element.cantidad);
        });
        var iva = totalVal * this.global.iva / 100;
        var total = totalVal + iva;
        this.estimacionForm.controls['subTotal'].setValue(totalVal);
        this.estimacionForm.controls['iva'].setValue(iva);
        this.estimacionForm.controls['total'].setValue(total);
    };
    EstimacionesComponent.prototype.eliminarItem = function (index) {
        console.log(index);
        this.items.splice(index);
        var arrayAux = this.items;
        var totalVal = 0;
        arrayAux.forEach(function (element) {
            totalVal = totalVal + (element.precio * element.cantidad);
        });
        var iva = totalVal * this.global.iva / 100;
        var total = totalVal + iva;
        this.estimacionForm.controls['subTotal'].setValue(totalVal);
        this.estimacionForm.controls['iva'].setValue(iva);
        this.estimacionForm.controls['total'].setValue(total);
    };
    return EstimacionesComponent;
}());
EstimacionesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'estimaciones-component',
        encapsulation: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__("../../../../../src/app/pages/taller/estimaciones/estimaciones.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/taller/estimaciones/estimaciones.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__estimaciones_service__["a" /* DynamicTablesService */], __WEBPACK_IMPORTED_MODULE_2__services_select_service__["a" /* SelectService */], __WEBPACK_IMPORTED_MODULE_1__services_global_service__["a" /* GlobalService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__estimaciones_service__["a" /* DynamicTablesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__estimaciones_service__["a" /* DynamicTablesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_select_service__["a" /* SelectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_select_service__["a" /* SelectService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_global_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_global_service__["a" /* GlobalService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__services_endpoint_service__["a" /* EndPointService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_endpoint_service__["a" /* EndPointService */]) === "function" && _e || Object])
], EstimacionesComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=estimaciones.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/taller/estimaciones/estimaciones.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicTablesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_endpoint_service__ = __webpack_require__("../../../../../src/app/services/endpoint.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DynamicTablesService = (function () {
    function DynamicTablesService(ep) {
        this.ep = ep;
    }
    DynamicTablesService.prototype.getAll = function () {
        return this.ep.getPresupuestos().then(function (response) {
            return response.presupuestos;
        }, function (err) {
            console.log('error:', err);
        });
    };
    DynamicTablesService.prototype.getPdfPresupuesto = function (id) {
        return this.ep.getPdfPresupuesto(id).then(function (response) {
            return response.presupuesto;
        }, function (err) {
            console.log('error:', err);
        });
    };
    DynamicTablesService.prototype.savePresupuesto = function (presupuesto) {
        return this.ep.savePresupuesto(presupuesto).then(function (result) {
            return result;
        }, function (error) {
            return error;
        });
    };
    return DynamicTablesService;
}());
DynamicTablesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_endpoint_service__["a" /* EndPointService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_endpoint_service__["a" /* EndPointService */]) === "function" && _a || Object])
], DynamicTablesService);

var _a;
//# sourceMappingURL=estimaciones.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/taller/listado/listado-Ingresos.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoIngresosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_endpoint_service__ = __webpack_require__("../../../../../src/app/services/endpoint.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListadoIngresosService = (function () {
    function ListadoIngresosService(ep) {
        this.ep = ep;
    }
    ListadoIngresosService.prototype.getAll = function () {
        return this.ep.getListadoIngresos().then(function (response) {
            return response.listadoIngresos;
        }, function (err) {
            console.log('error:', err);
        });
    };
    return ListadoIngresosService;
}());
ListadoIngresosService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_endpoint_service__["a" /* EndPointService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_endpoint_service__["a" /* EndPointService */]) === "function" && _a || Object])
], ListadoIngresosService);

var _a;
//# sourceMappingURL=listado-Ingresos.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/taller/listado/listado-ingresos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span class=\"text-uppercase\">Entradas en Taller</span>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n                <div class=\"d-inline-block\">\n                        <div class=\"btn-group btn-group\" role=\"group\" aria-label=\"Basic example\">\n                                <button type=\"button\" class=\"btn btn-secondary\">Todos</button>\n                            <button type=\"button\" class=\"btn btn-secondary\">En Proceso</button>\n                            <button type=\"button\" class=\"btn btn-secondary\">Terminados</button>\n    \n                        </div>\n                </div>\n                <div class=\"w-200 pull-right bottom-15\">\n                    <div class=\"input-group input-group-sm\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\n                        <input class=\"form-control\" id=\"table-search-input\" [(ngModel)]=\"searchText\" type=\"text\" placeholder=\"Buscar por numero...\">\n                    </div>\n                </div> \n\n            \n                <div class=\"table-responsive datatable\">\n                    <table class=\"table table-striped table-hover table-sm\" [mfData]=\"data  | PresupuestoPipe : searchText\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\n                        <thead>\n                            <tr>\n                                                      \n                                <th><mfDefaultSorter by=\"id\">#</mfDefaultSorter></th>\n                                <th><mfDefaultSorter by=\"auto_id\">Carro</mfDefaultSorter></th>\n                                <th><mfDefaultSorter by=\"auto_id\">Cliente</mfDefaultSorter></th>\n                                <th><mfDefaultSorter by=\"costo_total\">Costo Materiales / Tiempo </mfDefaultSorter></th>\n                                <th><mfDefaultSorter by=\"fecha_ingreso\">Estatus de Servicio</mfDefaultSorter></th> \n                                <th>Acciones</th>   \n                            </tr>\n                        </thead>\n                        <tbody>                           \n                            <tr *ngFor=\"let listadoIngreso of mf.data\">\n                                <td><strong>{{listadoIngreso.id}}</strong></td>\n                                <td>\n                                    \n                                   <small>Placa: <strong>{{listadoIngreso.auto.placa}}</strong></small> <br>\n                                   <small>Modelo: {{listadoIngreso.auto.marca}} {{listadoIngreso.auto.modelo}} {{listadoIngreso.auto.ano}} </small> <br>\n                                \n                                </td>\n                                <td> {{listadoIngreso.auto.cliente.nombre}} {{listadoIngreso.auto.cliente.apellido}}</td>\n\n                                <th><span class=\"badge badge-main big-text\">{{listadoIngreso.costo_total}}$</span> - <span class=\"badge badge-success big-text\">{{listadoIngreso.tiempo_total}} Horas</span></th>\n\n                                <td >\n                                        <small>Fecha Entrada: <strong>{{listadoIngreso.fecha_ingreso| date:'medium'}}</strong></small> <br>\n                                        <small>Fecha Salida: <strong>{{listadoIngreso.fecha_salida | date:'medium'}}</strong> </small> <br>\n                                        <small>Progreso:</small><br>\n                                        <div class=\"progress progress-sm\">\n                                           <div class=\"progress-bar bg-success\" role=\"progressbar\" [style.width]=\"'20%'\"  aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                        </div>\n                                     </td>\n                                <td>\n                                        <div class=\"d-inline-block\">\n                                                <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Basic example\">\n                                                        <a href=\"{{url}}get_pdf_taller/{{listadoIngreso.id}}\"><button  class=\"btn btn-main btn-sm\"><i class=\"fa fa-file-pdf-o\"></i>Orden de Trabajo</button></a>\n                                                        <button type=\"button\" class=\"btn btn-primary\"> <i class=\"fa fa-eye\"></i> Ver Proceso</button>\n                                                    <button type=\"button\" class=\"btn btn-success\"> <i class=\"fa fa-pencil\"></i> Editar Ingreso</button>\n                                                   \n                            \n                                                </div>\n                                        </div>\n                                    </td>\n\n                                </tr>\n                                <tr *ngIf=\"(mf.data | PresupuestoPipe : searchText).length === 0\">\n                                <td colspan=\"100\">\n                                    No hay Resultados\n                                </td>\n                            </tr>                          \n                        </tbody>\n                        <tfoot>\n                            <tr>\n                                <td colspan=\"12\">\n                                    <mfBootstrapPaginator [rowsOnPageSet]=\"[10, 25, 50, 100]\"></mfBootstrapPaginator>\n                                </td>\n                            </tr>\n                        </tfoot>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n   \n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/taller/listado/listado-ingresos.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#2E0502\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#640D05\",\"gray\":\"#555\",\"gray-light\":\"#ccc\"}';\n  display: none; }\n\n.user-img {\n  width: 50px;\n  height: 50px; }\n\n.datatable .progress {\n  background-color: #ccc; }\n\n.datatable .pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border-radius: 0.25rem; }\n  .datatable .pagination li {\n    display: inline; }\n    .datatable .pagination li a {\n      position: relative;\n      float: left;\n      padding: 0.275rem 0.75rem;\n      font-size: 0.875rem;\n      margin-left: -1px;\n      color: #024a88;\n      text-decoration: none;\n      background-color: #fff;\n      border: 1px solid #ccc; }\n      .datatable .pagination li a:hover {\n        color: #014c8c;\n        background-color: #eceeef;\n        border-color: #ddd; }\n    .datatable .pagination li:first-child a {\n      margin-left: 0;\n      border-bottom-left-radius: 0.2rem;\n      border-top-left-radius: 0.2rem; }\n    .datatable .pagination li:last-child a {\n      border-bottom-right-radius: 0.2rem;\n      border-top-right-radius: 0.2rem; }\n    .datatable .pagination li.active a {\n      z-index: 2;\n      color: #fff;\n      cursor: default;\n      background-color: #024a88;\n      border-color: #024a88; }\n    .datatable .pagination li.disabled a {\n      color: #ccc;\n      pointer-events: none;\n      cursor: not-allowed;\n      background-color: #fff;\n      border-color: #ccc; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/taller/listado/listado-ingresos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoIngresosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listado_Ingresos_service__ = __webpack_require__("../../../../../src/app/pages/taller/listado/listado-Ingresos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_endpoint_service__ = __webpack_require__("../../../../../src/app/services/endpoint.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListadoIngresosComponent = (function () {
    function ListadoIngresosComponent(_listadoIngresosService, fb, ep) {
        var _this = this;
        this._listadoIngresosService = _listadoIngresosService;
        this.fb = fb;
        this.ep = ep;
        this.create = true;
        this.listadoIngresoForm = this.fb.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required])],
            precio: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required])],
        });
        _listadoIngresosService.getAll().then(function (res) {
            console.log("en component", res);
            _this.data = res;
        });
        this.url = this.ep.getApiUrl();
    }
    return ListadoIngresosComponent;
}());
ListadoIngresosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'listadoIngresos-component',
        encapsulation: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__("../../../../../src/app/pages/taller/listado/listado-ingresos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/taller/listado/listado-ingresos.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_0__listado_Ingresos_service__["a" /* ListadoIngresosService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__listado_Ingresos_service__["a" /* ListadoIngresosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__listado_Ingresos_service__["a" /* ListadoIngresosService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_endpoint_service__["a" /* EndPointService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_endpoint_service__["a" /* EndPointService */]) === "function" && _c || Object])
], ListadoIngresosComponent);

var _a, _b, _c;
//# sourceMappingURL=listado-ingresos.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/taller/nuevo/nuevo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n    <div class=\"col-xl-12 col-lg-6 col-12 bottom-30\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>DATOS BASICOS</span>\n                <div class=\"widget-controls\">\n\n\n                </div>\n            </div>\n            <div class=\"card-block widget-body\">\n\n                <form [formGroup]=\"ingresoTallerForm\">\n\n                    <div class=\"form-group\">\n                        <div class=\"input-group\">\n                            <div class=\"input-group-btn\">\n                                <button type=\"button\" class=\"btn btn-main dropdown-toggle\"\n                                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                        <i class=\"fa fa-car\"></i>\n                                </button>\n                                <div class=\"dropdown-menu\">\n\n                                     <a  data-toggle=\"modal\" data-target=\"#nuevo-auto\" class=\"dropdown-item\">Crear Nuevo</a>\n                                </div>\n                                 </div>\n                                        <ng-select\n                                        formControlName=\"auto_id\"\n                                        [(options)]=\"autos\"\n                                        [placeholder]=\"autosLabel\"\n                                        [multiple]=\"false\"\n                                    >\n                                    </ng-select>\n                        </div>\n\n\n                    </div>\n                    <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"input-11\">Fecha y Hora de Entrada</label>\n                                        <input formControlName=\"fecha_ingreso\" max=\"{{currentDate}}\" type=\"date\" class=\"form-control\"  value=\"2011-08-19T13:45:00\" id=\"input-11\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"input-11\">Fecha y Hora de Salida (Aproximada)</label>\n                                        <input formControlName=\"fecha_salida\" type=\"date\" class=\"form-control\"  value=\"2011-08-19T13:45:00\" id=\"input-11\">\n                                    </div>\n                                </div>\n\n                    </div>\n\n\n\n                     <div class=\"form-group\">\n                    <label for=\"exampleSelect3\">Quien Recibe</label>\n\n                     <ng-select\n                            formControlName=\"empleado_id\"\n                            [(options)]=\"empleados\"\n                            [placeholder]=\"empleadosLabel\"\n                            [multiple]=\"false\"\n                        >\n                      </ng-select>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"textarea-1\">Observaciones</label>\n                    <textarea formControlName=\"observaciones\" class=\"form-control\" id=\"textarea-1\"></textarea>\n                </div>\n\n\n\n\n                </form>\n                <div id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n                    <div class=\"card\">\n                        <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\n                            <h5 class=\"mb-0\">\n                                <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                                    Servicios a Realizar\n                                </a>\n                            </h5>\n                        </div>\n                        <div id=\"collapseOne\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n                            <div class=\"card-block\">\n                                    <form [formGroup]=\"serviciosForm\">\n                                           <div class=\"row\">\n                                                <div class=\"form-group col-md-4 col-sm-6\">\n\n                                                            <div class=\"input-group\">\n                                                                    <div class=\"input-group-btn\">\n                                                                        <button type=\"button\" class=\"btn btn-main dropdown-toggle\"\n                                                                                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                                                                <i class=\"fa fa-wrench\"></i>\n                                                                        </button>\n                                                                        <div class=\"dropdown-menu\">\n\n                                                                             <a  data-toggle=\"modal\" data-target=\"#nuevo-servicio\" class=\"dropdown-item\">Crear Nuevo</a>\n                                                                        </div>\n                                                                         </div>\n                                                                                <ng-select\n                                                                                formControlName=\"servicio_id\"\n                                                                                [(options)]=\"servicios\"\n                                                                                [placeholder]=\"serviciosLabel\"\n                                                                                [multiple]=\"false\"\n                                                                            >\n                                                                            </ng-select>\n                                                                </div>\n                                                    </div>\n                                                    <div class=\"form-group col-md-4 col-sm-6\">\n                                                            <input type=\"number\" formControlName=\"horas\" class=\"form-control\" placeholder=\"Horas Aproximadas\">\n                                                        </div>\n\n                                                    <div class=\"form-group col-md-3 col-sm-6\">\n                                                        <button (click)=\"addService()\" [disabled]=\"!serviciosForm.valid\" type=\"submit\" class=\"btn btn-main\">Agregar</button>\n                                                    </div>\n\n                                           </div>\n\n                                        </form>\n                                        <table class=\"table table-bordered\">\n                                                <thead>\n                                                    <tr>\n                                                        <th>#</th>\n                                                        <th>Servicio</th>\n                                                        <th>Horas</th>\n                                                \n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <tr *ngFor=\"let servicio of listadoServicios; let i = index \">\n                                                        <th scope=\"row\">{{i+1}}</th>\n                                                        <td>{{servicio.nombre}}</td>\n                                                        <td><span class=\"badge badge-main badge-pill big-text\">{{servicio.horas}}</span></td>\n                                                        <td><button (click)=\"eliminarServicio(servicio,i)\" class=\"btn btn-danger\"><i class=\"fa fa-trash-o\"></i> </button></td>\n                                                    </tr>\n                                               \n                                                </tbody>\n                                        </table>\n\n                                        <div class=\"items\">\n                                                <ul class=\"list-group\">\n\n                                            \n                                                        <li  class=\"list-group-item justify-content-between\">\n                                                            &nbsp;\n                                                                <span class=\"badge badge-warning badge-pill big-text\">Tiempo Estimado {{totalServicio}} Horas</span>\n                                                            </li>\n\n                                                    </ul>\n\n                                        </div>\n\n\n\n\n                            </div>\n                        </div>\n\n\n                    </div>\n\n                    <div class=\"card \">\n                        <div class=\"card-header\" role=\"tab\" id=\"headingSix\">\n                            <h5 class=\"mb-0\">\n                                <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseSix\" aria-expanded=\"false\" aria-controls=\"collapseSix\">\n                                    Productos a Utilizar\n                                </a>\n                            </h5>\n                        </div>\n                        <div id=\"collapseSix\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingSix\">\n                            <div class=\"card-block\">\n                                    <form [formGroup]=\"productosForm\">\n                                                    <div class=\"row\">\n                                                            <div class=\"form-group col-md-4 col-sm-6\">\n                                                                    \n                                                                <div class=\"input-group\">\n                                                                        <div class=\"input-group-btn\">\n                                                                            <button type=\"button\" class=\"btn btn-main dropdown-toggle\"\n                                                                                    data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                                                                    <i class=\"fa fa-shopping-bag\"></i>\n                                                                            </button>\n                                                                            <div class=\"dropdown-menu\">\n\n                                                                                    <a  data-toggle=\"modal\" data-target=\"#nuevo-producto\" class=\"dropdown-item\">Crear Nuevo</a>\n                                                                            </div>\n                                                                                </div>\n                                                                                    <ng-select\n                                                                                    formControlName=\"producto_id\"\n                                                                                    [(options)]=\"productos\"\n                                                                                    [placeholder]=\"productosLabel\"\n                                                                                    [multiple]=\"false\"\n                                                                                >\n                                                                                </ng-select>\n                                                                    </div>\n                                                        </div>\n                                                        <div class=\"form-group col-md-4 col-sm-6\">\n                                                                <input type=\"number\" formControlName=\"cantidad\" class=\"form-control\" placeholder=\"Cantidad\">\n                                                            </div>\n    \n                                                        <div class=\"form-group col-md-3 col-sm-6\">\n                                                            <button (click)=\"addProducto()\" type=\"submit\" class=\"btn btn-main\">Agregar</button>\n                                                        </div>\n\n                                                    </div>\n                                            \n                                                   \n                                        </form>\n                                        <table class=\"table table-bordered\">\n                                                <thead>\n                                                    <tr>\n                                                        <th>#</th>\n                                                        <th>Producto</th>\n                                                        <th>Cantidad</th>\n                                                \n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <tr *ngFor=\"let producto of listadoProductos; let i = index \">\n                                                        <th scope=\"row\">{{i+1}}</th>\n                                                        <td>{{producto.nombre}}</td>\n                                                        <td><span class=\"badge badge-main badge-pill big-text\">{{producto.cantidad}}</span></td>\n                                                        <td><button (click)=\"eliminarProducto(producto,i)\" class=\"btn btn-danger\"><i class=\"fa fa-trash-o\"></i> </button></td>\n                                                    </tr>\n                                               \n                                                </tbody>\n                                        </table>\n\n\n                                        <div class=\"items\">\n                                                <ul class=\"list-group\">\n                                              \n                                                <li  class=\"list-group-item justify-content-between\">\n                                                        &nbsp;\n                                                        <span class=\"badge badge-warning badge-pill big-text pull-right\">Costo Aproximado : {{totalProducto}} $</span>\n                                                    </li>\n\n                                            </ul>\n\n                                        </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"card card-light\">\n                            <div class=\"card-header\" role=\"tab\" id=\"headingSeven\">\n                                <h5 class=\"mb-0\">\n                                    <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseSeven\" aria-expanded=\"false\" aria-controls=\"collapseSeven\">\n                                        Detalles del Auto\n                                    </a>\n                                </h5>\n                            </div>\n                            <div id=\"collapseSeven\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingSix\">\n                                <div class=\"card-block\">\n                                            <div class=\"text-center\">\n\n\n                                                <svg  width=\"365\" height=\"185\">\n                                                            <!-- Top -->\n                                                            <rect data-toggle=\"modal\" (click)=\"setPart('Techo')\" data-target=\"#nuevo-detalle\" id=\"top\" x=\"70\" y=\"10\" width=\"220\" height=\"130\" fill=\"transparent\" rx=\"40\" stroke=\"#2E0502\" stroke-width=\"10\" />\n\n                                                            <!-- Body -->\n                                                            <rect data-toggle=\"modal\" (click)=\"setPart('Puerta')\" data-target=\"#nuevo-detalle\"  id=\"cuerpo\" x=\"10\" y=\"70\" width=\"340\" height=\"80\" fill=\"#2E0502\" rx=\"10\" />\n\n                                                            <g>\n                                                            <!-- Left line -->\n                                                            <line data-toggle=\"modal\" (click)=\"setPart('Columna Izquierda')\" data-target=\"#nuevo-detalle\" data-toggle=\"modal\" data-target=\"nuevo-detalle\" x1=\"145\" y1=\"10\" x2=\"145\" y2=\"80\" stroke=\"#2E0502\" stroke-width=\"10\"/>\n\n                                                            <!-- Right line -->\n                                                            <line  (click)=\"setPart('Columna Derecha')\" data-toggle=\"modal\" data-target=\"#nuevo-detalle\" x1=\"215\" y1=\"10\" x2=\"215\" y2=\"80\" stroke=\"#2E0502\" stroke-width=\"10\"/>\n                                                            </g>\n\n                                                            <g>\n                                                            <!-- Left bumper -->\n                                                            <rect data-toggle=\"modal\"  (click)=\"setPart('Guarda Choque Trasero')\" data-toggle=\"modal\" data-target=\"#nuevo-detalle\" x=\"0\" y=\"110\" width=\"40\" height=\"20\" fill=\"#999\" rx=\"10\" />\n\n                                                            <!-- Right bumper -->\n                                                            <rect data-toggle=\"modal\"  (click)=\"setPart('Guarda Choque Delantero')\"  data-toggle=\"modal\"  data-target=\"#nuevo-detalle\"  x=\"325\" y=\"110\" width=\"40\" height=\"20\" fill=\"#999\" rx=\"10\" />\n                                                            </g>\n\n                                                            <!-- Left wheel -->\n                                                            <g>\n                                                            <circle id=\"right-wheel-sup\" (click)=\"setPart('Llanta izquierda Inferior')\" data-toggle=\"modal\" data-target=\"#nuevo-detalle\" r=\"40px\" fill=\"#222\" stroke=\"white\" stroke-width=\"7\" cx=\"90\" cy=\"140\"/>\n                                                            <circle id=\"right-wheel-inf\" (click)=\"setPart('Llanta izquierda Inferior')\" data-toggle=\"modal\" data-target=\"#nuevo-detalle\" r=\"15px\" fill=\"#555\" cx=\"90\" cy=\"140\"/>\n                                                            </g>\n\n                                                            <!-- Right wheel -->\n                                                            <g>\n                                                            <circle id=\"right-wheel-sup\" (click)=\"setPart('Llanta derecha Superior')\" data-toggle=\"modal\" data-target=\"#nuevo-detalle\" r=\"40px\" fill=\"#222\" stroke=\"white\" stroke-width=\"7\" cx=\"270\" cy=\"140\"/>\n                                                            <circle id=\"right-wheel-inf\" (click)=\"setPart('Llanta derecha Inferior')\" data-toggle=\"modal\" data-target=\"#nuevo-detalle\" r=\"15px\" fill=\"#555\" cx=\"270\" cy=\"140\"/>\n                                                            </g>\n\n                                                            <g>\n                                                            <!-- Gold light -->\n                                                            <circle id=\"luz-delantera\" (click)=\"setPart('luz delantera')\"  data-toggle=\"modal\" data-target=\"#nuevo-detalle\" r=\"15px\" fill=\"gold\" cx=\"340\" cy=\"90\"/>\n\n                                                            <!-- Orange light -->\n                                                            <circle id=\"luz-trasera\" (click)=\"setPart('luz trasera')\" data-toggle=\"modal\" data-target=\"#nuevo-detalle\" r=\"10px\" fill=\"orange\" cx=\"15\" cy=\"90\"/>\n                                                            </g>\n                                                        </svg>\n\n                                                        <table class=\"table table-bordered\">\n                                                                <thead>\n                                                                    <tr>\n                                                                        <th>#</th>\n                                                                        <th>Parte del Carro</th>\n                                                                        <th>Detalle</th>\n                                                                        <th>Observacion</th>\n                                                                        <th>Acciones</th>\n                                                                    </tr>\n                                                                </thead>\n                                                                <tbody>\n                                                                    <tr *ngFor=\"let observacion of listadoDetalles; let i = index \">\n                                                                        <th scope=\"row\">{{i+1}}</th>\n                                                                        <td>{{observacion.parte}}</td>\n                                                                        <td>{{observacion.detalle}}</td>\n                                                                        <td>{{observacion.observacion}}</td>\n                                                                        <td><button (click)=\"eliminarItem(i)\" class=\"btn btn-danger\"><i class=\"fa fa-trash-o\"></i> </button></td>\n                                                                    </tr>\n                                                               \n                                                                </tbody>\n                                                        </table>\n\n                                                        <svg version=\"1.1\" width=\"800\" height=\"600\"\n                                                                xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 800 600\">\n\n                                                                <ellipse id=\"shadow\" fill=\"#000\"  cx=\"410.779\" cy=\"411.598\" rx=\"142.983\" ry=\"7.438\"/>\n\n                                                                    <g id=\"wholeCar\">\n\n                                                                <ellipse  data-target=\"#nuevo-detalle\" id=\"shadowFollow\" fill=\"#000\"  cx=\"410.779\" cy=\"411.598\" rx=\"142.983\" ry=\"7.438\" opacity=\"0\"/>\n                                                                <g clip-path=\"url(#tyreMask)\">\n                                                                <path (click)=\"setPart('Llanta Izquierda')\"  data-toggle=\"modal\" data-target=\"#nuevo-detalle\" id=\"tyreL\" fill=\"#222\" d=\"M345.763,410.936h-29.098c-2.2,0-4-1.8-4-4v-40.935c0-2.2,1.8-4,4-4h29.098c2.2,0,4,1.8,4,4\tv40.935C349.763,409.136,347.963,410.936,345.763,410.936z\"/>\n                                                                <path data-toggle=\"modal\" (click)=\"setPart('Llanta Derecha')\" data-target=\"#nuevo-detalle\" id=\"tyreR\" fill=\"#222\" d=\"M502.303,410.936h-29.098c-2.2,0-4-1.8-4-4v-40.935c0-2.2,1.8-4,4-4h29.098c2.2,0,4,1.8,4,4\tv40.935C506.303,409.136,504.503,410.936,502.303,410.936z\"/>\n                                                                    </g>\n                                                                    <g id=\"chassis\">\n                                                                <line data-toggle=\"modal\" (click)=\"setPart('Guarda Fango')\" data-target=\"#nuevo-detalle\" id=\"bumper\" fill=\"none\" stroke=\"#ccc\" stroke-width=\"26\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" x1=\"290\" y1=\"370\" x2=\"528\" y2=\"370\"/>\n                                                                    <g clip-path=\"url(#bonnetMask)\">\n                                                                <path data-toggle=\"modal\" (click)=\"setPart('Capo')\" data-target=\"#nuevo-detalle\" id=\"bonnetEnd\" fill=\"#2E0502\" d=\"M290,361.167v-47.833c0-17.05,13.95-31,31-31h177.833c17.05,0,31,13.95,31,31v47.833\"/>\n                                                                <path data-toggle=\"modal\" (click)=\"setPart('Frente')\" data-target=\"#nuevo-detalle\" id=\"bonnetStart\" fill=\"#ccc\" d=\"M378,361.167v-47.833c0-17.05,13.95-31,31-31h1.833c17.05,0,31,13.95,31,31v47.833\"/>\n                                                                    </g>\n                                                                <polygon data-toggle=\"modal\" data-target=\"#nuevo-detalle\" id=\"frame\" fill=\"#1B4C3D\" fill-opacity=\"0.2\" stroke=\"#2E0502\" stroke-width=\"16\" stroke-miterlimit=\"10\" points=\"496.429,282.333\n                                                                    323.467,282.333 340.467,202.194 483.429,202.194 \"/>\n                                                                <circle (click)=\"setPart('Foco Izquierdo')\" data-toggle=\"modal\" data-target=\"#nuevo-detalle\" id=\"headlightL\" fill=\"gold\" cx=\"331.714\" cy=\"326.858\" r=\"17.5\"/>\n                                                                <circle (click)=\"setPart('Foco Derecho')\" data-toggle=\"modal\" data-target=\"#nuevo-detalle\" id=\"headlightR\" fill=\"gold\" cx=\"487.754\" cy=\"326.858\" r=\"17.5\"/>\n                                                                    <rect (click)=\"setPart('Retrovisor Derecho')\" data-toggle=\"modal\" data-target=\"#nuevo-detalle\" id=\"mirrorR\" x=\"514.21\" y=\"262.76\" width=\"28.59\" height=\"20.16\" rx=\"6\" ry=\"6\" fill=\"#2E0502\"/>\n                                                                    <rect (click)=\"setPart('Retrovisor Izquierdo')\" data-toggle=\"modal\" data-target=\"#nuevo-detalle\" id=\"mirrorL\" x=\"276.94\" y=\"262.76\" width=\"28.59\" height=\"20.16\" rx=\"6\" ry=\"6\" fill=\"#2E0502\"/>\n                                                                    </g>\n                                                                    </g>\n\n                                                                </svg>\n\n\n\n\n                                            </div>\n\n                                            <table class=\"table table-bordered\">\n                                                    <thead>\n                                                        <tr>\n                                                            <th>#</th>\n                                                            <th>Parte del Carro</th>\n                                                            <th>Detalle</th>\n                                                            <th>Observacion</th>\n                                                            <th>Acciones</th>\n\n                                                        </tr>\n                                                    </thead>\n                                                    <tbody>\n                                                        <tr *ngFor=\"let observacion of listadoDetalles; let i = index\">\n                                                            <th scope=\"row\">{{i+1}}</th>\n                                                            <td>{{observacion.parte}}</td>\n                                                            <td>{{observacion.detalle}}</td>\n                                                            <td>{{observacion.observacion}}</td>\n                                                            <td><button (click)=\"eliminarItem(i)\" class=\"btn btn-danger\"><i class=\"fa fa-trash-o\"></i> </button></td>\n                                                        </tr>\n                                                   \n                                                    </tbody>\n                                            </table>\n\n\n                                </div>\n                            </div>\n                        </div>\n                </div>\n\n            </div>\n            <button (click)=\"saveTaller()\" [disabled]=\"!ingresoTallerForm.valid || listadoServicios.length == 0 || listadoProductos.length == 0  \"  class=\"btn btn-main btn-block\"><i class=\"fa fa-floppy-o\"></i> GUARDAR</button>\n\n            \n        </div>\n\n    </div>\n\n  \n\n\n</div>\n<div *ngIf=\"noStock\"  class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\n    <button  type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n    <strong>No hay stock disponible para este servicio</strong> .\n</div>\n\n\n\n\n\n<auto-form (saved)=\"updateSelect($event)\"></auto-form>\n\n<producto-form (saved)=\"updateSelectProducto($event)\"></producto-form>\n\n<servicio-form (saved)=\"updateSelectServicio($event)\"></servicio-form>\n\n<detalle-form (saved)=\"addDetalle($event)\" [parte]=\"part\"></detalle-form>\n"

/***/ }),

/***/ "../../../../../src/app/pages/taller/nuevo/nuevo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#2E0502\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#640D05\",\"gray\":\"#555\",\"gray-light\":\"#ccc\"}';\n  display: none; }\n\n.items {\n  margin-top: 20px; }\n\nline:hover {\n  stroke: #c92228; }\n\n#top:hover {\n  stroke: #c92228; }\n\n#cuerpo:hover {\n  fill: #c92228; }\n\n#right-wheel-inf:hover {\n  fill: #c92228; }\n\n#right-wheel-sup:hover {\n  fill: #c92228; }\n\n#left-wheel-inf:hover {\n  fill: #c92228; }\n\n#left-wheel-sup:hover {\n  fill: #c92228; }\n\n#luz-delantera:hover {\n  fill: #c92228; }\n\n#luz-trasera:hover {\n  fill: #c92228; }\n\n#tyreL:hover {\n  fill: #c92228; }\n\n#tyreR:hover {\n  fill: #c92228; }\n\n#bumper:hover {\n  stroke: #c92228; }\n\n#bonnetEnd:hover {\n  fill: #c92228; }\n\n#bonnetStart:hover {\n  fill: #c92228; }\n\n#frame:hover {\n  fill: #c92228;\n  stroke: #c92228; }\n\n#headlightL:hover {\n  fill: #c92228; }\n\n#headlightR:hover {\n  fill: #c92228; }\n\n#mirrorL:hover {\n  fill: #c92228; }\n\n#mirrorR:hover {\n  fill: #c92228; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/taller/nuevo/nuevo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IngresoTallerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_global_service__ = __webpack_require__("../../../../../src/app/services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__componentes_detalle_form_detalle_form__ = __webpack_require__("../../../../../src/app/componentes/detalle-form/detalle-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_endpoint_service__ = __webpack_require__("../../../../../src/app/services/endpoint.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_select_service__ = __webpack_require__("../../../../../src/app/services/select.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var IngresoTallerComponent = (function () {
    function IngresoTallerComponent(formBuilder, select, ep, global) {
        this.formBuilder = formBuilder;
        this.select = select;
        this.ep = ep;
        this.global = global;
        this.autoPicked = false;
        this.autos = [];
        this.productos = [];
        this.empleados = [];
        this.servicios = [];
        this.serviciosLabel = 'Elija Servicio';
        this.productosLabel = 'Elija Producto';
        this.autosLabel = 'Elija Auto';
        this.empleadosLabel = 'Quien Recibe...';
        this.listadoServicios = [];
        this.listadoProductos = [];
        this.listadoDetalles = [];
        this.totalProducto = 0;
        this.totalServicio = 0;
        this.noStock = false;
        this.part = '';
        this.ingresoTallerForm = this.formBuilder.group({
            empleado_id: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            auto_id: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            fecha_ingreso: [''],
            fecha_salida: [''],
            status_taller_id: [''],
            observaciones: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])]
        });
        this.serviciosForm = this.formBuilder.group({
            servicio_id: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            horas: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
        });
        this.productosForm = this.formBuilder.group({
            producto_id: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            cantidad: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
        });
    }
    IngresoTallerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.select.loadAutos().then(function (res) {
            _this.autos = res;
        });
        this.select.loadServicios().then(function (res) {
            _this.servicios = res;
            console.log(_this.servicios);
        });
        this.select.loadProductos().then(function (res) {
            _this.productos = res;
        });
        this.select.loadEmpleados().then(function (res) {
            _this.empleados = res;
        });
        this.currentDate = this.global.currentDateFormat();
        console.log(this.currentDate);
    };
    IngresoTallerComponent.prototype.updateSelect = function (val) {
        var _this = this;
        this.select.loadAutos().then(function (res) {
            _this.autos = res;
        });
    };
    IngresoTallerComponent.prototype.updateSelectProducto = function (val) {
        var _this = this;
        this.select.loadProductos().then(function (res) {
            _this.productos = res;
        });
    };
    IngresoTallerComponent.prototype.updateSelectServicio = function (val) {
        var _this = this;
        this.select.loadServicios().then(function (res) {
            _this.servicios = res;
        });
    };
    IngresoTallerComponent.prototype.addService = function () {
        var _this = this;
        console.log(this.serviciosForm.value);
        var result = this.servicios.find(function (val) {
            return val.value == _this.serviciosForm.value.servicio_id;
        });
        var saveVal = {
            nombre: result.label
        };
        Object.assign(saveVal, this.serviciosForm.value);
        this.listadoServicios.push(saveVal);
        this.totalServicio += this.serviciosForm.value.horas;
        this.serviciosForm.reset();
    };
    IngresoTallerComponent.prototype.addProducto = function () {
        var _this = this;
        var result = this.productos.find(function (val) {
            return val.value == _this.productosForm.value.producto_id;
        });
        var saveVal = {
            nombre: result.label,
            cantidad: 0
        };
        Object.assign(saveVal, this.productosForm.value);
        this.listadoProductos.push(saveVal);
        this.ep.getProducto(this.productosForm.value.producto_id).then(function (res) {
            console.log(res);
            console.log(saveVal);
            _this.totalProducto += (res.producto.precio_compra * saveVal.cantidad);
        });
        this.productosForm.reset();
    };
    IngresoTallerComponent.prototype.addDetalle = function (val) {
        this.listadoDetalles.push(val);
    };
    IngresoTallerComponent.prototype.eliminarItem = function (i) {
        this.listadoDetalles.splice(i);
    };
    IngresoTallerComponent.prototype.eliminarProducto = function (producto, i) {
        var _this = this;
        this.ep.getProducto(producto.producto_id).then(function (res) {
            console.log(res);
            console.log(producto.cantidad);
            _this.totalProducto -= (res.producto.precio_compra * producto.cantidad);
            _this.listadoProductos.splice(i);
        });
    };
    IngresoTallerComponent.prototype.eliminarServicio = function (servicio, i) {
        this.totalServicio -= servicio.horas;
        this.listadoServicios.splice(i);
    };
    IngresoTallerComponent.prototype.saveTaller = function () {
        var _this = this;
        this.listadoProductos.map(function (res) {
            delete res.nombre;
        });
        this.listadoServicios.map(function (res) {
            delete res.nombre;
        });
        this.ingresoTallerForm.controls['status_taller_id'].setValue(1);
        var request = { servicios: this.listadoServicios, productos: this.listadoProductos, detalles: this.listadoDetalles, costo_total: this.totalProducto, tiempo_total: this.totalServicio };
        Object.assign(request, this.ingresoTallerForm.value);
        console.log(request);
        this.ep.saveIngresoTaller(request).then(function (res) {
            if (res['msg']) {
                _this.noStock = true;
            }
        });
    };
    IngresoTallerComponent.prototype.setPart = function (part) {
        console.log(part);
        this.detalle.setParte(part);
    };
    return IngresoTallerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__componentes_detalle_form_detalle_form__["a" /* DetalleFormComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__componentes_detalle_form_detalle_form__["a" /* DetalleFormComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__componentes_detalle_form_detalle_form__["a" /* DetalleFormComponent */]) === "function" && _a || Object)
], IngresoTallerComponent.prototype, "detalle", void 0);
IngresoTallerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'az-inputs',
        encapsulation: __WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__("../../../../../src/app/pages/taller/nuevo/nuevo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/taller/nuevo/nuevo.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_0__services_global_service__["a" /* GlobalService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_select_service__["a" /* SelectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_select_service__["a" /* SelectService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_endpoint_service__["a" /* EndPointService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_endpoint_service__["a" /* EndPointService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__services_global_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_global_service__["a" /* GlobalService */]) === "function" && _e || Object])
], IngresoTallerComponent);

var _a, _b, _c, _d, _e;
/*import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

Component({
    selector:'ingreso-taller',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './nuevo.component.html'

})
export class NuevoIngresoTaller{

    ingresoTallerForm:FormGroup;

    constructor(public formBuilder:FormBuilder){

            this.ingresoTallerForm = this.formBuilder.group({
                empleado_id:['',Validators.compose([Validators.required])],
                status_taller_id:['',Validators.compose([Validators.required])],
                fecha_ingreso:['',Validators.compose([Validators.required])],
                observaciones:['',Validators.compose([Validators.required])],
                detalles:['',Validators.compose([Validators.required])]
            })

    }
}*/
//# sourceMappingURL=nuevo.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/taller/seguimiento-taller/seguimiento-taller.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"comments\">\n\t<article class=\"comment\">\n\t\t<a class=\"comment-img\" href=\"#non\">\n\t\t\t<img src=\"http://lorempixum.com/50/50/people/1\" alt=\"\" width=\"50\" height=\"50\" />\n\t\t</a>\n\t\t\t\n\t\t<div class=\"comment-body\">\n\t\t\t<div class=\"text\">\n\t\t\t  <p>Hello, this is an example comment</p>\n\t\t\t</div>\n\t\t\t<p class=\"attribution\">by <a href=\"#non\">Joe Bloggs</a> at 2:20pm, 4th Dec 2012</p>\n\t\t</div>\n\t</article>\n\t\n\t<article class=\"comment\">\n\t\t<a class=\"comment-img\" href=\"#non\">\n\t\t<img src=\"http://lorempixum.com/50/50/people/7\" alt=\"\" width=\"50\" height=\"50\">\n\t\t</a>\n\t\t\t\n\t\t<div class=\"comment-body\">\n\t\t\t<div class=\"text\">\n\t\t\t  <p>This is a much longer one that will go on for a few lines.</p>\n\t\t\t  <p>It has multiple paragraphs and is full of waffle to pad out the comment. Usually, you just wish these sorts of comments would come to an end.</p>\n\t\t\t</div>\n\t\t<p class=\"attribution\">by <a href=\"#non\">Joe Bloggs</a> at 2:23pm, 4th Dec 2012</p>\n\t\t</div>\n\t</article>\n\t\t\n\t<article class=\"comment\">\n\t\t<a class=\"comment-img\" href=\"#non\">\n\t\t<img src=\"http://profile.ak.fbcdn.net/hprofile-ak-snc4/572942_100000672487970_422966851_q.jpg\" alt=\"\" width=\"50\" height=\"50\">\n\t\t</a>\n\t\t\t\n\t\t<div class=\"comment-body\">\n\t\t\t<div class=\"text\">\n\t\t\t\t<p>Originally from <a href=\"https://cssdeck.com/item/301/timeline-style-blog-comments#comment_289\">cssdeck.com</a> this presentation has been updated \n\t\t\t\tto looks more precisely to the facebook timeline</p>\n\t\t\t</div>\n\t\t<p class=\"attribution\">by <a href=\"https://www.facebook.com/luky.TikTek\">Luky Vj</a> at 2:44pm, 14th Apr 2012</p>\n\t\t</div>\n\t</article>\n</section>​"

/***/ }),

/***/ "../../../../../src/app/pages/taller/seguimiento-taller/seguimiento-taller.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#2E0502\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#640D05\",\"gray\":\"#555\",\"gray-light\":\"#ccc\"}';\n  display: none; }\n\narticle, aside, figure, footer, header, hgroup, menu, nav, section {\n  display: block; }\n\na {\n  color: #6d84b4;\n  text-decoration: none; }\n\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 20px auto;\n  font: 16px/1.4 Arial, sans-serif;\n  background: #3b5998; }\n\nsection {\n  background: rgba(255, 255, 255, 0.9);\n  padding-right: 85px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  height: 100%;\n  width: 60%;\n  margin: auto;\n  margin-top: -20px;\n  border-radius: 5px;\n  border: 1px solid #666; }\n\n.comment {\n  overflow: hidden;\n  padding: 0 0 1em;\n  border-bottom: 1px solid #ddd;\n  margin: 0 0 1em;\n  margin-left: 40px;\n  *zoom: 1;\n  width: 100%; }\n\n.comment-img {\n  float: left;\n  margin-right: 33px;\n  border-radius: 5px;\n  overflow: hidden; }\n\n.comment-img img {\n  display: block; }\n\n.comment-body {\n  overflow: hidden; }\n\n.comment .text {\n  padding: 10px;\n  border: 1px solid #e5e5e5;\n  border-radius: 5px;\n  background: #fff; }\n\n.comment .text p:last-child {\n  margin: 0; }\n\n.comment .attribution {\n  margin: 0.5em 0 0;\n  font-size: 14px;\n  color: #666; }\n\n/* Decoration */\n.comments, .comment {\n  position: relative; }\n\n.comments:before, .comment:before, .comment .text:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 65px; }\n\n.comments:before {\n  width: 3px;\n  left: 105px;\n  bottom: 0px;\n  background: rgba(0, 0, 0, 0.1); }\n\n.comment:before {\n  width: 9px;\n  height: 9px;\n  border: 3px solid #fff;\n  border-radius: 100px;\n  margin: 16px 0 0 -6px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(0, 0, 0, 0.1);\n  background: #ccc; }\n\n.comment:hover {\n  /*  cursor: url('../images/FB_CUR.cur');  See the result on http://lab.web-gate.fr/timeline/ */\n  cursor: cell;\n  /* This line is for the cursor */ }\n\n.comment:hover:before {\n  background: #3b5998; }\n\n.comment .text:before {\n  top: 18px;\n  left: 78px;\n  width: 9px;\n  height: 9px;\n  border-width: 0 0 1px 1px;\n  border-style: solid;\n  border-color: #e5e5e5;\n  background: #fff;\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  -o-transform: rotate(45deg); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/taller/seguimiento-taller/seguimiento-taller.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeguimientoTallerComponent; });
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

var SeguimientoTallerComponent = (function () {
    function SeguimientoTallerComponent() {
    }
    SeguimientoTallerComponent.prototype.ngOnInit = function () { };
    return SeguimientoTallerComponent;
}());
SeguimientoTallerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'seguimiento-taller',
        template: __webpack_require__("../../../../../src/app/pages/taller/seguimiento-taller/seguimiento-taller.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/taller/seguimiento-taller/seguimiento-taller.scss")]
    }),
    __metadata("design:paramtypes", [])
], SeguimientoTallerComponent);

//# sourceMappingURL=seguimiento-taller.js.map

/***/ }),

/***/ "../../../../../src/app/pages/taller/taller.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TallerModule", function() { return TallerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__seguimiento_taller_seguimiento_taller__ = __webpack_require__("../../../../../src/app/pages/taller/seguimiento-taller/seguimiento-taller.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__estimaciones_estimaciones_component__ = __webpack_require__("../../../../../src/app/pages/taller/estimaciones/estimaciones.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_directives_directives_module__ = __webpack_require__("../../../../../src/app/theme/directives/directives.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_pipes_pipes_module__ = __webpack_require__("../../../../../src/app/theme/pipes/pipes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__listado_listado_ingresos_component__ = __webpack_require__("../../../../../src/app/pages/taller/listado/listado-ingresos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__componentes_servicio_form_servicio_form_component__ = __webpack_require__("../../../../../src/app/componentes/servicio-form/servicio-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__componentes_producto_form_producto_form_component__ = __webpack_require__("../../../../../src/app/componentes/producto-form/producto-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_select_service__ = __webpack_require__("../../../../../src/app/services/select.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_endpoint_service__ = __webpack_require__("../../../../../src/app/services/endpoint.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_select__ = __webpack_require__("../../../../angular2-select/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__componentes_auto_form_auto_form_component__ = __webpack_require__("../../../../../src/app/componentes/auto-form/auto-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__nuevo_nuevo_component__ = __webpack_require__("../../../../../src/app/pages/taller/nuevo/nuevo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__componentes_detalle_form_detalle_form__ = __webpack_require__("../../../../../src/app/componentes/detalle-form/detalle-form.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var routes = [
    { path: 'nuevo', component: __WEBPACK_IMPORTED_MODULE_18__nuevo_nuevo_component__["a" /* IngresoTallerComponent */], data: { breadcrumb: 'Nuevo' } },
    { path: 'listado', component: __WEBPACK_IMPORTED_MODULE_5__listado_listado_ingresos_component__["a" /* ListadoIngresosComponent */], data: { breadcrumb: 'Listado' } },
    { path: 'estimaciones', component: __WEBPACK_IMPORTED_MODULE_1__estimaciones_estimaciones_component__["a" /* EstimacionesComponent */], data: { breadcrumb: 'Presupuestos' } },
    { path: 'seguimiento', component: __WEBPACK_IMPORTED_MODULE_0__seguimiento_taller_seguimiento_taller__["a" /* SeguimientoTallerComponent */], data: { breadcrumb: 'Seguimiento' } },
];
var TallerModule = (function () {
    function TallerModule() {
    }
    return TallerModule;
}());
TallerModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_14__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_15__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_17__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_17__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_16__angular_router__["e" /* RouterModule */].forChild(routes),
            __WEBPACK_IMPORTED_MODULE_12_angular2_select__["SelectModule"],
            __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__theme_pipes_pipes_module__["a" /* PipesModule */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_2__theme_directives_directives_module__["a" /* DirectivesModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_18__nuevo_nuevo_component__["a" /* IngresoTallerComponent */], __WEBPACK_IMPORTED_MODULE_13__componentes_auto_form_auto_form_component__["a" /* AutoFormComponent */], __WEBPACK_IMPORTED_MODULE_19__componentes_detalle_form_detalle_form__["a" /* DetalleFormComponent */], __WEBPACK_IMPORTED_MODULE_7__componentes_producto_form_producto_form_component__["a" /* ProductoFormComponent */], __WEBPACK_IMPORTED_MODULE_6__componentes_servicio_form_servicio_form_component__["a" /* ServicioFormComponent */], __WEBPACK_IMPORTED_MODULE_5__listado_listado_ingresos_component__["a" /* ListadoIngresosComponent */], __WEBPACK_IMPORTED_MODULE_1__estimaciones_estimaciones_component__["a" /* EstimacionesComponent */], __WEBPACK_IMPORTED_MODULE_0__seguimiento_taller_seguimiento_taller__["a" /* SeguimientoTallerComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_9__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_10__services_endpoint_service__["a" /* EndPointService */], __WEBPACK_IMPORTED_MODULE_8__services_select_service__["a" /* SelectService */]]
    })
], TallerModule);

//# sourceMappingURL=taller.module.js.map

/***/ })

});
//# sourceMappingURL=taller.module.chunk.js.map