import {Injectable} from 'angular2/core'
import {CONTACTS} from './mock-contacts'
import {Contact} from './contact';

@Injectable()
export class ContactService {
	
	getContactList(){
		return Promise.resolve(CONTACTS);
	}

	createNewContact(contact: Contact) {
		return Promise.resolve(CONTACTS).then( (contacts: Contact[]) => {
			contacts.push(contact);
		});
	}
}