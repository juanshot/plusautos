webpackJsonp(["productos.module"],{

/***/ "../../../../../src/app/pages/productos/productos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span class=\"text-uppercase\">Productos</span>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n                    <div class=\"w-200 pull-right bottom-15\">\n                            <div class=\"input-group input-group-sm\">\n                                <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\n                                <input class=\"form-control\" id=\"table-search-input\" [(ngModel)]=\"searchText\" type=\"text\" placeholder=\"Buscar por nombre...\">\n                            </div>\n                        </div>   \n\n\n               <div class=\"row\">\n                 \n                       \n               </div>\n               <div class=\"row\">\n\n                <form [formGroup]=\"productoForm\" class=\"row form-inline\">\n                        <div class=\"col-md-12\">\n                                <div class=\"row\">\n                                        <div class=\"form-group col-md-3 col-sm-6\" [ngClass]=\"{}\">\n                                                <input type=\"text\" formControlName=\"nombre\" class=\"form-control\" placeholder=\"Nombre\">\n                                            </div>\n                                            <div class=\"form-group col-md-2 col-sm-6\" [ngClass]=\"{}\">\n                                                <input type=\"number\" formControlName=\"cantidad\" class=\"form-control\" placeholder=\"Cantidad Inicial\">\n                                            </div>\n                                            <div class=\"form-group col-md-3 col-sm-6\" [ngClass]=\"{}\">\n                                                    <input type=\"number\" formControlName=\"precio_compra\" class=\"form-control\" placeholder=\"Precio Compra $\">\n                                                </div>\n                                           \n                                            <div class=\"form-group col-md-3 col-sm-3\" [ngClass]=\"{}\">\n                                                    \n                                                      <div class=\"input-group\">\n                                                          <div class=\"input-group-addon\">Unidad</div>\n                                                               <ng-select\n                                                                  formControlName=\"unidad_medida_id\"\n                                                                  [(options)]=\"unidades\"\n                                                                  [placeholder]=\"Unidad\"\n                                                                  [multiple]=\"false\"\n                                                              >\n                                                              </ng-select>\n                                                      </div>\n                                            </div>\n\n                                            <div class=\"col-md-1 col-sm-1\">\n                                                    <div class=\"form-group\" *ngIf=\"create\">\n                                                            <button [disabled]=\"!productoForm.valid\" (click)=\"saveproducto()\" type=\"submit\" class=\"btn btn-primary btn-sm\">Guardar</button>\n                                                        </div>\n                                                        \n                                                        <div class=\"form-group\" *ngIf=\"!create\">\n                                                            <button [disabled]=\"!productoForm.valid\" (click)=\"editProducto()\" type=\"submit\" class=\"btn btn-primary btn-sm\">Editar</button>\n                                                        </div>\n                                                </div> \n                                                \n                                            \n                                </div>\n\n                                <div class=\"row\">\n                                      \n                                       \n                                        \n\n                                </div>\n                          \n                           \n\n                        </div>\n              \n                       \n                   \n                      \n                </form>  \n\n               </div>\n\n               \n                <div class=\"table-responsive datatable\">\n                    <table class=\"table table-striped table-hover table-sm\" [mfData]=\"data  | SearchPipe : searchText\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\n                        <thead>\n                            <tr>\n                                                      \n                                <th><mfDefaultSorter by=\"nombre\">Nombre</mfDefaultSorter></th>\n                                <th><mfDefaultSorter by=\"precio\">Cantidad</mfDefaultSorter></th>\n                                <th><mfDefaultSorter by=\"precio\">Precio Compra</mfDefaultSorter></th>\n                                <th><mfDefaultSorter by=\"precio\">Unidad de Medida</mfDefaultSorter></th>\n                                <th></th>   \n                                <th>Acciones</th>   \n                            </tr>\n                        </thead>\n                        <tbody>                           \n                            <tr *ngFor=\"let producto of mf.data\">\n                                <td><strong>{{producto.nombre}}</strong></td>\n                                <td><span class=\"badge badge-success big-text\">{{producto.cantidad}}</span></td>\n                                <td><span class=\"badge badge-main big-text\">{{producto.precio_compra}}</span></td>\n                                <td>{{producto.unidad_medida.nombre}}</td>\n                                <td></td>\n                                <td><button (click)=\"assignProducto(producto)\" class=\"btn btn-warning btn-sm\"> <i class=\"fa fa-pencil\"></i> Editar</button><button class=\"btn btn-primary btn-sm\"> <i class=\"fa fa-shopping-cart\"></i>    Ver Compras</button></td>\n                                </tr>\n                                <tr *ngIf=\"(mf.data | SearchPipe : searchText).length === 0\">\n                                <td colspan=\"100\">\n                                    No hay Resultados\n                                </td>\n                            </tr>                          \n                        </tbody>\n                        <tfoot>\n                            <tr>\n                                <td colspan=\"12\">\n                                    <mfBootstrapPaginator [rowsOnPageSet]=\"[10, 25, 50, 100]\"></mfBootstrapPaginator>\n                                </td>\n                            </tr>\n                        </tfoot>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n   \n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/productos/productos.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#2E0502\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#640D05\",\"gray\":\"#555\",\"gray-light\":\"#ccc\"}';\n  display: none; }\n\n.user-img {\n  width: 50px;\n  height: 50px; }\n\n.datatable .progress {\n  background-color: #ccc; }\n\n.datatable .pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border-radius: 0.25rem; }\n  .datatable .pagination li {\n    display: inline; }\n    .datatable .pagination li a {\n      position: relative;\n      float: left;\n      padding: 0.275rem 0.75rem;\n      font-size: 0.875rem;\n      margin-left: -1px;\n      color: #024a88;\n      text-decoration: none;\n      background-color: #fff;\n      border: 1px solid #ccc; }\n      .datatable .pagination li a:hover {\n        color: #014c8c;\n        background-color: #eceeef;\n        border-color: #ddd; }\n    .datatable .pagination li:first-child a {\n      margin-left: 0;\n      border-bottom-left-radius: 0.2rem;\n      border-top-left-radius: 0.2rem; }\n    .datatable .pagination li:last-child a {\n      border-bottom-right-radius: 0.2rem;\n      border-top-right-radius: 0.2rem; }\n    .datatable .pagination li.active a {\n      z-index: 2;\n      color: #fff;\n      cursor: default;\n      background-color: #024a88;\n      border-color: #024a88; }\n    .datatable .pagination li.disabled a {\n      color: #ccc;\n      pointer-events: none;\n      cursor: not-allowed;\n      background-color: #fff;\n      border-color: #ccc; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/productos/productos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_select_service__ = __webpack_require__("../../../../../src/app/services/select.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__productos_service__ = __webpack_require__("../../../../../src/app/pages/productos/productos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_endpoint_service__ = __webpack_require__("../../../../../src/app/services/endpoint.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductosComponent = (function () {
    function ProductosComponent(_productosService, fb, ep, select) {
        var _this = this;
        this._productosService = _productosService;
        this.fb = fb;
        this.ep = ep;
        this.select = select;
        this.create = true;
        this.unidades = [];
        this.productoId = 0;
        this.productoForm = this.fb.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required])],
            cantidad: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required])],
            precio_compra: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required])],
            unidad_medida_id: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required])]
        });
        _productosService.getAll().then(function (res) {
            console.log("en component", res);
            _this.data = res;
        });
        this.select.loadUnidadMedida().then(function (res) {
            _this.unidades = res;
        });
    }
    ProductosComponent.prototype.saveproducto = function () {
        var _this = this;
        this._productosService.saveproducto(this.productoForm.value).then(function (result) {
            _this._productosService.getAll().then(function (res) {
                console.log("en component", res);
                _this.data = res;
                _this._productosService.getAll().then(function (res) {
                    console.log("en component", res);
                    _this.data = res;
                });
                _this.productoForm.setValue({ nombre: '', cantidad: '', unidad_medida_id: '', precio_compra: '' });
            });
        });
    };
    ProductosComponent.prototype.editProducto = function () {
        var _this = this;
        this._productosService.editProducto(this.productoId, this.productoForm.value).then(function (result) {
            _this._productosService.getAll().then(function (res) {
                console.log("en component", res);
                _this.data = res;
                _this._productosService.getAll().then(function (res) {
                    console.log("en component", res);
                    _this.data = res;
                });
                _this.productoForm.setValue({ nombre: '', cantidad: '', unidad_medida_id: '', precio_compra: '' });
                _this.create = true;
            });
        });
    };
    ProductosComponent.prototype.assignProducto = function (producto) {
        this.create = false;
        this.productoForm.setValue({ nombre: producto.nombre, cantidad: producto.cantidad, unidad_medida_id: producto.unidad_medida_id.toString(), precio_compra: producto.precio_compra });
        this.productoForm.controls['unidad_medida_id'].setValue('1');
        this.productoId = producto.id;
    };
    return ProductosComponent;
}());
ProductosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'productos-component',
        encapsulation: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__("../../../../../src/app/pages/productos/productos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/productos/productos.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__productos_service__["a" /* ProductosService */], __WEBPACK_IMPORTED_MODULE_0__services_select_service__["a" /* SelectService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__productos_service__["a" /* ProductosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__productos_service__["a" /* ProductosService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_endpoint_service__["a" /* EndPointService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_endpoint_service__["a" /* EndPointService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__services_select_service__["a" /* SelectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_select_service__["a" /* SelectService */]) === "function" && _d || Object])
], ProductosComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=productos.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/productos/productos.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosModule", function() { return ProductosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_select__ = __webpack_require__("../../../../angular2-select/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__productos_component__ = __webpack_require__("../../../../../src/app/pages/productos/productos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_endpoint_service__ = __webpack_require__("../../../../../src/app/services/endpoint.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theme_directives_directives_module__ = __webpack_require__("../../../../../src/app/theme/directives/directives.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__theme_pipes_pipes_module__ = __webpack_require__("../../../../../src/app/theme/pipes/pipes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'listado', component: __WEBPACK_IMPORTED_MODULE_1__productos_component__["a" /* ProductosComponent */], data: { breadcrumb: 'Listado' } }
];
var ProductosModule = (function () {
    function ProductosModule() {
    }
    return ProductosModule;
}());
ProductosModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_7_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_8__theme_pipes_pipes_module__["a" /* PipesModule */],
            __WEBPACK_IMPORTED_MODULE_5__theme_directives_directives_module__["a" /* DirectivesModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_10__angular_router__["e" /* RouterModule */].forChild(routes),
            __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0_angular2_select__["SelectModule"]
        ],
        exports: [],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__productos_component__["a" /* ProductosComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_endpoint_service__["a" /* EndPointService */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]],
    })
], ProductosModule);

//# sourceMappingURL=productos.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/productos/productos.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosService; });
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


var ProductosService = (function () {
    function ProductosService(ep) {
        this.ep = ep;
    }
    ProductosService.prototype.getAll = function () {
        return this.ep.getProductos().then(function (response) {
            return response.productos;
        }, function (err) {
            console.log('error:', err);
        });
    };
    ProductosService.prototype.saveproducto = function (producto) {
        return this.ep.saveProducto(producto).then(function (result) {
            return result;
        }, function (error) {
            return error;
        });
    };
    ProductosService.prototype.editProducto = function (id, request) {
        return this.ep.editProducto(id, request).then(function (result) {
            return result;
        }, function (error) {
            return error;
        });
    };
    return ProductosService;
}());
ProductosService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_endpoint_service__["a" /* EndPointService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_endpoint_service__["a" /* EndPointService */]) === "function" && _a || Object])
], ProductosService);

var _a;
//# sourceMappingURL=productos.service.js.map

/***/ })

});
//# sourceMappingURL=productos.module.chunk.js.map