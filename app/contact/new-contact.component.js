System.register(['angular2/core', './contact.service', 'angular2/router', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, contact_service_1, router_1, common_1;
    var NewContact;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            NewContact = (function () {
                function NewContact(_ContactService, _router, _routeParams, _formBuilder) {
                    this._ContactService = _ContactService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._formBuilder = _formBuilder;
                }
                NewContact.prototype.onSubmit = function (value) {
                    this._ContactService.createNewContact(value);
                    this._router.navigate(['Contacts']);
                };
                NewContact.prototype.ngOnInit = function () {
                    this.myForm = this._formBuilder.group({
                        'firstname': ['', common_1.Validators.required],
                        'lastname': [this._routeParams.get('lastname'), common_1.Validators.required],
                        'email': ['', common_1.Validators.required]
                    });
                };
                NewContact = __decorate([
                    core_1.Component({
                        template: "\n\t\t<form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit(myForm.value)\">\n            <p><label>First Name : </label>\n            <input type=\"text\" \n            \t\n\t            [ngFormControl]=\"myForm.controls['firstname']\" > \n            </p>\n            <p><label>Last Name : </label>\n            <input type=\"text\" \n            \t\n\t            [ngFormControl]=\"myForm.controls['lastname']\"> \n            </p>\n            <p><label>Email Name : </label>\n            <input type=\"text\" \n            \t\n\t            [ngFormControl]=\"myForm.controls['email']\"> \n            </p>\n            <p><button [disabled]=\"!myForm.valid\">Create New Contact</button></p>\n        </form>\n\t",
                        styles: ["\n\t\t.error {border: 1px solid red;}\n\t"],
                        providers: [contact_service_1.ContactService]
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService, router_1.Router, router_1.RouteParams, common_1.FormBuilder])
                ], NewContact);
                return NewContact;
            })();
            exports_1("NewContact", NewContact);
        }
    }
});
//////////////////////////////////////////////////////
// 2. Bit Advance way WORK WITH FROM: ngControl this dont need any dependency
//////////////////////////////////////////////////////
// @Component({
// 	template: `
// 		<form #newContactForm="ngForm" (ngSubmit)="onSubmit()">
//             <p><label>First Name : </label><input type="text" required ngControl="firstname" [(ngModel)]="newContact.firstname" > <span *ngIf="!firstname.valid">Field is required</span></p>
//             <p><label>Last Name : </label><input type="text" required ngControl="lastname" [(ngModel)]="newContact.lastname"> </p>
//             <p><label>Email Name : </label><input type="text" required ngControl="email" [(ngModel)]="newContact.email"> </p>
//             <p><button [disabled]="!newContactForm.form.valid">Create New Contact</button></p>
//         </form>
// 	`,
// 	styles: [`
// 		.ng-invalid {border: 1px solid red;}
// 	`],
// 	providers: [ContactService]
// })
// export class NewContact {
// 	public newContact: Contact;
// 	constructor(private _ContactService: ContactService, private _router: Router, private _routeParams: RouteParams) { }
// 	onSubmit() {
// 		this._ContactService.createNewContact(this.newContact);
// 		this._router.navigate(['Contacts']);
// 	}
// 	ngOnInit(): any {
// 		this.newContact = { firstname: "", lastname: this._routeParams.get('lastname'), email: "" };
// 	}
// }
//////////////////////////////////////////////////////
// 1. BASIC WAY TO WORK WITH FROM: USING LOCAL VARIABLES
//////////////////////////////////////////////////////
// @Component({
// 	template: `
// 		<div>
//             <p><label>First Name : </label><input type="text" #firstname > </p>
//             <p><label>Last Name : </label><input type="text" #lastname value="{{passsedlastname}}"> </p>
//             <p><label>Email Name : </label><input type="text" #email > </p>
//             <p><button (click)="addNewContact(firstname.value, lastname.value, email.value)">Create New Contact</button></p>
//         </div>
// 	`,
// 	providers: [ContactService]
// })
// export class NewContact {
// 	public passsedlastname = "asdasd";
// 	constructor(private _ContactService: ContactService, private _router: Router, private _routeParams: RouteParams) { }
// 	addNewContact(firstname, lastname, email) {
// 		this._ContactService.createNewContact(new Contact(firstname, lastname, email));
// 		this._router.navigate(['Contacts']);
// 	}
// 	ngOnInit(): any {
// 		this.passsedlastname = this._routeParams.get('lastname');
// 	}
// } 

//# sourceMappingURL=new-contact.component.js.map
