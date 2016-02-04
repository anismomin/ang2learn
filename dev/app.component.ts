import {Component} from 'angular2/core';
import {Contact} from './contact/contact'
import {ContactList} from './contact/contact-list.component'
import {NewContact} from './contact/new-contact.component'
import {HttpComponent} from './contact/http.component'
import {ROUTER_DIRECTIVES} from 'angular2/router'
import {RouteConfig, } from 'angular2/router'

@Component({
    selector: 'app',
    template: `
        <header>
            <nav>
                <a [routerLink]="['Contacts']">Contactss</a>
                <a [routerLink]="['NewContact']">New Contact</a>
            </nav>
        </header>       
        <div>
            <router-outlet></router-outlet>
        </div> 
        <http-test></http-test>
    `,
    directives: [ContactList, HttpComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/', name: 'Contacts', component: ContactList, useAsDefault: true},
    {path: '/newcontact', name: 'NewContact', component: NewContact},
    { path: '/newcontact/:lastname', name: 'NewContactWithExist', component: NewContact }  
    
])
export class AppComponent {


}

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