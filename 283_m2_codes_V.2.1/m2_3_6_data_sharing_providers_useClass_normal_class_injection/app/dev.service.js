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
var DevValueService = (function () {
    function DevValueService() {
    }
    DevValueService.prototype.getDevelopers = function () {
        return model_developers_1.DEVELOPERS;
    };
    return DevValueService;
}());
exports.DevValueService = DevValueService;
/* Injectable annotation to create a service */
/* Demonstrating how to use @Inject with constructor and using provider based instanciation of the class */
var DevService = (function () {
    function DevService(_DevValueService) {
        this._DevValueService = _DevValueService;
    }
    /* Using/Injecting the class */
    /* DevValueService is not declared as a Injectable right now but a normal class with some functions. */
    /* However, we use provider to create a instance of it. Usage as singleton depends on how you call this class; whether with providers or use new instance everytime. */
    /* This class is instanciated with provider in the app.components.ts and injected here using contructor */
    /* The DevValueService can be private or public depending on need to expose service */
    /* getDevelopers function within Service using Provider Value */
    DevService.prototype.getDevelopers = function () {
        return Promise.resolve(this._DevValueService.getDevelopers());
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
        __metadata('design:paramtypes', [DevValueService])
    ], DevService);
    return DevService;
}());
exports.DevService = DevService;
//# sourceMappingURL=dev.service.js.map