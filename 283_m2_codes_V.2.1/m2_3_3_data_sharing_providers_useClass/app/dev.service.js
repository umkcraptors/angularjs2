"use strict";
var model_developers_1 = require('./model-developers');
/* Normal class export without injectable declaration */
var DevService = (function () {
    function DevService() {
    }
    /* getDevelopers function within service */
    DevService.prototype.getDevelopers = function () {
        return Promise.resolve(model_developers_1.DEVELOPERS);
    };
    /* Mocking getDevelopers as to be from REST API */
    DevService.prototype.getDevelopersSlowly = function () {
        return new Promise(function (resolve) {
            return setTimeout(function () { return resolve(model_developers_1.DEVELOPERS); }, 2000);
        } // 2 seconds
        );
    };
    return DevService;
}());
exports.DevService = DevService;
//# sourceMappingURL=dev.service.js.map