System.register(['./model-developers'], function(exports_1) {
    var model_developers_1;
    var DevService;
    return {
        setters:[
            function (model_developers_1_1) {
                model_developers_1 = model_developers_1_1;
            }],
        execute: function() {
            /* Normal class export without injectable declaration */
            DevService = (function () {
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
                     // 2 seconds
                    );
                };
                return DevService;
            })();
            exports_1("DevService", DevService);
        }
    }
});
//# sourceMappingURL=dev.service.js.map