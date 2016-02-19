import {Component, OnInit} from 'angular2/core';
import {ContactService} from './contact.service';
import {Contact} from './contact';
import {Router, RouteParams} from 'angular2/router';
import {FormBuilder, Validators, ControlGroup} from 'angular2/common';

import {ControlMessages} from '../control-messages.component';
import {ValidationService} from '../services/validation.service';


@Component({
	template:`
		<form [ngFormModel]="myForm" (ngSubmit)="onSubmit(myForm.value)">
            <p><label>First Name : </label>
            <input type="text" ngControl="firstname" > 
            <control-messages control="firstname"></control-messages>
            </p>
            <p><label>Last Name : </label>
            <input type="text" ngControl="lastname" > 
            <control-messages control="lastname"></control-messages>
            </p>
            <p><label>Email Name : </label>
            <input type="text" ngControl="email"> 
            <control-messages control="email"></control-messages>
            </p>
            <p><label>Password: </label>
            <input type="password" ngControl="password"> 
            <control-messages control="password"></control-messages>
            </p>
            <p><button [disabled]="!myForm.valid">Create New Contact</button></p>
        </form>
	`,
	styles: [`
		.error {border: 1px solid red;}
	`],
	providers: [ContactService],
	directives: [ControlMessages]
})

export class NewContact {

	myForm: ControlGroup;
	
	constructor(private _ContactService: ContactService, private _router: Router, private _routeParams: RouteParams, private _formBuilder : FormBuilder) {
		this.myForm = this._formBuilder.group({
			'firstname': ['', Validators.compose([Validators.required, ValidationService.startsWithNumber]), ValidationService.usernameTaken],
			'lastname': [this._routeParams.get('lastname'), Validators.required],
			'email': ['', Validators.compose([Validators.required, ValidationService.emailValidator])],
			'password': ['', Validators.compose([Validators.required, ValidationService.passwordValidator])]
		});
		
	}

	onSubmit(value){
		this._ContactService.createNewContact(value);
		this._router.navigate(['Contacts']);
	}
	

	/*ngOnInit(): any {
		this.myForm = this._formBuilder.group({
			'firstname': ['', Validators.compose([Validators.required, ValidationService.startsWithNumber]), ValidationService.usernameTaken],
			'lastname': [this._routeParams.get('lastname'), Validators.required],
			'email': ['', Validators.compose([Validators.required, ValidationService.emailValidator])],
			'password': ['', Validators.compose([Validators.required, ValidationService.passwordValidator])]
		});
	}*/
}

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