System.register(['angular2/core', './dev-details.component', './dev.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, dev_details_component_1, dev_service_1;
    var RootComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dev_details_component_1_1) {
                dev_details_component_1 = dev_details_component_1_1;
            },
            function (dev_service_1_1) {
                dev_service_1 = dev_service_1_1;
            }],
        execute: function() {
            /* Adding DevService as a provider for the Component */
            RootComponent = (function () {
                function RootComponent(_DevService) {
                    this._DevService = _DevService;
                    this.title = 'Developers List';
                }
                RootComponent.prototype.onSelect = function (developer) { this.selectedDeveloper = developer; };
                RootComponent.prototype.getDevelopers = function () {
                    var _this = this;
                    this._DevService.getDevelopers().then(function (developers) { return _this.developers = developers; });
                };
                RootComponent.prototype.ngOnInit = function () {
                    this.getDevelopers();
                };
                RootComponent = __decorate([
                    core_1.Component({
                        selector: 'root-app',
                        template: "\n    <h2>Edureka Components - Providers useClass for a simple non-injectable class instanciation Introduction</h2>\n    <h3>{{title}}</h3>\n    <ul class=\"dev\">\n         \n      <li *ngFor=\"#developer of developers\"\n        [class.selected]=\"developer === selectedDeveloper\"\n        (click)=\"onSelect(developer)\">\n        <span class=\"spanbackground\">{{developer.name}}</span> -  {{developer.skill}}\n      </li>\n    </ul>\n    <!-- \n        Converted below section to a directive and imported as dependancy module. \n        Required variable of selected developer passed as attribute value \n    -->\n    <dev-details [selectedDeveloper]=\"selectedDeveloper\"></dev-details>\n  ",
                        styles: ["\n    .selected {\n      background-color: #ccc !important;\n      color: white;\n    }\n    .dev{\n        width: 150px;\n    }\n    .dev .spanbackground{\n        width: 50px;\n    }\n  "],
                        directives: [dev_details_component_1.DevDetailsComponent],
                        providers: [core_1.provide(dev_service_1.DevService, { useClass: dev_service_1.DevService })]
                    }), 
                    __metadata('design:paramtypes', [dev_service_1.DevService])
                ], RootComponent);
                return RootComponent;
            })();
            exports_1("RootComponent", RootComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map