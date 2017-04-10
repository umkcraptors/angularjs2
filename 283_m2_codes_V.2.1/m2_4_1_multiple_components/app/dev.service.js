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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var model_developers_1 = require('./model-developers');
var core_1 = require('@angular/core');
/* Using Injector within a normal class to create a Injector Object of Factory type */
/* Registering a multiple provider values within Injector object. */
/* The provider will return an array of strings */
/* After Injecting DevValueMultiService to Service/Factory/Component you can access the value as DevValueMultiService.injectoreg.get("Strings") */
/* The result of the above get will be ["String1","String2"] */
var provider = { provide: 'someTokenMulti', useValue: 'someValue1', multi: true };
var provider2 = { provide: 'someTokenMulti', useValue: 'someValue2', multi: true };
var provider3 = { provide: 'noMulti', useValue: 'noMultiValue' };
var DevValueMultiService = (function () {
    function DevValueMultiService() {
        this.injectoreg = core_1.ReflectiveInjector.resolveAndCreate([
            provider, provider2, provider3
        ]);
    }
    return DevValueMultiService;
}());
exports.DevValueMultiService = DevValueMultiService;
exports.serviceFactory = function () {
    /* Do your value or object conversion OR pre-processing here */
    return { DEV: model_developers_1.DEVELOPERS };
};
var factoryProvider = { provide: 'myFactory', useFactory: exports.serviceFactory, deps: [] };
var DevValueService = (function () {
    function DevValueService() {
        this.injectoreg = core_1.ReflectiveInjector.resolveAndCreate([
            factoryProvider
        ]);
    }
    return DevValueService;
}());
exports.DevValueService = DevValueService;
/* Injectable annotation to create a service */
var DevService = (function () {
    function DevService(_DevValueService) {
        this._DevValueService = _DevValueService;
    }
    /* The DevValueService can be private or public depending on need to expose service */
    /* getDevelopers function within Service using Provider Value */
    DevService.prototype.getDevelopers = function () {
        return Promise.resolve(this._DevValueService.injectoreg.get('myFactory').DEV);
    };
    /* Mocking getDevelopers as to be from REST API and optionally use this to mock instead */
    DevService.prototype.getDevelopersSlowly = function () {
        return new Promise(function (resolve) {
            return setTimeout(function () { return resolve(model_developers_1.DEVELOPERS); }, 2000);
        } // 2 seconds
        );
    };
    DevService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(DevValueService)), 
        __metadata('design:paramtypes', [Object])
    ], DevService);
    return DevService;
}());
exports.DevService = DevService;
//# sourceMappingURL=dev.service.js.map