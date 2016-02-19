import {Component} from 'angular2/core';
import {Contact} from './contact';
import {Router} from 'angular2/router';


@Component({
    selector: 'contact',
    template: `
        <div>
            <p><label>First Name : </label><input type="text" [(ngModel)]="contact.firstname" > </p>
            <p><label>Last Name : </label><input type="text" [(ngModel)]="contact.lastname" > </p>
            <p><label>Email Name : </label><input type="text" [(ngModel)]="contact.email" > </p>
            <p><label>Password : </label><input type="password" [(ngModel)]="contact.password" > </p>
            <p><button type="button" (click)="createNew()" class="btn btn-default">Create New contact from this Conact</button></p>
        </div>
    `,
    inputs: ['contact']
})
export class ContactComponent {

    public contact: Contact;

    constructor(private _router: Router){ }

    createNew(){
        
        this._router.navigate(['NewContactWithExist', { lastname: this.contact.lastname }]);
    }



}