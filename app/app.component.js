System.register(['angular2/core', './contact/contact-list.component', './contact/new-contact.component', './contact/http.component', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, contact_list_component_1, new_contact_component_1, http_component_1, router_1, router_2;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_list_component_1_1) {
                contact_list_component_1 = contact_list_component_1_1;
            },
            function (new_contact_component_1_1) {
                new_contact_component_1 = new_contact_component_1_1;
            },
            function (http_component_1_1) {
                http_component_1 = http_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "\n        <header>\n            <nav>\n                <a [routerLink]=\"['Contacts']\">Contactss</a>\n                <a [routerLink]=\"['NewContact']\">New Contact</a>\n            </nav>\n        </header>       \n        <div>\n            <router-outlet></router-outlet>\n        </div> \n        <http-test></http-test>\n    ",
                        directives: [contact_list_component_1.ContactList, http_component_1.HttpComponent, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_2.RouteConfig([
                        { path: '/', name: 'Contacts', component: contact_list_component_1.ContactList, useAsDefault: true },
                        { path: '/newcontact', name: 'NewContact', component: new_contact_component_1.NewContact },
                        { path: '/newcontact/:lastname', name: 'NewContactWithExist', component: new_contact_component_1.NewContact }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
/*
// with Components
@Component({
    selector: 'app',
    template: `
        <contact-list></contact-list>
    `,
    directives: [ContactList]
})
export class AppComponent {

  
}


/*
// with Array of Contacts
@Component({
    selector: 'app',
    template: `
        <ul>
            <li *ngFor="#contact of contacts"  (click)="onSelect(contact)"
            [class.selected]="showDetail === true" >{{contact.firstname}} {{contact.lastname}}</li>
        </ul>
        <contact-list></contact-list>
        <input type="text" [(ngModel)]="selectedContact.firstname" >
        <div>
            <h1>{{selectedContact.firstname}}</h1>
            <p>{{selectedContact.email}}</p>
        </div>
    `,
    styles: [
        `
        .selected {
            color:red;
        }
    `
    ]
})
export class AppComponent {

    public contacts: Contact[];

    public selectedContact = {};

    constructor() {

        this.contacts = [
            new Contact('anis', 'momin', 'anismomin@hotmail.com'),
            new Contact('sahil', 'momin', 'sahilmomin@hotmail.com'),
            new Contact('hafeez', 'momin', 'hafeezmomin@hotmail.com'),
            new Contact('nisar', 'momin', 'nisarmomin@hotmail.com'),
            new Contact('ateeq', 'momin', 'ateeqmomin@hotmail.com'),
            new Contact('inayat', 'momin', 'inayatmomin@hotmail.com'),
        ]
    }

    onSelect(contact) {
        this.selectedContact = contact;
    }

}



/*
// with single Contact
@Component({
    selector: 'app',
    template: `
        <h3 (click)="onSelect()"
        [class.selected]="showDetail === true"
        >{{contact.firstname}} {{contact.lastname}}</h3>
        <input type="text" [(ngModel)]="contact.firstname" >
        <div *ngIf="showDetail === true">
            <h1>{{contact.firstname}}</h1>
            <p>{{contact.email}}</p>
        </div>
    `,
    styles: [
    `
        .selected {
            color:red;
        }
    `
    ]
})
export class AppComponent {
    public contact = new Contact('anis', 'momin', 'anismomin@hotmail.com');

    public showDetail = false;

    onSelect(){
        this.showDetail = true;
    }

}*/ 

//# sourceMappingURL=app.component.js.map
