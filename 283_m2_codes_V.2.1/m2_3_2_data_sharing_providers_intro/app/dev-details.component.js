System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var DevDetailsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /* Selected Developer is added to Component Decorator as input dependancy for component */
            DevDetailsComponent = (function () {
                function DevDetailsComponent() {
                }
                DevDetailsComponent = __decorate([
                    core_1.Component({
                        selector: 'dev-details',
                        template: "\n    <!-- *ngIf will remove the template if Selected Developer is blank  -->\n    <div *ngIf=\"selectedDeveloper\">\n      <h2>{{selectedDeveloper.skill}} Profile</h2>\n      <div><label>id: </label>{{selectedDeveloper.name}}</div>\n      <div>\n        <label>Skill: </label>\n        <input [(ngModel)]=\"selectedDeveloper.skill\" placeholder=\"skill\"/>\n      </div>\n    </div>    \n  ",
                        inputs: ['selectedDeveloper']
                    }), 
                    __metadata('design:paramtypes', [])
                ], DevDetailsComponent);
                return DevDetailsComponent;
            })();
            exports_1("DevDetailsComponent", DevDetailsComponent);
        }
    }
});
//# sourceMappingURL=dev-details.component.js.map