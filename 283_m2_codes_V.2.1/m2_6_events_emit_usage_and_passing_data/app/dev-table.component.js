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
var dev_service_1 = require('./dev.service');
var DevTableComponent = (function () {
    function DevTableComponent(_DevService) {
        this._DevService = _DevService;
        this.clickevent = new core_1.EventEmitter();
    }
    DevTableComponent.prototype.onSelect = function (developer) {
        this.selectedDeveloper = developer;
        this.clickevent.emit({ value: this.selectedDeveloper });
    };
    DevTableComponent.prototype.getDevelopers = function () {
        var _this = this;
        this._DevService.getDevelopers().then(function (developers) { return _this.developers = developers; });
    };
    DevTableComponent.prototype.ngOnInit = function () {
        this.getDevelopers();
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DevTableComponent.prototype, "clickevent", void 0);
    DevTableComponent = __decorate([
        core_1.Component({
            selector: 'dev-table',
            template: "\n    <ul class=\"dev\">\n      <li *ngFor=\"let developer of developers\"\n        [class.selected]=\"developer === selectedDeveloper\"\n        (click)=\"onSelect(developer)\">\n        <span class=\"spanbackground\">{{developer.name}}</span> -  {{developer.skill}}\n      </li>\n    </ul>  \n  ",
            styles: ["\n    .selected {\n      background-color: #ccc !important;\n      color: white;\n    }\n    .dev{\n        width: 150px;\n    }\n    .dev .spanbackground{\n        width: 50px;\n    }\n  "],
            providers: [dev_service_1.DevService],
        }), 
        __metadata('design:paramtypes', [dev_service_1.DevService])
    ], DevTableComponent);
    return DevTableComponent;
}());
exports.DevTableComponent = DevTableComponent;
//# sourceMappingURL=dev-table.component.js.map