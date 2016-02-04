System.register(['angular2/core', './contact.component', './contact.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, contact_component_1, contact_service_1;
    var ContactList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            }],
        execute: function() {
            ContactList = (function () {
                function ContactList(_contactService) {
                    this._contactService = _contactService;
                    this.selectedContact = null;
                }
                ContactList.prototype.onSelect = function (contact) {
                    this.selectedContact = contact;
                };
                ContactList.prototype.getContactList = function () {
                    var _this = this;
                    this._contactService.getContactList().then(function (contacts) { return _this.contacts = contacts; });
                };
                ContactList.prototype.ngOnInit = function () {
                    this.contacts = this.getContactList();
                };
                ContactList = __decorate([
                    core_1.Component({
                        selector: 'contact-list',
                        template: "\n    \t<ul>\n    \t\t<li *ngFor=\"#contact of contacts\" (click)=\"onSelect(contact)\"\n    \t\t[class.selected]=\"selectedContact === contact\" >\n                {{contact.firstname}} {{contact.lastname}}\n            </li>\n    \t</ul>\n         <contact *ngIf=\"selectedContact != null\" [contact]=\"selectedContact\"></contact>\n    ",
                        directives: [contact_component_1.ContactComponent],
                        providers: [contact_service_1.ContactService],
                        styles: ["\n\t    .selected {\n\t    \tcolor:red;\n\t    }\n    "]
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService])
                ], ContactList);
                return ContactList;
            })();
            exports_1("ContactList", ContactList);
        }
    }
});

//# sourceMappingURL=contact-list.component.js.map
