webpackJsonp(["tables.module"],{

/***/ "../../../../../src/app/pages/tables/basic-tables/basic-tables.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    \n    <div class=\"col-xl-6 col-lg-6 col-12 bottom-30\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>BORDERED TABLE</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n\n               <table class=\"table table-bordered\">\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>First Name</th>\n                            <th>Last Name</th>\n                            <th>Username</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <th scope=\"row\">1</th>\n                            <td>Mark</td>\n                            <td>Otto</td>\n                            <td>@mdo</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">2</th>\n                            <td>Mark</td>\n                            <td>Otto</td>\n                            <td>@TwBootstrap</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">3</th>\n                            <td>Jacob</td>\n                            <td>Thornton</td>\n                            <td>@fat</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">4</th>\n                            <td colspan=\"2\">Larry the Bird</td>\n                            <td>@twitter</td>\n                        </tr>\n                    </tbody>\n                </table>\n\n            </div>\n        </div>\n    </div>\n\n     <div class=\"col-xl-6 col-lg-6 col-12 bottom-30\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>HOVER TABLE</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n\n                <table class=\"table table-hover\">\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>First Name</th>\n                            <th>Last Name</th>\n                            <th>Username</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <th scope=\"row\">1</th>\n                            <td>Mark</td>\n                            <td>Otto</td>\n                            <td>@mdo</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">2</th>\n                            <td>Jacob</td>\n                            <td>Thornton</td>\n                            <td>@fat</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">3</th>\n                            <td colspan=\"2\">Larry the Bird</td>\n                            <td>@twitter</td>\n                        </tr>\n                        <tr>\n                            <td scope=\"row\">4</td>\n                            <td>Steve</td>\n                            <td>Urkel</td>\n                            <td>@steve</td>\n                        </tr>\n                    </tbody>\n                </table>\n\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<div class=\"row bottom-30\">\n    <div class=\"col\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>RESPONSIVE TABLE</span>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\"> \n\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th>#</th>\n                                <th>First Name</th>\n                                <th>Last Name</th>\n                                <th>Username</th>\n                                <th>Age</th>\n                                <th>City</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>1</td>\n                                <td>Mark</td>\n                                <td>Otto</td>\n                                <td>@mdo</td>\n                                <td>20</td>\n                                <td>Cityname</td>\n                            </tr>\n                            <tr>\n                                <td>2</td>\n                                <td>Jacob</td>\n                                <td>Thornton</td>\n                                <td>@fat</td>\n                                <td>20</td>\n                                <td>Cityname</td>\n                            </tr>\n                            <tr>\n                                <td>3</td>\n                                <td>Larry</td>\n                                <td>the Bird</td>\n                                <td>@twitter</td>\n                                <td>20</td>\n                                <td>Cityname</td>\n                            </tr>\n                            <tr>\n                                <td>4</td>\n                                <td>Steve</td>\n                                <td>Mac Queen</td>\n                                <td>@steve</td>\n                                <td>20</td>\n                                <td>Cityname</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    \n    <div class=\"col-xl-6 col-lg-6 col-12 bottom-30\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>STRIPED ROWS</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n\n                <table class=\"table table-striped\">\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>First Name</th>\n                            <th>Last Name</th>\n                            <th>Username</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <th scope=\"row\">1</th>\n                            <td>Mark</td>\n                            <td>Otto</td>\n                            <td>@mdo</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">2</th>\n                            <td>Jacob</td>\n                            <td>Thornton</td>\n                            <td>@fat</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">3</th>\n                            <td>Larry</td>\n                            <td>the Bird</td>\n                            <td>@twitter</td>\n                        </tr>\n                        <tr>\n                            <td scope=\"row\">4</td>\n                            <td>Steve</td>\n                            <td>Urkel</td>\n                            <td>@steve</td>\n                        </tr>\n                        <tr>\n                            <td scope=\"row\">5</td>\n                            <td>Jeremy</td>\n                            <td>Cutler</td>\n                            <td>@jeremy</td>\n                        </tr>\n                    </tbody>\n                </table>\n\n            </div>\n        </div>\n    </div>\n\n     <div class=\"col-xl-6 col-lg-6 col-12 bottom-30\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>REFLOW TABLE</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n\n                <table class=\"table table-reflow\">\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>Table heading</th>\n                            <th>Table heading</th>\n                            <th>Table heading</th>\n                            <th>Table heading</th>\n                            <th>Table heading</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <th scope=\"row\">1</th>\n                            <td>Table cell</td>\n                            <td>Table cell</td>\n                            <td>Table cell</td>\n                            <td>Table cell</td>\n                            <td>Table cell</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">2</th>\n                            <td>Table cell</td>\n                            <td>Table cell</td>\n                            <td>Table cell</td>\n                            <td>Table cell</td>\n                            <td>Table cell</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">3</th>\n                            <td>Table cell</td>\n                            <td>Table cell</td>\n                            <td>Table cell</td>\n                            <td>Table cell</td>\n                            <td>Table cell</td>\n                        </tr>                      \n                    </tbody>\n                </table>\n\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<div class=\"row\">\n    \n    <div class=\"col-xl-6 col-lg-6 col-12 bottom-30\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>CONTEXTUAL ROWS</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n\n                <table class=\"table\">\n                   <thead>\n                       <tr>\n                           <th>#</th>\n                           <th>Column heading</th>\n                           <th>Column heading</th>\n                           <th>Column heading</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr class=\"table-active\">\n                            <td>1</td>\n                            <td>Column content</td>\n                            <td>Column content</td>\n                            <td>Column content</td>\n                        </tr>\n                        <tr class=\"table-success\">\n                            <td>2</td>\n                            <td>Column content</td>\n                            <td>Column content</td>\n                            <td>Column content</td>\n                        </tr>\n                        <tr class=\"table-warning\">\n                            <td>3</td>\n                            <td>Column content</td>\n                            <td>Column content</td>\n                            <td>Column content</td>\n                        </tr>\n                        <tr class=\"table-danger\">\n                            <td>4</td>\n                            <td>Column content</td>\n                            <td>Column content</td>\n                            <td>Column content</td>\n                        </tr>\n                        <tr class=\"table-info\">\n                            <td>5</td>\n                            <td>Column content</td>\n                            <td>Column content</td>\n                            <td>Column content</td>\n                        </tr>\n                    </tbody>\n                </table>              \n\n            </div>\n        </div>\n    </div>\n\n     <div class=\"col-xl-6 col-lg-6 col-12 bottom-30\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>CONTEXTUAL COLUMNS</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n\n               <table class=\"table\">\n                   <thead>\n                       <tr>\n                           <th>#</th>\n                           <th>Heading</th>\n                           <th>Heading</th>\n                           <th>Heading</th>\n                           <th>Heading</th>\n                           <th>Heading</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>1</td>\n                            <td class=\"table-active\">Content</td>\n                            <td class=\"table-success\">Content</td>\n                            <td class=\"table-warning\">Content</td>\n                            <td class=\"table-danger\">Content</td>\n                            <td class=\"table-info\">Content</td>\n                        </tr>\n                        <tr>\n                            <td>2</td>\n                            <td class=\"table-active\">Content</td>\n                            <td class=\"table-success\">Content</td>\n                            <td class=\"table-warning\">Content</td>\n                            <td class=\"table-danger\">Content</td>\n                            <td class=\"table-info\">Content</td>\n                        </tr>\n                        <tr>\n                            <td>3</td>\n                            <td class=\"table-active\">Content</td>\n                            <td class=\"table-success\">Content</td>\n                            <td class=\"table-warning\">Content</td>\n                            <td class=\"table-danger\">Content</td>\n                            <td class=\"table-info\">Content</td>\n                        </tr>\n                        <tr>\n                            <td>4</td>\n                            <td class=\"table-active\">Content</td>\n                            <td class=\"table-success\">Content</td>\n                            <td class=\"table-warning\">Content</td>\n                            <td class=\"table-danger\">Content</td>\n                            <td class=\"table-info\">Content</td>\n                        </tr>\n                        <tr>\n                            <td>5</td>\n                            <td class=\"table-active\">Content</td>\n                            <td class=\"table-success\">Content</td>\n                            <td class=\"table-warning\">Content</td>\n                            <td class=\"table-danger\">Content</td>\n                            <td class=\"table-info\">Content</td>\n                        </tr>\n                    </tbody>\n                </table>\n\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<div class=\"row\">\n    \n    <div class=\"col-xl-6 col-lg-6 col-12 bottom-30\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>SMALL TABLE</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n\n                <table class=\"table table-sm\">\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>First Name</th>\n                            <th>Last Name</th>\n                            <th>Username</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <th scope=\"row\">1</th>\n                            <td>Mark</td>\n                            <td>Otto</td>\n                            <td>@mdo</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">2</th>\n                            <td>Jacob</td>\n                            <td>Thornton</td>\n                            <td>@fat</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">3</th>\n                            <td colspan=\"2\">Larry the Bird</td>\n                            <td>@twitter</td>\n                        </tr>\n                    </tbody>\n                </table>\n                \n            </div>\n        </div>\n    </div>\n\n     <div class=\"col-xl-6 col-lg-6 col-12 bottom-30\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>INVERSE TABLE</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n\n                <table class=\"table table-sm table-inverse\">\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>First Name</th>\n                            <th>Last Name</th>\n                            <th>Username</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <th scope=\"row\">1</th>\n                            <td>Mark</td>\n                            <td>Otto</td>\n                            <td>@mdo</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">2</th>\n                            <td>Jacob</td>\n                            <td>Thornton</td>\n                            <td>@fat</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">3</th>\n                            <td colspan=\"2\">Larry the Bird</td>\n                            <td>@twitter</td>\n                        </tr>\n                    </tbody>\n                </table>\n\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/tables/basic-tables/basic-tables.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicTablesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BasicTablesComponent = (function () {
    function BasicTablesComponent() {
    }
    return BasicTablesComponent;
}());
BasicTablesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'az-basic-tables',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__("../../../../../src/app/pages/tables/basic-tables/basic-tables.component.html")
    })
], BasicTablesComponent);

//# sourceMappingURL=basic-tables.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/tables/dynamic-tables/dynamic-tables.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span class=\"text-uppercase\">angular2-datatables</span>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n                <p class=\"no-margin\">DataTable - Simple table component with sorting and pagination for Angular2. Built with <a href=\"https://github.com/mariuszfoltak/angular2-datatable\" target=\"_blank\">angular2-datatables</a></p>\n                <div class=\"w-200 pull-right bottom-15\">\n                    <div class=\"input-group input-group-sm\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\n                        <input class=\"form-control\" id=\"table-search-input\" [(ngModel)]=\"searchText\" type=\"text\" placeholder=\"Search name...\">\n                    </div>\n                </div> \n                <div class=\"table-responsive datatable\">\n                    <table class=\"table table-striped table-hover table-sm\" [mfData]=\"data.people  | SearchPipe : searchText\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\n                        <thead>\n                            <tr>\n                                <th>Id</th>                              \n                                <th><mfDefaultSorter by=\"name\">Name</mfDefaultSorter></th>\n                                <th><mfDefaultSorter by=\"info\">Info</mfDefaultSorter></th>\n                                <th><mfDefaultSorter by=\"description\">Description</mfDefaultSorter></th>\n                                <th><mfDefaultSorter by=\"date\">Date</mfDefaultSorter></th>\n                                <th>Status</th>      \n                            </tr>\n                        </thead>\n                        <tbody>                           \n                            <tr *ngFor=\"let person of mf.data\">\n                                <td>{{person.id}}</td>\n                                <td><strong>{{person.name}}</strong></td>\n                                <td>\n                                    <small><b>Type:</b> &nbsp; {{person.info.type}}</small>\n                                    <br>\n                                    <small><b>Dimensions:</b>&nbsp; {{person.info.dimensions}}</small>\n                                </td>\n                                <td><a href=\"javascript:void(0);\">{{person.description}}</a></td>\n                                <td>{{person.date}}</td>\n                                <td class=\"w-150\">\n                                   <div class=\"progress progress-sm\">\n                                      <div class=\"progress-bar bg-{{person.status.type}}\" role=\"progressbar\" [style.width]=\"person.status.progress\"  aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                   </div>\n                                </td>\n                                </tr>\n                                <tr *ngIf=\"(mf.data | SearchPipe : searchText).length === 0\">\n                                <td colspan=\"100\">\n                                    No matches\n                                </td>\n                            </tr>                          \n                        </tbody>\n                        <tfoot>\n                            <tr>\n                                <td colspan=\"12\">\n                                    <mfBootstrapPaginator [rowsOnPageSet]=\"[10, 25, 50, 100]\"></mfBootstrapPaginator>\n                                </td>\n                            </tr>\n                        </tfoot>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/tables/dynamic-tables/dynamic-tables.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#2E0502\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#640D05\",\"gray\":\"#555\",\"gray-light\":\"#ccc\"}';\n  display: none; }\n\n.datatable .progress {\n  background-color: #ccc; }\n\n.datatable .pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border-radius: 0.25rem; }\n  .datatable .pagination li {\n    display: inline; }\n    .datatable .pagination li a {\n      position: relative;\n      float: left;\n      padding: 0.275rem 0.75rem;\n      font-size: 0.875rem;\n      margin-left: -1px;\n      color: #024a88;\n      text-decoration: none;\n      background-color: #fff;\n      border: 1px solid #ccc; }\n      .datatable .pagination li a:hover {\n        color: #014c8c;\n        background-color: #eceeef;\n        border-color: #ddd; }\n    .datatable .pagination li:first-child a {\n      margin-left: 0;\n      border-bottom-left-radius: 0.2rem;\n      border-top-left-radius: 0.2rem; }\n    .datatable .pagination li:last-child a {\n      border-bottom-right-radius: 0.2rem;\n      border-top-right-radius: 0.2rem; }\n    .datatable .pagination li.active a {\n      z-index: 2;\n      color: #fff;\n      cursor: default;\n      background-color: #024a88;\n      border-color: #024a88; }\n    .datatable .pagination li.disabled a {\n      color: #ccc;\n      pointer-events: none;\n      cursor: not-allowed;\n      background-color: #fff;\n      border-color: #ccc; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/tables/dynamic-tables/dynamic-tables.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicTablesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dynamic_tables_service__ = __webpack_require__("../../../../../src/app/pages/tables/dynamic-tables/dynamic-tables.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DynamicTablesComponent = (function () {
    function DynamicTablesComponent(_dynamicTablesService) {
        this._dynamicTablesService = _dynamicTablesService;
        this.data = _dynamicTablesService.getAll();
    }
    return DynamicTablesComponent;
}());
DynamicTablesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'az-dynamic-tables',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__("../../../../../src/app/pages/tables/dynamic-tables/dynamic-tables.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/tables/dynamic-tables/dynamic-tables.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__dynamic_tables_service__["a" /* DynamicTablesService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dynamic_tables_service__["a" /* DynamicTablesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dynamic_tables_service__["a" /* DynamicTablesService */]) === "function" && _a || Object])
], DynamicTablesComponent);

var _a;
//# sourceMappingURL=dynamic-tables.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/tables/dynamic-tables/dynamic-tables.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicTablesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DynamicTablesService = (function () {
    function DynamicTablesService() {
        this.data = {
            people: [
                {
                    'id': '1',
                    'name': 'Algerd',
                    'info': {
                        'type': 'JPEG',
                        'dimensions': '200x150'
                    },
                    'description': 'Palo Alto',
                    'date': 'June 27, 2013',
                    'status': {
                        'progress': '29%',
                        'type': 'success'
                    }
                },
                {
                    'id': '2',
                    'name': 'Vitaut',
                    'info': {
                        'type': 'PNG',
                        'dimensions': '6433x4522'
                    },
                    'description': 'Vilnia',
                    'date': 'January 1, 1442',
                    'status': {
                        'progress': '19%',
                        'type': 'danger'
                    }
                },
                {
                    'id': '3',
                    'name': 'Honar',
                    'info': {
                        'type': 'AVI',
                        'dimensions': '1440x980'
                    },
                    'description': 'Berlin',
                    'date': 'August 6, 2013',
                    'status': {
                        'progress': '49%',
                        'type': 'bar-gray-light'
                    }
                },
                {
                    'id': '4',
                    'name': 'Jack',
                    'info': {
                        'type': 'PNG',
                        'dimensions': '12x43'
                    },
                    'description': 'San Francisco',
                    'date': 'August 19, 2013',
                    'status': {
                        'progress': '69%'
                    }
                },
                {
                    'id': '5',
                    'name': 'Leon',
                    'info': {
                        'type': 'MP4',
                        'dimensions': '800x480'
                    },
                    'description': 'Brasilia',
                    'date': 'October 1, 2013',
                    'status': {
                        'progress': '9%',
                        'type': 'bar-gray-light'
                    }
                },
                {
                    'id': '6',
                    'name': 'Max',
                    'info': {
                        'type': 'TXT',
                        'dimensions': '-'
                    },
                    'description': 'Helsinki',
                    'date': 'October 29, 2013',
                    'status': {
                        'progress': '38%',
                        'type': 'warning'
                    }
                },
                {
                    'id': '7',
                    'name': 'Pol',
                    'info': {
                        'type': 'MOV',
                        'dimensions': '640x480'
                    },
                    'description': 'Radashkovichi',
                    'date': 'November 11, 2013',
                    'status': {
                        'progress': '83%',
                        'type': 'danger'
                    }
                },
                {
                    'id': '8',
                    'name': 'Chrishna',
                    'info': {
                        'type': 'DOC',
                        'dimensions': '-'
                    },
                    'description': 'Mumbai',
                    'date': 'December 2, 2013',
                    'status': {
                        'progress': '40%',
                        'type': 'info'
                    }
                },
                {
                    'id': '9',
                    'name': 'Leslie',
                    'info': {
                        'type': 'AVI',
                        'dimensions': '4820x2140'
                    },
                    'description': 'Singapore',
                    'date': 'December 6, 2013',
                    'status': {
                        'progress': '18%',
                        'type': 'warning'
                    }
                },
                {
                    'id': '10',
                    'name': 'David',
                    'info': {
                        'type': 'XML',
                        'dimensions': '-'
                    },
                    'description': 'Portland',
                    'date': 'December 13, 2013',
                    'status': {
                        'progress': '54%',
                        'type': 'bar-gray-light'
                    }
                },
                {
                    'id': '11',
                    'name': 'Andrej',
                    'info': {
                        'type': 'VOB',
                        'dimensions': '6433x4522'
                    },
                    'description': 'Minsk',
                    'date': 'December 14, 2013',
                    'status': {
                        'progress': '25%'
                    }
                },
                {
                    'id': '12',
                    'name': 'Julia',
                    'info': {
                        'type': 'JPEG',
                        'dimensions': '40x40'
                    },
                    'description': 'Hrodna',
                    'date': 'July 9, 2012',
                    'status': {
                        'progress': '50%',
                        'type': 'warning'
                    }
                },
                {
                    'id': '13',
                    'name': 'Ihnat',
                    'info': {
                        'type': 'JAVA',
                        'dimensions': '-'
                    },
                    'description': 'Los Angeles',
                    'date': 'August 2, 2012',
                    'status': {
                        'progress': '8%',
                        'type': 'success'
                    }
                },
                {
                    'id': '14',
                    'name': 'Abraham',
                    'info': {
                        'type': 'DOCX',
                        'dimensions': '-'
                    },
                    'description': 'Panama',
                    'date': 'September 3, 2012',
                    'status': {
                        'progress': '80%',
                        'type': 'bar-gray-light'
                    }
                },
                {
                    'id': '15',
                    'name': 'Tomas',
                    'info': {
                        'type': 'JPEG',
                        'dimensions': '1800x1420'
                    },
                    'description': 'Amsterdam',
                    'date': 'November 13, 2012',
                    'status': {
                        'progress': '10%',
                        'type': 'bar-gray-light'
                    }
                },
                {
                    'id': '16',
                    'name': 'Scott',
                    'info': {
                        'type': 'PNG',
                        'dimensions': '240x460'
                    },
                    'description': 'Sluck',
                    'date': 'December 5, 2012',
                    'status': {
                        'progress': '93%'
                    }
                },
                {
                    'id': '17',
                    'name': 'Pham',
                    'info': {
                        'type': 'MAIL',
                        'dimensions': '-'
                    },
                    'description': 'Tokyo',
                    'date': 'December 8, 2012',
                    'status': {
                        'progress': '44%',
                        'type': 'danger'
                    }
                },
                {
                    'id': '18',
                    'name': 'Peter',
                    'info': {
                        'type': 'PNG',
                        'dimensions': '8320x6400'
                    },
                    'description': 'Cape Town',
                    'date': 'December 29, 2012',
                    'status': {
                        'progress': '5%',
                        'type': 'bar-gray-light'
                    }
                },
                {
                    'id': '19',
                    'name': 'Uladz',
                    'info': {
                        'type': 'JPEG',
                        'dimensions': '2200x1600'
                    },
                    'description': 'Mahileu',
                    'date': 'December 7, 2013',
                    'status': {
                        'progress': '2%',
                        'type': 'gray-light'
                    }
                }
            ]
        };
    }
    DynamicTablesService.prototype.getAll = function () {
        return this.data;
    };
    return DynamicTablesService;
}());
DynamicTablesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], DynamicTablesService);

//# sourceMappingURL=dynamic-tables.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/tables/tables.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesModule", function() { return TablesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theme_pipes_pipes_module__ = __webpack_require__("../../../../../src/app/theme/pipes/pipes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__theme_directives_directives_module__ = __webpack_require__("../../../../../src/app/theme/directives/directives.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__basic_tables_basic_tables_component__ = __webpack_require__("../../../../../src/app/pages/tables/basic-tables/basic-tables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dynamic_tables_dynamic_tables_component__ = __webpack_require__("../../../../../src/app/pages/tables/dynamic-tables/dynamic-tables.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: 'basic-tables', pathMatch: 'full' },
    { path: 'basic-tables', component: __WEBPACK_IMPORTED_MODULE_7__basic_tables_basic_tables_component__["a" /* BasicTablesComponent */], data: { breadcrumb: 'Basic' } },
    { path: 'dynamic-tables', component: __WEBPACK_IMPORTED_MODULE_8__dynamic_tables_dynamic_tables_component__["a" /* DynamicTablesComponent */], data: { breadcrumb: 'Dynamic' } }
];
var TablesModule = (function () {
    function TablesModule() {
    }
    return TablesModule;
}());
TablesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_5__theme_pipes_pipes_module__["a" /* PipesModule */],
            __WEBPACK_IMPORTED_MODULE_6__theme_directives_directives_module__["a" /* DirectivesModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */].forChild(routes)
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__basic_tables_basic_tables_component__["a" /* BasicTablesComponent */],
            __WEBPACK_IMPORTED_MODULE_8__dynamic_tables_dynamic_tables_component__["a" /* DynamicTablesComponent */]
        ]
    })
], TablesModule);

//# sourceMappingURL=tables.module.js.map

/***/ })

});
//# sourceMappingURL=tables.module.chunk.js.map