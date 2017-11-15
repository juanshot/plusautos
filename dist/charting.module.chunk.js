webpackJsonp(["charting.module"],{

/***/ "../../../../../src/app/pages/charting/charting.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartingModule", function() { return ChartingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js_dist_Chart_js__ = __webpack_require__("../../../../chart.js/dist/Chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js_dist_Chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_chart_js_dist_Chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theme_directives_directives_module__ = __webpack_require__("../../../../../src/app/theme/directives/directives.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng2_charts_ng2_charts_component__ = __webpack_require__("../../../../../src/app/pages/charting/ng2-charts/ng2-charts.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: 'ng2charts', pathMatch: 'full' },
    { path: 'ng2charts', component: __WEBPACK_IMPORTED_MODULE_6__ng2_charts_ng2_charts_component__["a" /* Ng2ChartsComponent */], data: { breadcrumb: 'Graficos' } }
];
var ChartingModule = (function () {
    function ChartingModule() {
    }
    return ChartingModule;
}());
ChartingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_5__theme_directives_directives_module__["a" /* DirectivesModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */].forChild(routes)
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__ng2_charts_ng2_charts_component__["a" /* Ng2ChartsComponent */]
        ]
    })
], ChartingModule);

//# sourceMappingURL=charting.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/charting/ng2-charts/ng2-charts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">    \n    <div class=\"col-xl-12 col-lg-6 col-12 bottom-30\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>Relacion Ingreso Egreso Taller</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>              \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n                <canvas baseChart\n                    [datasets]=\"barChartData\"\n                    [labels]=\"barChartLabels\"\n                    [options]=\"barChartOptions\"\n                    [colors]=\"barChartColors\"\n                    [legend]=\"barChartLegend\"\n                    [chartType]=\"barChartType\"\n                    (chartHover)=\"chartHovered($event)\"\n                    (chartClick)=\"chartClicked($event)\">\n                </canvas>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n\n<div class=\"row\">\n\n    <div class=\"col-xl-12 col-lg-6 col-12 bottom-30\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>Ganancias por Ingreso Taller</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>              \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n                <canvas baseChart\n                    [data]=\"doughnutChartData\"\n                    [labels]=\"doughnutChartLabels\"\n                    [legend]=\"doughnutChartLegend\"\n                    [options]=\"doughnutChartOptions\"\n                    [colors]=\"doughnutChartColors\"\n                    [chartType]=\"pieChartType\"\n                    (chartHover)=\"chartHovered($event)\"\n                    (chartClick)=\"chartClicked($event)\">\n                </canvas>\n            </div>\n        </div>\n    </div> \n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/charting/ng2-charts/ng2-charts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/charting/ng2-charts/ng2-charts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ng2ChartsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Ng2ChartsComponent = (function () {
    function Ng2ChartsComponent(_appConfig) {
        this._appConfig = _appConfig;
        this.barChartType = 'bar';
        this.barChartTypeH = 'horizontalBar';
        this.barChartLegend = true;
        this.lineChartType = 'line';
        this.lineChartLegend = true;
        this.doughnutChartType = 'doughnut';
        this.pieChartType = 'pie';
        this.doughnutChartLegend = true;
        this.radarChartType = 'radar';
        this.radarChartLegend = true;
        this.polarAreaChartType = 'polarArea';
        this.polarAreaChartLegend = true;
        this.config = this._appConfig.config;
        this.configFn = this._appConfig;
    }
    Ng2ChartsComponent.prototype.ngOnInit = function () {
        //--- Bar Chart --- 
        this.barChartLabels = ['Abril', 'Mayo', 'Junio', 'Julio', 'Agosto'];
        this.barChartData = [
            { data: [59, 80, 72, 56, 55, 40], label: 'Gastos' },
            { data: [48, 40, 19, 75, 27, 80], label: 'Ingresos' }
        ];
        this.barChartColors = [
            {
                borderWidth: 2,
                backgroundColor: this.configFn.rgba(this.config.colors.danger, 0.5),
                borderColor: this.config.colors.danger,
                hoverBackgroundColor: this.config.colors.danger
            },
            {
                borderWidth: 2,
                backgroundColor: this.configFn.rgba(this.config.colors.info, 0.5),
                borderColor: this.config.colors.info,
                hoverBackgroundColor: this.config.colors.info
            }
        ];
        this.barChartOptions = {
            responsive: true,
            scales: {
                yAxes: [{
                        ticks: {
                            fontColor: this.configFn.rgba(this.config.colors.gray, 0.7),
                            fontSize: 14,
                            stepSize: 10,
                            beginAtZero: true
                        },
                        gridLines: {
                            display: true,
                            zeroLineColor: this.configFn.rgba(this.config.colors.gray, 0.4),
                            zeroLineWidth: 1,
                            color: this.configFn.rgba(this.config.colors.gray, 0.1)
                        }
                    }],
                xAxes: [{
                        ticks: {
                            fontColor: this.configFn.rgba(this.config.colors.gray, 0.7)
                        },
                        gridLines: {
                            display: true,
                            zeroLineColor: this.configFn.rgba(this.config.colors.gray, 0.4),
                            zeroLineWidth: 1,
                            color: this.configFn.rgba(this.config.colors.gray, 0.1)
                        }
                    }]
            },
            legend: {
                labels: {
                    fontColor: this.configFn.rgba(this.config.colors.gray, 0.9),
                }
            },
            tooltips: {
                enabled: true,
                backgroundColor: this.configFn.rgba(this.config.colors.main, 0.6)
            }
        };
        //--- Line Chart ---
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
        ];
        this.lineChartColors = [
            {
                borderWidth: 2,
                backgroundColor: this.configFn.rgba(this.config.colors.success, 0.5),
                borderColor: this.config.colors.success,
                pointBorderColor: this.config.colors.default,
                pointHoverBorderColor: this.config.colors.success,
                pointHoverBackgroundColor: this.config.colors.default,
                hoverBackgroundColor: this.config.colors.success
            },
            {
                borderWidth: 2,
                backgroundColor: this.configFn.rgba(this.config.colors.warning, 0.5),
                borderColor: this.config.colors.warning,
                pointBorderColor: this.config.colors.default,
                pointHoverBorderColor: this.config.colors.warning,
                pointHoverBackgroundColor: this.config.colors.default,
                hoverBackgroundColor: this.config.colors.warning
            },
            {
                borderWidth: 2,
                backgroundColor: this.configFn.rgba(this.config.colors.primary, 0.5),
                borderColor: this.config.colors.primary,
                pointBorderColor: this.config.colors.default,
                pointHoverBorderColor: this.config.colors.primary,
                pointHoverBackgroundColor: this.config.colors.default,
                hoverBackgroundColor: this.config.colors.primary
            }
        ];
        this.lineChartOptions = {
            scales: {
                yAxes: [{
                        ticks: {
                            fontColor: this.configFn.rgba(this.config.colors.gray, 0.7),
                            beginAtZero: true
                        },
                        gridLines: {
                            display: true,
                            zeroLineColor: this.configFn.rgba(this.config.colors.gray, 0.5),
                            zeroLineWidth: 1,
                            color: this.configFn.rgba(this.config.colors.gray, 0.1)
                        }
                    }],
                xAxes: [{
                        ticks: {
                            fontColor: this.configFn.rgba(this.config.colors.gray, 0.7)
                        },
                        gridLines: {
                            display: true,
                            zeroLineColor: this.configFn.rgba(this.config.colors.gray, 0.5),
                            zeroLineWidth: 1,
                            color: this.configFn.rgba(this.config.colors.gray, 0.1)
                        }
                    }]
            },
            legend: {
                labels: {
                    fontColor: this.configFn.rgba(this.config.colors.gray, 0.9),
                }
            },
            tooltips: {
                enabled: true,
                backgroundColor: this.configFn.rgba(this.config.colors.main, 0.7)
            }
        };
        //--- Doughnut/Pie Chart ---
        this.doughnutChartLabels = ['Mas de 50% Ganancia', 'Menos de 50%', 'Perdida en Ganancia'];
        this.doughnutChartData = [350, 420, 130];
        this.doughnutChartColors = [
            {
                backgroundColor: [
                    this.configFn.rgba(this.config.colors.success, 0.6),
                    this.configFn.rgba(this.config.colors.warning, 0.6),
                    this.configFn.rgba(this.config.colors.danger, 0.6)
                ],
                hoverBackgroundColor: [
                    this.config.colors.success,
                    this.config.colors.warning,
                    this.config.colors.danger
                ],
                borderColor: this.config.colors.default,
                borderWidth: 1,
                hoverBorderWidth: 3
            }
        ];
        this.doughnutChartOptions = {
            legend: {
                labels: {
                    fontColor: this.configFn.rgba(this.config.colors.gray, 0.9),
                }
            },
            tooltips: {
                enabled: true,
                backgroundColor: this.configFn.rgba(this.config.colors.main, 0.7)
            }
        };
        //--- Radar Chart ---
        this.radarChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
        this.radarChartData = [
            { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
        ];
        this.radarChartColors = [
            {
                borderWidth: 2,
                backgroundColor: this.configFn.rgba(this.config.colors.danger, 0.5),
                borderColor: this.config.colors.danger,
                pointBorderColor: this.config.colors.default,
                pointHoverBorderColor: this.config.colors.danger,
                pointHoverBackgroundColor: this.config.colors.default,
                hoverBackgroundColor: this.config.colors.danger
            },
            {
                borderWidth: 2,
                backgroundColor: this.configFn.rgba(this.config.colors.primary, 0.5),
                borderColor: this.config.colors.primary,
                pointBorderColor: this.config.colors.default,
                pointHoverBorderColor: this.config.colors.primary,
                pointHoverBackgroundColor: this.config.colors.default,
                hoverBackgroundColor: this.config.colors.primary
            }
        ];
        this.radarChartOptions = {
            scale: {
                angleLines: {
                    lineWidth: 2,
                    color: this.configFn.rgba(this.config.colors.gray, 0.3)
                },
                pointLabels: {
                    fontColor: this.configFn.rgba(this.config.colors.gray, 0.7),
                },
                gridLines: {
                    display: true,
                    color: this.configFn.rgba(this.config.colors.gray, 0.1)
                },
                ticks: {
                    fontColor: this.config.colors.main,
                    backdropColor: this.configFn.rgba(this.config.colors.gray, 0.1),
                    beginAtZero: true
                }
            },
            legend: {
                labels: {
                    fontColor: this.configFn.rgba(this.config.colors.gray, 0.9),
                }
            },
            tooltips: {
                enabled: true,
                backgroundColor: this.configFn.rgba(this.config.colors.main, 0.7)
            }
        };
        //--- Polar Area Chart ---
        this.polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
        this.polarAreaChartData = [300, 500, 100, 240, 130];
        this.polarAreaChartColors = [
            {
                backgroundColor: [
                    this.configFn.rgba(this.config.colors.success, 0.6),
                    this.configFn.rgba(this.config.colors.warning, 0.6),
                    this.configFn.rgba(this.config.colors.danger, 0.6),
                    this.configFn.rgba(this.config.colors.primary, 0.6),
                    this.configFn.rgba(this.config.colors.info, 0.6)
                ],
                hoverBackgroundColor: [
                    this.config.colors.success,
                    this.config.colors.warning,
                    this.config.colors.danger,
                    this.config.colors.primary,
                    this.config.colors.info
                ],
                borderColor: this.config.colors.default,
                borderWidth: 1,
                hoverBorderWidth: 3
            }
        ];
        this.polarAreaChartOptions = {
            scale: {
                gridLines: {
                    display: true,
                    color: this.configFn.rgba(this.config.colors.gray, 0.1)
                },
                ticks: {
                    fontColor: this.config.colors.main,
                    backdropColor: this.configFn.rgba(this.config.colors.gray, 0.1),
                    beginAtZero: true
                }
            },
            legend: {
                labels: {
                    fontColor: this.configFn.rgba(this.config.colors.gray, 0.9),
                }
            },
            tooltips: {
                enabled: true,
                backgroundColor: this.configFn.rgba(this.config.colors.main, 0.7)
            }
        };
    };
    Ng2ChartsComponent.prototype.chartClicked = function (e) {
        //console.log(e);
    };
    Ng2ChartsComponent.prototype.chartHovered = function (e) {
        //console.log(e);
    };
    return Ng2ChartsComponent;
}());
Ng2ChartsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'az-ng2-charts',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__("../../../../../src/app/pages/charting/ng2-charts/ng2-charts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/charting/ng2-charts/ng2-charts.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* AppConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* AppConfig */]) === "function" && _a || Object])
], Ng2ChartsComponent);

var _a;
//# sourceMappingURL=ng2-charts.component.js.map

/***/ })

});
//# sourceMappingURL=charting.module.chunk.js.map