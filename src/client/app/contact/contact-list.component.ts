import {Component,OnInit} from 'angular2/core';
import {Contact} from './contact';
import {ContactComponent} from './contact.component';
import {ContactService} from './contact.service'

@Component({
    selector: 'contact-list',
    template: `
    	<ul>
    		<li *ngFor="#contact of contacts" (click)="onSelect(contact)"
    		[class.selected]="selectedContact === contact" >
                {{contact.firstname}} {{contact.lastname}}
            </li>
    	</ul>
         <contact *ngIf="selectedContact != null" [contact]="selectedContact"></contact>
    `,
    directives: [ContactComponent],
    providers: [ContactService],
    styles: [`
	    .selected {
	    	color:red;
	    }
    `]
})
export class ContactList implements OnInit {

    public contacts: Contact[];

    public selectedContact = null;

    constructor(private _contactService: ContactService) {

    }

    onSelect(contact) {
        this.selectedContact = contact;
    }

    getContactList(){
        this._contactService.getContactList().then((contacts: Contact[]) => this.contacts = contacts);
    }

    ngOnInit():any {
        this.contacts = this.getContactList();
    }

}
