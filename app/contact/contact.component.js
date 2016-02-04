System.register(['angular2/core', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var ContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ContactComponent = (function () {
                function ContactComponent(_router) {
                    this._router = _router;
                }
                ContactComponent.prototype.createNew = function () {
                    this._router.navigate(['NewContactWithExist', { lastname: this.contact.lastname }]);
                };
                ContactComponent = __decorate([
                    core_1.Component({
                        selector: 'contact',
                        template: "\n        <div>\n            <p><label>First Name : </label><input type=\"text\" [(ngModel)]=\"contact.firstname\" > </p>\n            <p><label>Last Name : </label><input type=\"text\" [(ngModel)]=\"contact.lastname\" > </p>\n            <p><label>Email Name : </label><input type=\"text\" [(ngModel)]=\"contact.email\" > </p>\n            <p><button type=\"button\" (click)=\"createNew()\" class=\"btn btn-default\">Create New contact from this Conact</button></p>\n        </div>\n    ",
                        inputs: ['contact']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], ContactComponent);
                return ContactComponent;
            })();
            exports_1("ContactComponent", ContactComponent);
        }
    }
});

//# sourceMappingURL=contact.component.js.map
