"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.onSave = function (value) {
        alert("In Progress");
        /*
          $Http({
          method: 'GET',  // when server is ready for save use POST
          url: '/someUrl' // enter 192.168.1.128 url link
        }).then(function successCallback(response) {
            alert(response);
            // handle the json respose and show the message to user
          }, function errorCallback(response) {
            alert(response);
            // handle the json respose and show the error message to user
          });
            */
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: "app/app.component.html",
        styles: ["input.ng-invalid{border-left:5px solid red}\n           input.ng-valid{border-left:5px solid green}\n  "]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map