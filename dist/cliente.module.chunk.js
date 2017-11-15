webpackJsonp(["cliente.module"],{

/***/ "../../../../../src/app/pages/clientes/cliente.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span class=\"text-uppercase\">cliente</span>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n\n\n                <div class=\"w-200 pull-right bottom-15\">\n                    <div class=\"input-group input-group-sm\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\n                        <input class=\"form-control\" id=\"table-search-input\" [(ngModel)]=\"searchText\" type=\"text\" placeholder=\"Buscar por nombre...\">\n                    </div>\n                </div> \n                <div class=\"w-200 pull-left bottom-15\">\n                       <button data-toggle=\"modal\" data-target=\"#nuevo-cliente\" class=\"btn btn-outline generic btn-sm\">\n                           <i class=\"fa fa-plus-circle btn-sm \"> </i>\n                           Nuevo\n                       </button>\n                    </div> \n                <div class=\"table-responsive datatable\">\n                    <table class=\"table table-striped table-hover table-sm\" [mfData]=\"data  | SearchPipe : searchText\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\n                        <thead>\n                            <tr>\n                                <th>Nombre</th>   \n                                <th><mfDefaultSorter by=\"apellido\">Apellido</mfDefaultSorter></th>                           \n                                <th><mfDefaultSorter by=\"cedula\">Cedula</mfDefaultSorter></th>\n                                <th><mfDefaultSorter by=\"telefono\">Telefono</mfDefaultSorter></th>\n                                <th><mfDefaultSorter by=\"celular\">Celular</mfDefaultSorter></th>\n                                <th><mfDefaultSorter by=\"direccion\">Direccion</mfDefaultSorter></th>\n                           \n                                <th>Acciones</th>      \n                            </tr>\n                        </thead>\n                        <tbody>                           \n                            <tr *ngFor=\"let cliente of mf.data\">\n                               \n                                <td><strong>{{cliente.nombre}}</strong></td>\n                                <td>\n                                   <strong>{{cliente.apellido}} </strong>\n                                </td>\n                                <td>\n                                    <strong>{{cliente.cedula}} </strong>\n                                 </td>\n                                 <td>\n                                    <strong>{{cliente.telefono}} </strong>\n                                 </td>\n                                 <td>\n                                        <strong>{{cliente.celular}} </strong>\n                                </td>\n\n                                <td>\n                                        <strong>{{cliente.direccion}} </strong>\n                                </td>\n                          \n                        \n\n                                <td><button data-toggle=\"modal\" data-target=\"#talleres-modal\" (click)=\"getTalleresCliente(cliente)\"  class=\"btn btn-warning btn-sm\">Ver historial de Taller</button><button data-toggle=\"modal\" data-target=\"#autos-modal\" (click)=\"getAutosCliente(cliente.id)\" class=\"btn btn-success btn-sm\">Ver Autos</button></td>\n                                </tr>\n                                <tr *ngIf=\"(mf.data | SearchPipe : searchText).length === 0\">\n                                <td colspan=\"100\">\n                                    No hay Resultados\n                                </td>\n                            </tr>                          \n                        </tbody>\n                        <tfoot>\n                            <tr>\n                                <td colspan=\"12\">\n                                    <mfBootstrapPaginator [rowsOnPageSet]=\"[10, 25, 50, 100]\"></mfBootstrapPaginator>\n                                </td>\n                            </tr>\n                        </tfoot>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal fade\" id=\"nuevo-cliente\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-label\" style=\"display: none;\">\n            <div class=\"modal-dialog modal-lg\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header generic \">\n                        <h4 class=\"modal-title\" id=\"modal-label\"><i class=\"fa fa-user-plus\"></i> Nuevo cliente</h4>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n                    </div>\n                    <div class=\"modal-body\">\n                            <div class=\"clearfix\">\n                                    <ul class=\"nav nav-tabs top pull-left w-100p\">\n                                        <li class=\"nav-item\">\n                                            <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#ta\">Datos</a>\n                                        </li>\n                                      \n                                                           \n                                    </ul>\n                                </div>\n                                <div class=\"tab-content top\">\n                                        <div class=\"tab-pane active\" id=\"ta\">\n                                                <form [formGroup]=\"clienteForm\">\n                                                        <div class=\"row\">\n                                                                <div class=\"col-md-6\" >\n                                                                        <div [ngClass]=\"{'has-success':clienteForm.get('nombre').value != '' }\">\n                                                                                <div class=\"form-group\">\n                                                                                        <label for=\"\">Nombre:</label>\n                                                                                        <input [ngClass]=\"{'form-control-success':clienteForm.get('nombre').value != '' }\" formControlName=\"nombre\" type=\"text\" class=\"form-control\">\n                                                                                </div>\n    \n                                                                        </div>\n                                                                        <div [ngClass]=\"{'has-success':clienteForm.get('apellido').value != '' }\">\n                                                                                <div class=\"form-group\">\n                                                                                        <label for=\"\">Apellido:</label>\n                                                                                        <input [ngClass]=\"{'form-control-success':clienteForm.get('apellido').value != '' }\" formControlName=\"apellido\" type=\"text\" class=\"form-control\">\n                                            \n                                                                                </div>\n    \n                                                                        </div>\n                                                                       \n                                                                       \n                                                                        <div [ngClass]=\"{'has-danger':clienteForm.get('cedula').value != '' && clienteForm.get('cedula').hasError('invalidCedula'),\n                                                                    \n                                                                                          'has-success': clienteForm.get('cedula').value != '' && !clienteForm.get('cedula').hasError('invalidCedula')              }\">\n                                                                                <div class=\"form-group\">\n                                                                                        <label for=\"\">Cedula:</label>\n                                                                                        <input maxlength=\"10\" formControlName=\"cedula\" type=\"text\" [ngClass]=\"{'form-control-danger':clienteForm.get('cedula').value != '' && clienteForm.get('cedula').hasError('invalidCedula'),\n                                                                                    \n                                                                                                                                                                'form-control-success':clienteForm.get('cedula').value != '' && !clienteForm.get('cedula').hasError('invalidCedula')}\" class=\"form-control\">\n                                                                                </div>\n    \n                                                                        </div>\n                                                                    \n                                                                \n                                                                   \n                                                                    </div>\n                                                               \n                                                                <div class=\"col-md-6\"  >\n                                                                       \n                                                                        <div [ngClass]=\"{'has-danger' : (clienteForm.get('email').value != '' && clienteForm.get('email').hasError('required')) || (clienteForm.get('email').value != '' && clienteForm.get('email').hasError('invalidEmail')), \n                                                                        'has-success' : !clienteForm.get('email').hasError('required') && clienteForm.get('email').value !='' && !clienteForm.get('email').hasError('invalidEmail')}\">\n                                                                                <label class=\"form-control-label\">Email</label>\n                                                                                <div class=\"input-group\">\n                                                                                    <div class=\"input-group-addon\"><i class=\"fa fa-envelope\"></i></div>\n                                                                                    <input formControlName=\"email\" class=\"form-control\" [ngClass]=\"{'form-control-danger' : (clienteForm.get('email').value != '' && clienteForm.get('email').hasError('required')) || (clienteForm.get('email').value != '' && clienteForm.get('email').hasError('invalidEmail')), \n                                                                                                                                                    'form-control-success' :  !clienteForm.get('email').hasError('required') && !clienteForm.get('email').hasError('invalidEmail')}\" type=\"text\">                      \n                                                                                </div>\n                                                                                <span class=\"help-block text-danger\" *ngIf=\"clienteForm.get('email').value != '' && clienteForm.get('email').hasError('required')\">Email es requerido</span>                              \n                                                                                <span class=\"help-block text-danger\" *ngIf=\"clienteForm.get('email').value != '' && clienteForm.get('email').hasError('invalidEmail')\">Email Invalido</span>\n                                                                            </div>\n\n                                                                            <div [ngClass]=\"{'has-success':clienteForm.get('telefono').value != '' }\">\n                                                                                    <div class=\"form-group\">\n                                                                                            <label for=\"\">Telefono Casa:</label>\n                                                                                            <div class=\"input-group\">\n                                                                                                <div class=\"input-group-addon\"> <i class=\"fa fa-phone\"></i> </div>\n                                                                                                <input [ngClass]=\"{'form-control-success':clienteForm.get('telefono').value != '' }\" formControlName=\"telefono\" type=\"text\" class=\"form-control\">\n                                                                                            </div>\n                                                                                            \n                                                \n                                                                                    </div>\n        \n                                                                            </div>\n                                                                            <div [ngClass]=\"{'has-success':clienteForm.get('celular').value != '' }\">\n                                                                                    <div class=\"form-group\">\n                                                                                            <label for=\"\">Telefono Movil:</label>\n                                                                                        <div class=\"input-group\">\n                                                                                                <div class=\"input-group-addon\"><i class=\"fa fa-phone\"></i></div>\n                                                                                                <input [ngClass]=\"{'form-control-success':clienteForm.get('celular').value != '' }\" formControlName=\"celular\" type=\"text\" class=\"form-control\">\n                                                                                        </div>\n                                                                                            \n                                                                                           \n                                                \n                                                                                    </div>\n        \n                                                                            </div>\n                                                                            <div [ngClass]=\"{'has-success':clienteForm.get('direccion').value != '' }\">\n                                                                                    <div class=\"form-group\">\n                                                                                            <label for=\"\">Direccion:</label>\n                                                                                            <textarea  [ngClass]=\"{'form-control-success':clienteForm.get('direccion').value != '' }\" formControlName=\"direccion\"  class=\"form-control\"> </textarea>\n                                                \n                                                                                    </div>\n        \n                                                                            </div>\n                                                                     \n                                                                     \n                                                                      \n                                                                    </div>\n                                                            </div>\n                                                       \n                                                         \n                                                      </form>\n                                         \n                                        </div>\n                               \n \n                                    </div>  \n             \n                  \n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" [disabled]=\"!clienteForm.valid\" (click)=\"saveCliente()\" class=\"btn btn-primary\" data-dismiss=\"modal\">Guardar</button>\n                        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n\n        <div class=\"modal fade\" id=\"autos-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-label\" style=\"display: none;\">\n                <div class=\"modal-dialog modal-lg\" role=\"document\">\n                    <div class=\"modal-content\">\n                        <div class=\"modal-header generic \">\n                            <h4 class=\"modal-title\" id=\"modal-label\"><i class=\"fa fa-car\"></i> Autos de Cliente</h4>\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n                        </div>\n                        <div class=\"modal-body\">\n                                <div class=\"clearfix\">\n                                        <ul class=\"nav nav-tabs top pull-left w-100p\">\n                                            <li class=\"nav-item\">\n                                                <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#ta\">Autos</a>\n                                            </li>\n                                          \n                                                               \n                                        </ul>\n                                    </div>\n                                    <div class=\"tab-content top\">\n                                            <div class=\"tab-pane active\" id=\"ta\">\n                                                <table class=\"table table-striped\">\n                                                    <thead>\n                                                        <tr>\n                                                            <th>Placa</th>\n                                                            <th>Marca</th>\n                                                            <th>Modelo</th>\n                                                            <th>Ano</th>\n                                                            <th>Kilometraje</th>\n                                                        \n                                                        </tr>\n                                                    </thead>\n                                                    <tbody>\n                                                        <tr *ngFor=\"let auto of autos\">\n                                                            <th scope=\"row\">{{auto.placa}}</th>\n                                                            <td>{{auto.marca}}</td>\n                                                            <td>{{auto.modelo}}</td>\n                                                            <td>{{auto.ano}}</td>\n                                                            <td>{{auto.kilometros}}</td>\n                                                           \n                                                        </tr>\n                                                      \n                                                    </tbody>\n                                                </table>\n                                             \n                                            </div>\n                                   \n     \n                                        </div>  \n                 \n                      \n                        </div>\n                        <div class=\"modal-footer\">\n                           \n                            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"modal fade\" id=\"talleres-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-label\" style=\"display: none;\">\n                <div class=\"modal-dialog modal-lg\" role=\"document\">\n                    <div class=\"modal-content\">\n                        <div class=\"modal-header generic \">\n                            <h4 class=\"modal-title\" id=\"modal-label\"><i class=\"fa fa-calendar\"></i> Historial de Ingreso a Taller</h4>\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n                        </div>\n                        <div class=\"modal-body\">\n                                <div class=\"clearfix\">\n                                        <ul class=\"nav nav-tabs top pull-left w-100p\">\n                                            <li class=\"nav-item\">\n                                                <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#ta\">Historial</a>\n                                            </li>\n                                          \n                                                               \n                                        </ul>\n                                    </div>\n                                    <div class=\"tab-content top\">\n                                            <div class=\"tab-pane active\" id=\"ta\">\n                                                    <div *ngFor=\"let autoTaller of talleres\" class=\"card\">\n                                                            <div class=\"card-header\">\n                                                                <i class=\"fa fa-car\"></i> {{autoTaller.marca}} {{autoTaller.modelo}} : {{autoTaller.placa}}  \n                                                            </div>\n                                                            <div class=\"card-block\">\n                                                                    <table class=\"table table-striped\">\n                                                                            <thead>\n                                                                                <tr>\n                                                                                    <th>Fecha Entrada</th>\n                                                                                    <th>Estatus</th>\n                                                                                    <th>Costo de Servicio (Taller)</th>\n                                                                                    <th>Fecha Salida</th>\n                                                                                    \n                                                                                \n                                                                                </tr>\n                                                                            </thead>\n                                                                            <tbody>\n                                                                                <tr *ngFor=\"let taller of autoTaller.ingreso_tallers\">\n                                                                                    <th scope=\"row\">{{taller.fecha_ingreso}}</th>\n                                                                                    <td>Estatus</td>\n                                                                                    <td>{{taller.costo_total}}</td>\n                                                                                    <td>{{taller.fecha_salida}}</td>\n                                                                                 \n                                                                                   \n                                                                                </tr>\n                                                                              \n                                                                            </tbody>\n                                                                        </table>\n                                                            </div>\n                                                           \n                                                        </div>\n                                               \n                                             \n                                            </div>\n                                   \n     \n                                        </div>  \n                 \n                      \n                        </div>\n                        <div class=\"modal-footer\">\n                           \n                            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/clientes/cliente.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#2E0502\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#640D05\",\"gray\":\"#555\",\"gray-light\":\"#ccc\"}';\n  display: none; }\n\n.user-img {\n  width: 50px;\n  height: 50px; }\n\n.datatable .progress {\n  background-color: #ccc; }\n\n.datatable .pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border-radius: 0.25rem; }\n  .datatable .pagination li {\n    display: inline; }\n    .datatable .pagination li a {\n      position: relative;\n      float: left;\n      padding: 0.275rem 0.75rem;\n      font-size: 0.875rem;\n      margin-left: -1px;\n      color: #024a88;\n      text-decoration: none;\n      background-color: #fff;\n      border: 1px solid #ccc; }\n      .datatable .pagination li a:hover {\n        color: #014c8c;\n        background-color: #eceeef;\n        border-color: #ddd; }\n    .datatable .pagination li:first-child a {\n      margin-left: 0;\n      border-bottom-left-radius: 0.2rem;\n      border-top-left-radius: 0.2rem; }\n    .datatable .pagination li:last-child a {\n      border-bottom-right-radius: 0.2rem;\n      border-top-right-radius: 0.2rem; }\n    .datatable .pagination li.active a {\n      z-index: 2;\n      color: #fff;\n      cursor: default;\n      background-color: #024a88;\n      border-color: #024a88; }\n    .datatable .pagination li.disabled a {\n      color: #ccc;\n      pointer-events: none;\n      cursor: not-allowed;\n      background-color: #fff;\n      border-color: #ccc; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/clientes/cliente.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClienteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_select_service__ = __webpack_require__("../../../../../src/app/services/select.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cliente_service__ = __webpack_require__("../../../../../src/app/pages/clientes/cliente.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validation_service__ = __webpack_require__("../../../../../src/app/services/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_endpoint_service__ = __webpack_require__("../../../../../src/app/services/endpoint.service.ts");
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






var ClienteComponent = (function () {
    function ClienteComponent(_dynamicTablesService, fb, ep, selectService) {
        var _this = this;
        this._dynamicTablesService = _dynamicTablesService;
        this.fb = fb;
        this.ep = ep;
        this.selectService = selectService;
        this.clientes = [];
        this.autos = [];
        this.talleres = [];
        this.clienteForm = this.fb.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            apellido: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            direccion: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            celular: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            telefono: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            cedula: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            email: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__services_validation_service__["a" /* ValidationService */].emailValidator])]
        }, { validator: __WEBPACK_IMPORTED_MODULE_2__services_validation_service__["a" /* ValidationService */].validacionCedula('cedula') });
        _dynamicTablesService.getAll().then(function (res) {
            console.log("en component", res);
            _this.data = res;
        });
        this.selectService.loadClientes().then(function (res) {
            _this.clientes = res;
            console.log('clientes', _this.clientes);
        });
    }
    ClienteComponent.prototype.saveCliente = function () {
        var _this = this;
        this._dynamicTablesService.saveCliente(this.clienteForm.value).then(function (result) {
            _this._dynamicTablesService.getAll().then(function (res) {
                console.log("en component", res);
                _this.data = res;
                _this.clienteForm.setValue({ nombre: '', apellido: '', cedula: '', direccion: '', celular: '', telefono: '', email: '' });
            });
        });
    };
    ClienteComponent.prototype.getAutosCliente = function (cliente) {
        var _this = this;
        this._dynamicTablesService.getAutosCliente(cliente).then(function (result) {
            _this.autos = result;
            console.log(_this.autos);
        });
    };
    ClienteComponent.prototype.getTalleresCliente = function (cliente) {
        var _this = this;
        this._dynamicTablesService.getTalleresCliente(cliente.id).then(function (result) {
            _this.talleres = result;
            console.log(_this.talleres);
        });
    };
    return ClienteComponent;
}());
ClienteComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'cliente-component',
        encapsulation: __WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__("../../../../../src/app/pages/clientes/cliente.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/clientes/cliente.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__cliente_service__["a" /* ClienteService */], __WEBPACK_IMPORTED_MODULE_0__services_select_service__["a" /* SelectService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cliente_service__["a" /* ClienteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cliente_service__["a" /* ClienteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_endpoint_service__["a" /* EndPointService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_endpoint_service__["a" /* EndPointService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__services_select_service__["a" /* SelectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_select_service__["a" /* SelectService */]) === "function" && _d || Object])
], ClienteComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=cliente.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/clientes/cliente.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesModule", function() { return ClientesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_select__ = __webpack_require__("../../../../angular2-select/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cliente_component__ = __webpack_require__("../../../../../src/app/pages/clientes/cliente.component.ts");
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
    { path: 'listado', component: __WEBPACK_IMPORTED_MODULE_1__cliente_component__["a" /* ClienteComponent */], data: { breadcrumb: 'Listado' } }
];
var ClientesModule = (function () {
    function ClientesModule() {
    }
    return ClientesModule;
}());
ClientesModule = __decorate([
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
        declarations: [__WEBPACK_IMPORTED_MODULE_1__cliente_component__["a" /* ClienteComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_endpoint_service__["a" /* EndPointService */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]],
    })
], ClientesModule);

//# sourceMappingURL=cliente.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/clientes/cliente.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClienteService; });
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


var ClienteService = (function () {
    function ClienteService(ep) {
        this.ep = ep;
    }
    ClienteService.prototype.getAll = function () {
        return this.ep.getClientes().then(function (response) {
            return response.clientes;
        }, function (err) {
            console.log('error:', err);
        });
    };
    ClienteService.prototype.saveCliente = function (cliente) {
        return this.ep.saveCliente(cliente).then(function (result) {
            return result;
        }, function (error) {
            return error;
        });
    };
    ClienteService.prototype.getAutosCliente = function (cliente) {
        return this.ep.getAutosCliente(cliente).then(function (result) {
            return result.autos;
        }, function (error) {
            return error;
        });
    };
    ClienteService.prototype.getTalleresCliente = function (cliente) {
        return this.ep.getTalleresCliente(cliente).then(function (result) {
            return result.talleres;
        }, function (error) {
            return error;
        });
    };
    return ClienteService;
}());
ClienteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_endpoint_service__["a" /* EndPointService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_endpoint_service__["a" /* EndPointService */]) === "function" && _a || Object])
], ClienteService);

var _a;
//# sourceMappingURL=cliente.service.js.map

/***/ })

});
//# sourceMappingURL=cliente.module.chunk.js.map