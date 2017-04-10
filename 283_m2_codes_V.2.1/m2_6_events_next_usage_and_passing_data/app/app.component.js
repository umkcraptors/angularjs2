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
/* Importing ngOnInit from Angular Core */
var core_1 = require('@angular/core');
/* Importing DevService */
var dev_service_1 = require('./dev.service');
/* Adding DevService as a provider for the Component */
var RootComponent = (function () {
    function RootComponent(_DevService) {
        this._DevService = _DevService;
        this.title = 'Developers List';
    }
    RootComponent.prototype.onSelect = function (event) { this.selectedDeveloper = event.value; };
    RootComponent = __decorate([
        core_1.Component({
            selector: 'root-app',
            template: "\n    <h2>Edureka Components - Using Providers to create Factory - Introduction</h2>\n    <h3>{{title}}</h3>\n    <dev-table (clickevent)=\"onSelect($event)\"></dev-table>\n    <!-- \n        Converted below section to a directive and imported as dependancy module. \n        Required variable of selected developer passed as attribute value \n    -->\n    <dev-details [selectedDeveloper]=\"selectedDeveloper\"></dev-details>\n  ",
            styles: ["\n    .selected {\n      background-color: #ccc !important;\n      color: white;\n    }\n    .dev{\n        width: 150px;\n    }\n    .dev .spanbackground{\n        width: 50px;\n    }\n  "],
        }), 
        __metadata('design:paramtypes', [dev_service_1.DevService])
    ], RootComponent);
    return RootComponent;
}());
exports.RootComponent = RootComponent;
//# sourceMappingURL=app.component.js.map