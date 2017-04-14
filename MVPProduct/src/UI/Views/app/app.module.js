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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var app_routes_1 = require('./routes/app.routes');
var app_component_1 = require('./app.component');
var header_1 = require('../app/header/header');
var marketer_component_1 = require('../app/marketer/marketer.component');
var consumer_component_1 = require('../app/consumer/consumer.component');
var supplier_component_1 = require('../app/supplier/supplier.component');
var product_component_1 = require('../app/product/product.component');
var supplier_product_component_1 = require('../app/supplier_product/supplier_product.component');
var marketer_product_component_1 = require('../app/marketer_product/marketer_product.component');
var home_component_1 = require('../app/Home/home.component');
//import { EmployeeService } from '../app/Service/Services';
//import { routerTransition } from '../app/router.transition/router.transition';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, common_1.CommonModule, forms_1.FormsModule, app_routes_1.routing, http_1.HttpModule],
            declarations: [app_component_1.AppComponent, header_1.headerComponent, marketer_component_1.marketerComponent,
                consumer_component_1.consumerComponent, supplier_component_1.supplierComponent, product_component_1.productComponent, supplier_product_component_1.supplierPComponent, marketer_product_component_1.marketerPComponent, home_component_1.homeComponent],
            providers: [app_routes_1.appRoutingProviders],
            exports: [],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map