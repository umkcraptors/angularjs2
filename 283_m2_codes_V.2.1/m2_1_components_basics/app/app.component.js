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
/* Import the Component Dependency from Angular Core */
var core_1 = require('@angular/core');
/* Components annotation declare metadata for the components */
/* Components are Directives with functionality and view */
/* Template or TemplateUrl provide the views or template for the component */
/* Styles are isolated to Components and can be used without leaking outside the template */
var RootComponent = (function () {
    function RootComponent() {
        this.title = 'Developers List';
        this.developers = DEVELOPERS;
    }
    RootComponent.prototype.onSelect = function (developer) { this.selectedDeveloper = developer; };
    RootComponent = __decorate([
        core_1.Component({
            selector: 'root-app',
            template: "\n    <h3>{{title}}</h3>\n    <ul class=\"dev\">\n    \n    <!-- *ngFor will repeat the developers similar to ngRepeat of v1.x -->    \n    <!-- [] provides data binding -->\n    <!-- () provides event binding for model function onSelect in class. Restricted to component and does not bubble -->   \n     \n      <li *ngFor=\"let developer of developers\"\n        [class.selected]=\"developer === selectedDeveloper\"\n        (click)=\"onSelect(developer)\">\n        <span class=\"spanbackground\">{{developer.name}}</span> -  {{developer.skill}}\n      </li>\n    </ul>\n    \n    <!-- *ngIf Below will be printed only if above developer is selected -->\n    \n    <div *ngIf=\"selectedDeveloper\">\n      <h2>{{selectedDeveloper.skill}} Profile</h2>\n      <div><label>id: </label>{{selectedDeveloper.name}}</div>\n      <div>\n        <label>Skill: </label>\n        \n    <!-- [()] provides two way binding -->  \n\n        <input [(ngModel)]=\"selectedDeveloper.skill\" [ngModelOptions]=\"{standalone:true}\" placeholder=\"skill\"/>\n      </div>\n    </div>\n  ",
            styles: ["\n    .selected {\n      background-color: #ccc !important;\n      color: white;\n    }\n    .dev{\n        width: 150px;\n    }\n    .dev .spanbackground{\n        width: 50px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], RootComponent);
    return RootComponent;
}());
exports.RootComponent = RootComponent;
/* Developer is the type of Array which is hard coded within the component module to be used  */
var DEVELOPERS = [
    { "name": 11, "skill": "Java Dev" },
    { "name": 12, "skill": "C++ Dev" },
    { "name": 13, "skill": "Python Dev" },
    { "name": 14, "skill": "NodeJS Dev" }
];
//# sourceMappingURL=app.component.js.map