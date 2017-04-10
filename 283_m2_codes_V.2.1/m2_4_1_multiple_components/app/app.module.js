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
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var dev_details_component_1 = require('./dev-details.component');
var dev_table_component_1 = require('./dev-table.component');
/* Importing DevService */
var dev_service_1 = require('./dev.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, common_1.CommonModule],
            exports: [],
            declarations: [app_component_1.RootComponent, dev_details_component_1.DevDetailsComponent, dev_table_component_1.DevTableComponent],
            providers: [{ provide: dev_service_1.DevService, useClass: dev_service_1.DevService }, dev_service_1.DevValueService],
            bootstrap: [app_component_1.RootComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
/* Providers will create the instance as service of normal class to be used across app. Dont instantiate again to use as singleton */
/* You can use useValue, useClass for value and service class respectively */
/* You can use useExisting if the provider or service has already been instanciated */ 
//# sourceMappingURL=app.module.js.map