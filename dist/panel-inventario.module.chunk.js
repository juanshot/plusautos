webpackJsonp(["panel-inventario.module"],{

/***/ "../../../../../src/app/pages/inventarioPanel/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-container\">\n    <ul class=\"media-list\" id=\"media-list\" slim-scroll [slimScrollOptions]=\"{height: 435}\">\n        <li *ngFor=\"let item of chatList\" class=\"media\">\n            <div *ngIf=\"item.side=='left'\" class=\"media-left\">\n                <img class=\"media-object rounded-circle\" src=\"{{item.image}}\" alt=\"author image\">\n            </div>\n            <div class=\"media-body rounded {{item.side}}\">\n                <div class=\"media-heading\">\n                    <h6 class=\"d-inline text-capitalize\" [ngClass]=\"{'pull-left': item.side=='left', 'pull-right': item.side=='right'}\">{{item.author}}</h6>\n                    <span class=\"d-inline\" [ngClass]=\"{'pull-right': item.side=='left', 'pull-left': item.side=='right'}\"><i class=\"fa fa-clock-o\"></i>{{item.date | date:\"dd MMMM, yyyy 'at' HH:mm a\"}}</span>\n                </div>                \n                <p>{{item.text}}</p>\n            </div>\n             <div *ngIf=\"item.side=='right'\" class=\"media-right\">\n                <img class=\"media-object rounded-circle\" src=\"{{item.image}}\" alt=\"author image\">\n            </div>\n        </li>\n    </ul>\n    <div class=\"row\">\n        <div class=\"col-12\">\n\n            <div class=\"input-group\">\n                <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Enter your text...\"\n                    (keyup)=\"addChatItem($event)\" [(ngModel)]=\"newChatText\">\n                <div class=\"input-group-btn\">\n                    <button class=\"btn btn-main\" type=\"button\" (click)=\"addChatItem($event)\">\n                        <i class=\"fa fa-paper-plane send\"></i>\n                    </button>\n                </div>\n            </div>\n\n        </div>            \n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/inventarioPanel/chat/chat.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#2E0502\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#640D05\",\"gray\":\"#555\",\"gray-light\":\"#ccc\"}';\n  display: none; }\n\n.chat-container img.media-object {\n  width: 60px; }\n\n.chat-container .media-list {\n  -webkit-padding-start: 0; }\n\n.chat-container li.media {\n  margin-bottom: 10px; }\n  .chat-container li.media .media-left {\n    padding-right: 10px; }\n  .chat-container li.media .media-right {\n    padding-left: 10px; }\n  .chat-container li.media .media-body {\n    padding: 0 6px;\n    position: relative;\n    overflow: visible; }\n    .chat-container li.media .media-body .media-heading {\n      padding-top: 5px;\n      overflow: hidden; }\n      .chat-container li.media .media-body .media-heading h6 {\n        font-weight: 400; }\n      .chat-container li.media .media-body .media-heading span {\n        font-size: 11px;\n        margin-top: 3px;\n        color: #888; }\n        .chat-container li.media .media-body .media-heading span i {\n          font-size: 10px;\n          margin-right: 3px; }\n    .chat-container li.media .media-body p {\n      margin-top: 4px;\n      line-height: 1.2;\n      font-size: 13px;\n      letter-spacing: 0.03em;\n      color: #555; }\n    .chat-container li.media .media-body.left {\n      background: #f1f1f1; }\n      .chat-container li.media .media-body.left:before {\n        content: \"\";\n        border: 7px solid transparent;\n        border-right-color: #f1f1f1;\n        position: absolute;\n        top: 18px;\n        left: -14px; }\n    .chat-container li.media .media-body.right {\n      background: #f7f7f7; }\n      .chat-container li.media .media-body.right:before {\n        content: \"\";\n        border: 7px solid transparent;\n        border-left-color: #f7f7f7;\n        position: absolute;\n        top: 18px;\n        right: -14px; }\n\n.chat-container i.send {\n  font-size: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/inventarioPanel/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__("../../../../../src/app/pages/inventarioPanel/chat/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatComponent = (function () {
    function ChatComponent(_chatService) {
        this._chatService = _chatService;
        this.newChatText = '';
        this.chatList = this._chatService.getChatList();
    }
    ChatComponent.prototype.addChatItem = function ($event) {
        if (($event.which === 1 || $event.which === 13) && this.newChatText.trim() != '') {
            this.chatList.push({
                image: 'assets/img/profile/tereza.jpg',
                author: 'tereza stiles',
                text: this.newChatText,
                date: new Date(),
                side: 'left'
            });
            this.newChatText = '';
            var chatContainer_1 = jQuery(".media-list");
            var scrollToBottom = chatContainer_1.prop('scrollHeight') + 'px';
            setTimeout(function () {
                chatContainer_1.slimScroll({
                    scrollTo: scrollToBottom
                });
            });
        }
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'az-chat',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__("../../../../../src/app/pages/inventarioPanel/chat/chat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/inventarioPanel/chat/chat.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]) === "function" && _a || Object])
], ChatComponent);

var _a;
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/inventarioPanel/chat/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChatService = (function () {
    function ChatService() {
    }
    ChatService.prototype.getChatList = function () {
        var date = new Date(), day = date.getDate(), month = date.getMonth(), year = date.getFullYear(), hour = date.getHours(), minute = date.getMinutes();
        return [
            {
                image: '../assets/img/profile/tereza.jpg',
                author: 'tereza stiles',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris justo erat, interdum vitae aliquet congue, sodales quis lorem.',
                date: new Date(year, month, day - 2, hour, minute),
                side: 'left'
            },
            {
                image: '../assets/img/profile/bruno.jpg',
                author: 'bruno clarkson',
                text: 'Vivamus a odio velit. Morbi auctor eros at orci commodo vestibulum.',
                date: new Date(year, month, day - 2, hour, minute + 3),
                side: 'right'
            },
            {
                image: '../assets/img/profile/tereza.jpg',
                author: 'tereza stiles',
                text: 'Phasellus eu dui sit amet sem pulvinar placerat.',
                date: new Date(year, month, day - 2, hour, minute + 2),
                side: 'left'
            },
            {
                image: '../assets/img/profile/bruno.jpg',
                author: 'bruno clarkson',
                text: 'Nullam ultricies molestie aliquet. Cras interdum metus ipsum, eget ullamcorper felis elementum in.',
                date: new Date(year, month, day - 2, hour, minute + 3),
                side: 'right'
            },
            {
                image: '../assets/img/profile/tereza.jpg',
                author: 'tereza stiles',
                text: 'Donec feugiat hendrerit purus, vel mattis leo.',
                date: new Date(year, month, day - 2, hour, minute + 5),
                side: 'left'
            }
        ];
    };
    return ChatService;
}());
ChatService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], ChatService);

//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/inventarioPanel/datamap/datamap.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row datamap\">\n    <div class=\"col-xl-9 col-lg-8 col-12\">\n        <h3 class=\"text-center\">Top 5 countries Azimuth users</h3>  \n       \n        <div class=\"stats text-center hidden-xs-down\">\n            <label class=\"custom-control custom-radio\">\n                <input id=\"radio1\" name=\"radio\" type=\"radio\" class=\"custom-control-input radio-primary\">\n                <span class=\"custom-control-indicator\"></span>\n                <span class=\"custom-control-description\">Active users: 2 180 520 000</span>\n            </label>\n            <label class=\"custom-control custom-radio\">\n                <input id=\"radio2\" name=\"radio\" type=\"radio\" class=\"custom-control-input radio-info\">\n                <span class=\"custom-control-indicator\"></span>\n                <span class=\"custom-control-description\">Passive users: 758 022 010</span>\n            </label>\n            <label class=\"custom-control custom-radio\">\n                <input id=\"radio2\" name=\"radio\" type=\"radio\" class=\"custom-control-input radio-danger\">\n                <span class=\"custom-control-indicator\"></span>\n                <span class=\"custom-control-description\">Blocked users: 125 000</span>\n            </label>\n        </div>\n\n\n        <div id=\"datamap\"></div> \n    </div>   \n    <div class=\"col-xl-3 col-lg-4 col-12 bottom-15\"> \n            \n        <div class=\"text-center pull-lg-none pull-left col-4 col-lg-12 year-control\">\n             <p>Select year</p>\n             <input type=\"text\" class=\"dial\" data-cursor=\"true\">\n             <p>Map statistics</p>\n        </div> \n        <div class=\"pull-lg-none pull-right col-8 col-lg-12\">\n            <h6>More than 50M <span class=\"pull-right badge badge-pill badge-success\">65%</span></h6>\n            <div class=\"progress\">\n                <div progress-animate class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 65%\"  aria-valuenow=\"65\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            </div>\n            <h6>Between 10M and 50M <span class=\"pull-right badge badge-pill badge-primary\">25%</span></h6>\n            <div class=\"progress\">\n                <div progress-animate class=\"progress-bar bg-primary\" role=\"progressbar\" style=\"width: 25%\"  aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            </div>\n            <h6>Between 5M and 10M <span class=\"pull-right badge badge-pill badge-warning\">75%</span></h6>\n            <div class=\"progress\">\n                <div progress-animate class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 75%\"  aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            </div>\n            <h6>Between 1M and 5M <span class=\"pull-right badge badge-pill badge-danger\">18%</span></h6>\n            <div class=\"progress\">\n                <div progress-animate class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 18%\"  aria-valuenow=\"18\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            </div>\n            <h6>Less than 1M <span class=\"pull-right badge badge-pill badge-info\">70%</span></h6>\n            <div class=\"progress\">\n                <div progress-animate class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 70%\"  aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            </div>\n        </div>\n        \n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/inventarioPanel/datamap/datamap.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#2E0502\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#640D05\",\"gray\":\"#555\",\"gray-light\":\"#ccc\"}';\n  display: none; }\n\n.datamap h3 {\n  color: #242424;\n  font-weight: 300; }\n\n.datamap h6 {\n  color: #242424;\n  font-weight: 300;\n  font-size: 12px;\n  margin: 0 0 3px 0; }\n  .datamap h6 .badge {\n    line-height: 1; }\n\n.datamap p {\n  color: #242424;\n  font-weight: 400; }\n\n.datamap .progress {\n  background-color: #fff;\n  margin-bottom: 1rem;\n  height: 8px; }\n\n.year-control {\n  margin-bottom: 20px; }\n  .year-control canvas {\n    margin-bottom: 12px;\n    cursor: pointer; }\n  .year-control input {\n    outline: none; }\n\n.stats {\n  position: absolute;\n  z-index: 1;\n  top: 45px;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 12px;\n  color: rgba(46, 5, 2, 0.9); }\n  .stats .custom-control + .custom-control {\n    margin-left: 0.7rem; }\n  .stats .custom-control-indicator {\n    width: 0.7rem;\n    height: 0.7rem; }\n  .stats .custom-control-description {\n    margin-left: -8px; }\n\n.hoverinfo {\n  background-color: rgba(46, 5, 2, 0.7) !important;\n  color: #fff;\n  font-weight: 100;\n  letter-spacing: 0.02em; }\n\n#datamap svg {\n  overflow: visible !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/inventarioPanel/datamap/datamap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatamapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datamap_service__ = __webpack_require__("../../../../../src/app/pages/inventarioPanel/datamap/datamap.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DatamapComponent = (function () {
    function DatamapComponent(_dataMapService, _appConfig) {
        this._dataMapService = _dataMapService;
        this._appConfig = _appConfig;
        this.config = this._appConfig.config;
        this.configFn = this._appConfig;
        this.data = _dataMapService.getData();
        this.bubbles = _dataMapService.getBubbles();
    }
    DatamapComponent.prototype.ngAfterViewInit = function () {
        var map = new Datamap({
            element: document.getElementById('datamap'),
            scope: 'world',
            responsive: true,
            fills: {
                defaultFill: this.configFn.rgba(this.config.colors.main, 0.8),
                primary: this.config.colors.primary,
                success: this.config.colors.success,
                info: this.config.colors.info,
                danger: this.config.colors.danger,
                warning: this.config.colors.warning
            },
            data: this.data["2016"],
            geographyConfig: {
                borderWidth: 0.7,
                borderColor: this.config.colors.default,
                popupTemplate: function (geo, data) {
                    return ['<div class="hoverinfo"><strong>',
                        'In ' + geo.properties.name +
                            ' users count is ' + data.users +
                            '.</strong></div>'].join('');
                },
                highlightFillColor: this.config.colors.sidebarBgColor,
                highlightBorderColor: this.configFn.rgba(this.config.colors.default, 0.8),
                highlightBorderWidth: 1
            },
            done: function (datamap) {
                datamap.svg.selectAll('.datamaps-subunit').on('click', function (geography) {
                    alert(geography.properties.name);
                });
            }
        });
        map.bubbles(this.bubbles["2016"], {
            popupTemplate: function (geo, data) {
                return "<div class='hoverinfo'><u>" + data.name + "</u><br/> users count: <i>" + data.users + "</i>";
            },
            fillOpacity: 0.7,
            highlightFillColor: this.config.colors.main,
            highlightBorderColor: this.configFn.rgba(this.config.colors.default, 0.7),
            highlightFillOpacity: 0.8,
        });
        var data = this.data;
        var bubbles = this.bubbles;
        var config = this.config;
        var configFn = this.configFn;
        jQuery(".dial").val(2016).knob({
            min: 2010,
            max: 2016,
            lineCap: 'round',
            displayPrevious: true,
            bgColor: this.configFn.rgba(this.config.colors.default, 0.9),
            fgColor: this.config.colors.sidebarBgColor,
            inputColor: this.config.colors.main,
            width: '62',
            height: '62',
            thickness: .2,
            release: function (year) {
                map.updateChoropleth(data[year]);
                map.bubbles(bubbles[year], {
                    popupTemplate: function (geo, data) {
                        return "<div class='hoverinfo'><u>" + data.name + "</u><br/>users count: <i>" + data.users + "</i>";
                    },
                    fillOpacity: 0.7,
                    highlightFillColor: config.colors.main,
                    highlightBorderColor: configFn.rgba(config.colors.default, 0.7),
                    highlightFillOpacity: 0.8,
                });
            }
        });
        d3.select(window).on('resize', function () {
            map.resize();
        });
    };
    return DatamapComponent;
}());
DatamapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'az-datamap',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__("../../../../../src/app/pages/inventarioPanel/datamap/datamap.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/inventarioPanel/datamap/datamap.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__datamap_service__["a" /* DataMapService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__datamap_service__["a" /* DataMapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__datamap_service__["a" /* DataMapService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* AppConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* AppConfig */]) === "function" && _b || Object])
], DatamapComponent);

var _a, _b;
//# sourceMappingURL=datamap.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/inventarioPanel/datamap/datamap.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataMapService; });
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


var DataMapService = (function () {
    function DataMapService(_appConfig) {
        this._appConfig = _appConfig;
        this.data = {
            "2010": {
                USA: { users: 1200, fillKey: 'defaultFill' },
                RUS: { users: 402, fillKey: 'defaultFill' }
            },
            "2011": {
                USA: { users: 820, fillKey: 'defaultFill' },
                RUS: { users: 225, fillKey: 'defaultFill' }
            },
            "2012": {
                USA: { users: 22000, fillKey: 'defaultFill' },
                RUS: { users: 6020, fillKey: 'defaultFill' }
            },
            "2013": {
                USA: { users: 98200, fillKey: 'defaultFill' },
                RUS: { users: 82250, fillKey: 'defaultFill' }
            },
            "2014": {
                USA: { users: 902000, fillKey: 'defaultFill' },
                RUS: { users: 806020, fillKey: 'defaultFill' }
            },
            "2015": {
                USA: { users: 1238500, fillKey: 'defaultFill' },
                RUS: { users: 2532700, fillKey: 'defaultFill' }
            },
            "2016": {
                USA: { users: 5902000, fillKey: 'defaultFill' },
                RUS: { users: 3806020, fillKey: 'defaultFill' }
            }
        };
        this.bubbles = {
            "2010": [
                { name: 'United States of America', users: '1200', latitude: 37.09, longitude: -95.71, radius: 11, fillKey: 'success' },
                { name: 'Russia', users: '402', latitude: 61.52, longitude: 105.32, radius: 8, fillKey: 'info' },
                { name: 'China', users: '882', latitude: 35.86, longitude: 104.19, radius: 7, fillKey: 'danger' },
                { name: 'Australia', users: '980', latitude: -25.27, longitude: 133.77, radius: 9, fillKey: 'primary' },
                { name: 'Germany', users: '120', latitude: 51.16, longitude: 10.45, radius: 5, fillKey: 'warning' }
            ],
            "2011": [
                { name: 'United States of America', users: '820', latitude: 37.09, longitude: -95.71, radius: 7, fillKey: 'danger' },
                { name: 'Russia', users: '225', latitude: 61.52, longitude: 105.32, radius: 5, fillKey: 'warning' },
                { name: 'China', users: '1340', latitude: 35.86, longitude: 104.19, radius: 11, fillKey: 'success' },
                { name: 'Australia', users: '1201', latitude: -25.27, longitude: 133.77, radius: 9, fillKey: 'primary' },
                { name: 'Germany', users: '1105', latitude: 51.16, longitude: 10.45, radius: 8, fillKey: 'info' }
            ],
            "2012": [
                { name: 'United States of America', users: '22000', latitude: 37.09, longitude: -95.71, radius: 11, fillKey: 'success' },
                { name: 'Russia', users: '6020', latitude: 61.52, longitude: 105.32, radius: 8, fillKey: 'info' },
                { name: 'China', users: '7820', latitude: 35.86, longitude: 104.19, radius: 7, fillKey: 'danger' },
                { name: 'Australia', users: '1980', latitude: -25.27, longitude: 133.77, radius: 9, fillKey: 'primary' },
                { name: 'Germany', users: '2120', latitude: 51.16, longitude: 10.45, radius: 5, fillKey: 'warning' }
            ],
            "2013": [
                { name: 'United States of America', users: '98200', latitude: 37.09, longitude: -95.71, radius: 7, fillKey: 'danger' },
                { name: 'Russia', users: '82250', latitude: 61.52, longitude: 105.32, radius: 5, fillKey: 'warning' },
                { name: 'China', users: '41340', latitude: 35.86, longitude: 104.19, radius: 11, fillKey: 'success' },
                { name: 'Australia', users: '61201', latitude: -25.27, longitude: 133.77, radius: 9, fillKey: 'primary' },
                { name: 'Germany', users: '31105', latitude: 51.16, longitude: 10.45, radius: 8, fillKey: 'info' }
            ],
            "2014": [
                { name: 'United States of America', users: '902000', latitude: 37.09, longitude: -95.71, radius: 11, fillKey: 'success' },
                { name: 'Russia', users: '806020', latitude: 61.52, longitude: 105.32, radius: 8, fillKey: 'info' },
                { name: 'China', users: '247820', latitude: 35.86, longitude: 104.19, radius: 7, fillKey: 'danger' },
                { name: 'Australia', users: '121980', latitude: -25.27, longitude: 133.77, radius: 9, fillKey: 'primary' },
                { name: 'Germany', users: '32120', latitude: 51.16, longitude: 10.45, radius: 5, fillKey: 'warning' }
            ],
            "2015": [
                { name: 'United States of America', users: '1238500', latitude: 37.09, longitude: -95.71, radius: 13, fillKey: 'primary' },
                { name: 'Russia', users: '2532700', latitude: 61.52, longitude: 105.32, radius: 11, fillKey: 'info' },
                { name: 'China', users: '2612000', latitude: 35.86, longitude: 104.19, radius: 8, fillKey: 'danger' },
                { name: 'Australia', users: '1242200', latitude: -25.27, longitude: 133.77, radius: 10, fillKey: 'success' },
                { name: 'Germany', users: '157000', latitude: 51.16, longitude: 10.45, radius: 5, fillKey: 'warning' }
            ],
            "2016": [
                { name: 'United States of America', users: '5902000', latitude: 37.09, longitude: -95.71, radius: 13, fillKey: 'success' },
                { name: 'Russia', users: '3806020', latitude: 61.52, longitude: 105.32, radius: 11, fillKey: 'info' },
                { name: 'China', users: '25247820', latitude: 35.86, longitude: 104.19, radius: 9, fillKey: 'danger' },
                { name: 'Australia', users: '15121980', latitude: -25.27, longitude: 133.77, radius: 10, fillKey: 'primary' },
                { name: 'Germany', users: '2532120', latitude: 51.16, longitude: 10.45, radius: 8, fillKey: 'warning' }
            ]
        };
        this._appConfig = _appConfig;
    }
    DataMapService.prototype.getData = function () {
        return this.data;
    };
    DataMapService.prototype.getBubbles = function () {
        return this.bubbles;
    };
    return DataMapService;
}());
DataMapService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* AppConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* AppConfig */]) === "function" && _a || Object])
], DataMapService);

var _a;
//# sourceMappingURL=datamap.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/inventarioPanel/dynamic-chart/dynamic-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 bottom-30\">\n     <canvas baseChart\n              [datasets]=\"lineChartData\"\n              [labels]=\"lineChartLabels\"\n              [options]=\"lineChartOptions\"\n              [colors]=\"lineChartColors\"\n              [chartType]=\"lineChartType\"\n              (chartHover)=\"chartHovered($event)\"\n              (chartClick)=\"chartClicked($event)\"></canvas>\n  </div>\n  <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 bottom-30\">\n      <div class=\"chart-outher\"> \n          <canvas baseChart\n                  [data]=\"pieChartData\"\n                  [labels]=\"pieChartLabels\"\n                  [options]=\"pieChartOptions\"\n                  [colors]=\"pieChartColors\"\n                  [chartType]=\"pieChartType\"\n                  (chartHover)=\"chartHovered($event)\"\n                  (chartClick)=\"chartClicked($event)\"></canvas>\n      </div>  \n  </div>\n</div>\n<div class=\"col text-center\">\n  <button (click)=\"randomizeType()\" class=\"btn btn-main btn-sm\"> Toggle</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/inventarioPanel/dynamic-chart/dynamic-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicChartComponent; });
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


var DynamicChartComponent = (function () {
    function DynamicChartComponent(_appConfig) {
        this._appConfig = _appConfig;
        this.lineChartType = 'line';
        this.pieChartType = 'pie';
        this.config = this._appConfig.config;
        this.configFn = this._appConfig;
    }
    DynamicChartComponent.prototype.ngOnInit = function () {
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartData = [
            { data: [11700, 10320, 25080, 32501, 24556, 49855, 21580], label: 'Web' },
            { data: [28080, 42750, 40548, 19256, 29566, 32589, 47500], label: 'Mobile' },
        ];
        this.lineChartColors = [
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
                backgroundColor: this.configFn.rgba(this.config.colors.info, 0.5),
                borderColor: this.config.colors.info,
                pointBorderColor: this.config.colors.default,
                pointHoverBorderColor: this.config.colors.info,
                pointHoverBackgroundColor: this.config.colors.default,
                hoverBackgroundColor: this.config.colors.info
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
        this.pieChartLabels = ['Profit', 'Fees', 'Tax'];
        this.pieChartData = [570, 150, 300];
        this.pieChartColors = [
            {
                backgroundColor: [
                    this.configFn.rgba(this.config.colors.success, 0.7),
                    this.configFn.rgba(this.config.colors.warning, 0.7),
                    this.configFn.rgba(this.config.colors.danger, 0.7)
                ],
                hoverBackgroundColor: [
                    this.config.colors.success,
                    this.config.colors.warning,
                    this.config.colors.danger
                ],
                borderColor: this.config.colors.grayLight,
                borderWidth: 1,
                hoverBorderWidth: 3
            }
        ];
        this.pieChartOptions = {
            title: {
                display: true,
                text: 'Corporate Info With %',
                fontColor: this.config.colors.gray,
                fontSize: 14,
                fontStyle: 'normal'
            },
            legend: {
                labels: {
                    fontColor: this.configFn.rgba(this.config.colors.gray, 0.9),
                }
            },
            tooltips: {
                enabled: true,
                backgroundColor: this.configFn.rgba(this.config.colors.main, 0.7),
                callbacks: {
                    label: function (tooltipItem, data) {
                        var dataset = data.datasets[tooltipItem.datasetIndex];
                        var total = dataset.data.reduce(function (previousValue, currentValue, currentIndex, array) {
                            return previousValue + currentValue;
                        });
                        var currentValue = dataset.data[tooltipItem.index];
                        var precentage = Math.floor(((currentValue / total) * 100) + 0.5);
                        return data.labels[tooltipItem.index] + ': ' + precentage + '%';
                    }
                }
            }
        };
    };
    DynamicChartComponent.prototype.randomizeType = function () {
        this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
        this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
    };
    DynamicChartComponent.prototype.chartClicked = function (e) {
        // console.log(e);
    };
    DynamicChartComponent.prototype.chartHovered = function (e) {
        // console.log(e);
    };
    return DynamicChartComponent;
}());
DynamicChartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'az-dynamic-chart',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__("../../../../../src/app/pages/inventarioPanel/dynamic-chart/dynamic-chart.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* AppConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* AppConfig */]) === "function" && _a || Object])
], DynamicChartComponent);

var _a;
//# sourceMappingURL=dynamic-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/inventarioPanel/feed/feed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"feed-messages-container\" slim-scroll [slimScrollOptions]=\"{height: 513}\">\n  <div class=\"feed-message\" *ngFor=\"let message of feed\" (click)=\"expandMessage(message)\">\n    <div class=\"message-icon\" *ngIf=\"message.type == 'text-message'\">\n      <img class=\"photo-icon\" src=\"assets/img/profile/juan.png\">\n    </div>\n\n\n    <div class=\"message-icon\" *ngIf=\"message.type != 'text-message'\">\n      <img class=\"photo-icon\" src=\"assets/img/profile/juan.png\">\n    </div>\n\n\n    <div class=\"text-block text-message\">\n      <div class=\"message-header\">\n        <span class=\"author text-capitalize\">{{ message.author }}  {{ message.surname}}</span>\n      </div>\n      <div class=\"message-content line-clamp\" [ngClass]=\"{'line-clamp-2' : !message.expanded}\">\n        <span *ngIf=\"message.preview\">{{ message.header }} </span>  {{ message.text }}\n      </div>\n      <div class=\"preview\" [ngClass]=\"{'hidden': !message.expanded}\" *ngIf=\"message.preview\">\n        <a href=\"{{ message.link }}\" target=\"_blank\">\n          <img src=\"{{ ( message.preview | appPicture )}}\">\n        </a>\n      </div>\n      <div [ngClass]=\"{'hidden': !message.expanded}\" class=\"message-time\">\n        <div class=\"post-time\">\n          {{ message.time }}\n        </div>\n        <div class=\"ago-time\">\n          {{ message.ago }}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/inventarioPanel/feed/feed.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#2E0502\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#640D05\",\"gray\":\"#555\",\"gray-light\":\"#ccc\"}';\n  display: none; }\n\n/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#2E0502\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#640D05\",\"gray\":\"#555\",\"gray-light\":\"#ccc\"}';\n  display: none; }\n\n.feed-panel .card-body {\n  padding: 10px 0; }\n\n.feed-message {\n  padding: 10px 0;\n  border-bottom: 1px solid rgba(46, 5, 2, 0.2); }\n  .feed-message .hidden {\n    display: none !important; }\n  .feed-message .message-icon {\n    cursor: pointer;\n    width: 60px;\n    height: 60px;\n    float: left;\n    position: relative;\n    margin-left: 20px; }\n    .feed-message .message-icon > img, .feed-message .message-icon .media-icon {\n      border-radius: 30px;\n      width: 100%;\n      height: 100%; }\n    .feed-message .message-icon .sub-photo-icon {\n      display: inline-block;\n      padding: 4px; }\n      .feed-message .message-icon .sub-photo-icon:after {\n        content: '';\n        display: inline-block;\n        width: 22px;\n        height: 22px;\n        background-size: contain; }\n      .feed-message .message-icon .sub-photo-icon.video-message {\n        background: #bf1725; }\n        .feed-message .message-icon .sub-photo-icon.video-message:after {\n          background-image: url(\"/assets/img/feed/feed-video.svg\"); }\n      .feed-message .message-icon .sub-photo-icon.image-message {\n        background: #2d922d; }\n        .feed-message .message-icon .sub-photo-icon.image-message:after {\n          width: 21px;\n          height: 21px;\n          margin-top: 1px;\n          margin-left: 1px;\n          border-radius: 5px;\n          background-image: url(\"/assets/img/feed/feed-image.svg\"); }\n      .feed-message .message-icon .sub-photo-icon.geo-message {\n        background: #024a88; }\n        .feed-message .message-icon .sub-photo-icon.geo-message:after {\n          width: 22px;\n          height: 22px;\n          background-image: url(\"/assets/img/feed/feed-location.svg\"); }\n    .feed-message .message-icon .sub-photo-icon {\n      position: absolute;\n      width: 30px;\n      height: 30px;\n      right: -2px;\n      bottom: -4px;\n      border-radius: 15px; }\n  .feed-message .text-block {\n    cursor: pointer;\n    position: relative;\n    border-radius: 5px;\n    margin: 0 0 0 80px;\n    padding: 5px 20px;\n    color: #242424;\n    width: 280px;\n    height: 70px; }\n    .feed-message .text-block.text-message {\n      font-size: 12px;\n      width: inherit;\n      max-width: calc(100% - 80px);\n      height: inherit;\n      min-height: 60px; }\n      .feed-message .text-block.text-message:before {\n        display: block; }\n      .feed-message .text-block.text-message .message-content {\n        font-size: 12px;\n        line-height: 15px;\n        font-weight: 300; }\n    .feed-message .text-block.small-message {\n      width: 155px;\n      height: 145px; }\n      .feed-message .text-block.small-message .preview {\n        bottom: 0;\n        top: initial;\n        height: 87px; }\n        .feed-message .text-block.small-message .preview img {\n          width: 155px;\n          height: 87px;\n          border-radius: 0 0 5px 5px; }\n  .feed-message .message-header {\n    font-size: 12px;\n    padding-bottom: 5px; }\n    .feed-message .message-header .author {\n      font-size: 13px;\n      padding-right: 5px; }\n  .feed-message .message-content {\n    font-size: 18px;\n    line-height: 20px; }\n  .feed-message .preview {\n    transition: 0s linear all;\n    display: inline-block; }\n    .feed-message .preview img {\n      padding-top: 10px;\n      width: 100%;\n      height: auto;\n      float: none !important; }\n  .feed-message .message-time {\n    width: 100%;\n    left: 0;\n    font-size: 11px;\n    padding-top: 10px;\n    color: #ccc;\n    margin-bottom: 5px; }\n    .feed-message .message-time .post-time {\n      float: left; }\n    .feed-message .message-time .ago-time {\n      float: right; }\n\n.line-clamp {\n  display: block;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  position: relative;\n  line-height: 1.2;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0 !important; }\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  .line-clamp:after {\n    content: '...';\n    text-align: right;\n    bottom: 0;\n    right: 0;\n    width: 25%;\n    display: block;\n    position: absolute;\n    height: calc(1em * 1.2); } }\n\n@supports (-webkit-line-clamp: 1) {\n  .line-clamp:after {\n    display: none !important; } }\n\n.line-clamp-1 {\n  -webkit-line-clamp: 1;\n  height: calc(1em * 1.2 * 1); }\n\n.line-clamp-2 {\n  -webkit-line-clamp: 2;\n  height: calc(1em * 1.2 * 2); }\n\n.line-clamp-3 {\n  -webkit-line-clamp: 3;\n  height: calc(1em * 1.2 * 3); }\n\n.line-clamp-4 {\n  -webkit-line-clamp: 4;\n  height: calc(1em * 1.2 * 4); }\n\n.line-clamp-5 {\n  -webkit-line-clamp: 5;\n  height: calc(1em * 1.2 * 5); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/inventarioPanel/feed/feed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__feed_service__ = __webpack_require__("../../../../../src/app/pages/inventarioPanel/feed/feed.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedComponent = (function () {
    function FeedComponent(_feedService) {
        this._feedService = _feedService;
    }
    FeedComponent.prototype.ngOnInit = function () {
        this._loadFeed();
    };
    FeedComponent.prototype.expandMessage = function (message) {
        message.expanded = !message.expanded;
    };
    FeedComponent.prototype._loadFeed = function () {
        this.feed = this._feedService.getData();
    };
    return FeedComponent;
}());
FeedComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'az-feed',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__("../../../../../src/app/pages/inventarioPanel/feed/feed.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/inventarioPanel/feed/feed.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__feed_service__["a" /* FeedService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__feed_service__["a" /* FeedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__feed_service__["a" /* FeedService */]) === "function" && _a || Object])
], FeedComponent);

var _a;
//# sourceMappingURL=feed.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/inventarioPanel/feed/feed.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FeedService = (function () {
    function FeedService() {
        this._data = [
            {
                type: 'text-message',
                author: 'Juan',
                surname: 'Garcia',
                header: 'Posted new message',
                text: 'Lavado de auto matricula 234',
                time: 'Hoy 11:55 pm',
                ago: '25 minutos atras',
                expanded: false,
            },
            {
                type: 'text-message',
                author: 'Juan',
                surname: 'Garcia',
                header: 'Posted new message',
                text: 'Lavado de auto matricula 234',
                time: 'Hoy 11:55 pm',
                ago: '25 minutos atras',
                expanded: false,
            },
            {
                type: 'text-message',
                author: 'Juan',
                surname: 'Garcia',
                header: 'Posted new message',
                text: 'Lavado de auto matricula 234',
                time: 'Hoy 11:55 pm',
                ago: '25 minutos atras',
                expanded: false,
            },
            {
                type: 'text-message',
                author: 'Juan',
                surname: 'Garcia',
                header: 'Posted new message',
                text: 'Lavado de auto matricula 234',
                time: 'Hoy 11:55 pm',
                ago: '25 minutos atras',
                expanded: false,
            },
            {
                type: 'text-message',
                author: 'Juan',
                surname: 'Garcia',
                header: 'Posted new message',
                text: 'Lavado de auto matricula 234',
                time: 'Hoy 11:55 pm',
                ago: '25 minutos atras',
                expanded: false,
            },
            {
                type: 'text-message',
                author: 'Juan',
                surname: 'Garcia',
                header: 'Posted new message',
                text: 'Lavado de auto matricula 234',
                time: 'Hoy 11:55 pm',
                ago: '25 minutos atras',
                expanded: false,
            },
        ];
    }
    FeedService.prototype.getData = function () {
        return this._data;
    };
    return FeedService;
}());
FeedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], FeedService);

//# sourceMappingURL=feed.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/inventarioPanel/panel-inventario.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xl-6 col-lg-8 col-md-8 bottom-30\">\n        <div class=\"card card-danger text-center info-box\">\n         <div class=\"card-block\">            \n           <div live-tile class=\"live-tile\" data-mode=\"carousel\" data-direction=\"horizontal\" data-speed=\"750\" data-delay=\"4000\" data-height=\"93\">\n             <div>\n               <div class=\"row\">\n                 <div class=\"col-3\">\n                   <span class=\"info-box-icon\">\n                     <i class=\"fa fa-archive\"></i>\n                   </span>\n                 </div>\n                 <div class=\"col-9\">\n                   <h6 class=\"no-margin\">Productos por Terminarse </h6>\n                   <h2>{{sinStock}}</h2>\n                 </div>\n               </div>\n         \n             </div>\n           </div>\n         </div>\n       </div>\n     </div>\n    <div class=\"col-xl-6 col-lg-6 col-md-6 bottom-30\">\n      <div class=\"card card-success text-center info-box\">\n      <div class=\"card-block\">\n        <div class=\"row\">\n          <div class=\"col-3\">\n            <span class=\"info-box-icon\">\n              <i class=\"fa fa-dollar\"></i>\n            </span>\n          </div>\n          <div class=\"col-9\">\n            <h6 class=\"no-margin\">Ingresos a Inventario (Mes)</h6>\n            <h2>0</h2>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-6\">\n            <p class=\"no-margin\">Mes Pasado</p>\n            <span>0</span>\n          </div>\n          <div class=\"col-6\">\n            <p class=\"no-margin\">Ante Pasado</p>\n            <span>0</span>\n          </div>\n        </div>      \n      </div>\n    </div>\n  </div> \n\n</div>\n\n<div class=\"row\">\n\n\n    <div class=\"col-lg-12 col-sm-12 bottom-30\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>PRODUCTOS SIN STOCK O POR TERMINARSE</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>                   \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-eye\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n               <az-todo (change)=\"getSinStock($event)\" ></az-todo>\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/inventarioPanel/panel-inventario.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#2E0502\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#640D05\",\"gray\":\"#555\",\"gray-light\":\"#ccc\"}';\n  display: none; }\n\n.info-box {\n  color: #fff; }\n  .info-box .card-block {\n    padding: 1rem; }\n  .info-box .info-box-icon {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    font-size: 50px;\n    opacity: 0.9; }\n  .info-box h2, .info-box h6, .info-box span, .info-box p {\n    font-weight: 300;\n    letter-spacing: 0.03em; }\n  .info-box h6 {\n    white-space: nowrap;\n    font-size: 14px; }\n  .info-box p {\n    font-size: 14px;\n    line-height: 1; }\n\n.small-info-box {\n  padding: 8px;\n  color: #fff;\n  background-color: #248dad; }\n  .small-info-box div.media {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .small-info-box i {\n    font-size: 28px; }\n  .small-info-box h6, .small-info-box span {\n    font-weight: 400; }\n  .small-info-box h6 {\n    font-size: 14px; }\n\n.user-info-box .card-block {\n  padding: 3px; }\n  .user-info-box .card-block img {\n    width: 80px; }\n  .user-info-box .card-block h6 {\n    display: block;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    font-weight: 300; }\n  .user-info-box .card-block a {\n    font-size: 20px;\n    color: #fff; }\n\n.live-tile {\n  margin: 0;\n  width: 100%;\n  color: inherit; }\n\n.weather h2, .weather p {\n  font-weight: 300;\n  color: #fff; }\n\n.weather span {\n  color: #fff; }\n\n.weather .current-temperature {\n  font-size: 70px;\n  color: #fff;\n  display: inline-block; }\n\n.weather .degree {\n  color: #fff;\n  display: inline-block;\n  vertical-align: top;\n  margin-top: 20px;\n  font-size: 20px; }\n\n.weather .card-block {\n  padding: 0; }\n  .weather .card-block canvas {\n    display: inline-block;\n    vertical-align: middle; }\n\n.weather .line {\n  padding: 5px 15px;\n  border-bottom: 1px solid rgba(46, 5, 2, 0.2); }\n  .weather .line:last-child {\n    border: none; }\n\n.card-block.feed {\n  padding: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/inventarioPanel/panel-inventario.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__panel_inventario_service__ = __webpack_require__("../../../../../src/app/pages/inventarioPanel/panel-inventario.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(_appConfig, _dashboardService) {
        this._appConfig = _appConfig;
        this._dashboardService = _dashboardService;
        this.date = new Date();
        this.sinStock = 0;
        this.config = this._appConfig.config;
        this.configFn = this._appConfig;
        this.weatherData = _dashboardService.getWeatherData();
    }
    DashboardComponent.prototype.getSinStock = function (val) {
        this.sinStock = val;
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'az-dashboard',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__("../../../../../src/app/pages/inventarioPanel/panel-inventario.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/inventarioPanel/panel-inventario.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__panel_inventario_service__["a" /* DashboardService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* AppConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* AppConfig */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__panel_inventario_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__panel_inventario_service__["a" /* DashboardService */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=panel-inventario.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/inventarioPanel/panel-inventario.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelInventarioModule", function() { return PanelInventarioModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_endpoint_service__ = __webpack_require__("../../../../../src/app/services/endpoint.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__theme_directives_directives_module__ = __webpack_require__("../../../../../src/app/theme/directives/directives.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__theme_pipes_pipes_module__ = __webpack_require__("../../../../../src/app/theme/pipes/pipes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__panel_inventario_component__ = __webpack_require__("../../../../../src/app/pages/inventarioPanel/panel-inventario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__todo_todo_component__ = __webpack_require__("../../../../../src/app/pages/inventarioPanel/todo/todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__chat_chat_component__ = __webpack_require__("../../../../../src/app/pages/inventarioPanel/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__feed_feed_component__ = __webpack_require__("../../../../../src/app/pages/inventarioPanel/feed/feed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__datamap_datamap_component__ = __webpack_require__("../../../../../src/app/pages/inventarioPanel/datamap/datamap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dynamic_chart_dynamic_chart_component__ = __webpack_require__("../../../../../src/app/pages/inventarioPanel/dynamic-chart/dynamic-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_chart_js_dist_Chart_js__ = __webpack_require__("../../../../chart.js/dist/Chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_chart_js_dist_Chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_chart_js_dist_Chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    { path: 'panel', component: __WEBPACK_IMPORTED_MODULE_9__panel_inventario_component__["a" /* DashboardComponent */], pathMatch: 'full' }
];
var PanelInventarioModule = (function () {
    function PanelInventarioModule() {
    }
    return PanelInventarioModule;
}());
PanelInventarioModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_15_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_7__theme_directives_directives_module__["a" /* DirectivesModule */],
            __WEBPACK_IMPORTED_MODULE_8__theme_pipes_pipes_module__["a" /* PipesModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["e" /* RouterModule */].forChild(routes),
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__panel_inventario_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__todo_todo_component__["a" /* TodoComponent */],
            __WEBPACK_IMPORTED_MODULE_11__chat_chat_component__["a" /* ChatComponent */],
            __WEBPACK_IMPORTED_MODULE_12__feed_feed_component__["a" /* FeedComponent */],
            __WEBPACK_IMPORTED_MODULE_13__datamap_datamap_component__["a" /* DatamapComponent */],
            __WEBPACK_IMPORTED_MODULE_14__dynamic_chart_dynamic_chart_component__["a" /* DynamicChartComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__services_endpoint_service__["a" /* EndPointService */], __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */]
        ]
    })
], PanelInventarioModule);

//# sourceMappingURL=panel-inventario.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/inventarioPanel/panel-inventario.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardService = (function () {
    function DashboardService() {
        this.weatherData = [
            { day: 'Sunday', icon: 'clear-day', degree: '18° / 22°' },
            { day: 'Monday', icon: 'partly-cloudy-day', degree: '14° / 16°' },
            { day: 'Tuesday', icon: 'cloudy', degree: '8° / 12°' },
            { day: 'Wednesday', icon: 'rain', degree: '4° / 6°' },
            { day: 'Thursday', icon: 'sleet', degree: '-1° / 3°' },
            { day: 'Friday', icon: 'snow', degree: '-3° / -1°' },
            { day: 'Saturday', icon: 'fog', degree: '-1° / 2°' }
        ];
    }
    DashboardService.prototype.getWeatherData = function () {
        return this.weatherData;
    };
    return DashboardService;
}());
DashboardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], DashboardService);

//# sourceMappingURL=panel-inventario.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/inventarioPanel/todo/todo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"task-todo-container\">\n    <div class=\"row header\">\n              \n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <ul class=\"todo-list\" slim-scroll [slimScrollOptions]=\"{height: 349}\">\n                <li *ngFor=\"let item of sinStock\" \n                   >\n                    <span class=\"cut-with-dots\">{{ item.nombre }} Cantidad Restante: {{item.cantidad}} {{item.unidad_medida.nombre}} </span>  \n\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/inventarioPanel/todo/todo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#2E0502\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#640D05\",\"gray\":\"#555\",\"gray-light\":\"#ccc\"}';\n  display: none; }\n\n.task-todo-container .header {\n  border-bottom: 1px solid rgba(46, 5, 2, 0.2);\n  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.1);\n  padding-bottom: 20px; }\n\n.task-todo-container i.add-item-icon {\n  font-size: 18px; }\n\n.task-todo-container .todo-list {\n  padding: 0;\n  margin-top: 10px; }\n  .task-todo-container .todo-list li {\n    list-style: none;\n    font-weight: 300;\n    width: 100%;\n    line-height: 0;\n    position: relative; }\n    .task-todo-container .todo-list li.checked span:before {\n      content: \"\\F00C\"; }\n    .task-todo-container .todo-list li.active > i {\n      opacity: 1; }\n    .task-todo-container .todo-list li input[type='checkbox'] {\n      position: absolute;\n      opacity: 0;\n      z-index: 1;\n      cursor: pointer;\n      width: 100%;\n      height: 28px;\n      line-height: 28px; }\n    .task-todo-container .todo-list li span {\n      width: 100%;\n      height: 28px;\n      line-height: 28px;\n      display: inline-block;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      padding-left: 26px;\n      padding-right: 46px;\n      position: relative; }\n      .task-todo-container .todo-list li span:before {\n        font-family: FontAwesome;\n        content: \"\\F1DB\";\n        margin-left: -26px;\n        position: absolute;\n        font-size: 13px; }\n    .task-todo-container .todo-list li i {\n      position: absolute;\n      top: 4px;\n      right: 10px;\n      font-size: 20px;\n      opacity: 0;\n      z-index: 2;\n      cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/inventarioPanel/todo/todo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_service__ = __webpack_require__("../../../../../src/app/pages/inventarioPanel/todo/todo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoComponent = (function () {
    function TodoComponent(_todoService) {
        var _this = this;
        this._todoService = _todoService;
        this.newTodoText = '';
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.todoList = this._todoService.getTodoList();
        this._todoService.getStockVacio().then(function (res) {
            _this.sinStock = res;
            console.log('sin stock', _this.sinStock);
            _this.change.emit(_this.sinStock.length);
        });
    }
    return TodoComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], TodoComponent.prototype, "change", void 0);
TodoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'az-todo',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__("../../../../../src/app/pages/inventarioPanel/todo/todo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/inventarioPanel/todo/todo.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__todo_service__["a" /* TodoService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__todo_service__["a" /* TodoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__todo_service__["a" /* TodoService */]) === "function" && _b || Object])
], TodoComponent);

var _a, _b;
//# sourceMappingURL=todo.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/inventarioPanel/todo/todo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
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


var TodoService = (function () {
    function TodoService(ep) {
        this.ep = ep;
        this._todoList = [
            { text: 'Chequeo de Auto matricula : A3345' },
            { text: 'Desarme de Auto Matricula: A7677' },
        ];
    }
    TodoService.prototype.getTodoList = function () {
        return this._todoList;
    };
    TodoService.prototype.getStockVacio = function () {
        return this.ep.getStockVacio().then(function (response) {
            return response.productos;
        }, function (err) {
            console.log('error:', err);
        });
    };
    return TodoService;
}());
TodoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_endpoint_service__["a" /* EndPointService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_endpoint_service__["a" /* EndPointService */]) === "function" && _a || Object])
], TodoService);

var _a;
//# sourceMappingURL=todo.service.js.map

/***/ })

});
//# sourceMappingURL=panel-inventario.module.chunk.js.map