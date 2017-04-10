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
var RootComponent = (function () {
    function RootComponent() {
        this.title = 'Developers List';
        this.developers = DEVELOPERS;
    }
    RootComponent.prototype.onSelect = function (developer) { this.selectedDeveloper = developer; };
    RootComponent = __decorate([
        core_1.Component({
            selector: 'root-app',
            template: "\n    <h2>Edureka Multiple Components - Single Child</h2>\n    <h3>{{title}}</h3>\n    <ul class=\"dev\">\n         \n      <li *ngFor=\"let developer of developers\"\n        [class.selected]=\"developer === selectedDeveloper\"\n        (click)=\"onSelect(developer)\">\n        <span class=\"spanbackground\">{{developer.name}}</span> -  {{developer.skill}}\n      </li>\n    </ul>\n    <!-- \n        Converted below section to a directive and imported as dependancy module. \n        Required variable of selected developer passed as attribute value \n    -->\n    <dev-details [selectedDeveloper]=\"selectedDeveloper\"></dev-details>\n  ",
            styles: ["\n    .selected {\n      background-color: #ccc !important;\n      color: white;\n    }\n    .dev{\n        width: 150px;\n    }\n    .dev .spanbackground{\n        width: 50px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], RootComponent);
    return RootComponent;
}());
exports.RootComponent = RootComponent;
var DEVELOPERS = [
    { "name": 11, "skill": "Java Dev" },
    { "name": 12, "skill": "C++ Dev" },
    { "name": 13, "skill": "Python Dev" },
    { "name": 14, "skill": "NodeJS Dev" }
];
//# sourceMappingURL=app.component.js.map