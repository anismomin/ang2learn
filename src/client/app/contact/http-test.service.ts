import {Injectable} from 'angular2/core'
import { Http, Headers } from 'angular2/http';
import 'rxjs/add/operator/map'

@Injectable()
export class HttpTestService {

	constructor(public http: Http){}

	getCurrentTime(){
		return this.http.get('http://date.jsontest.com')
			.map(res => res.json());
	}

	postJSON() {
		var json = JSON.stringify({ var1: 'testing', var2: 55 });
		var params = 'json=' + json;
		var headers = new Headers();
		headers.append('content-type', 'application/x-www-form-urlencoded');

		return this.http.post('http://validate.jsontest.com', params, {
			headers: headers
		})
		.map(res => res.json());
	}

	getRandomQuote(){
		return this.http.get('http://localhost:4000/api/random-quote')
			.map(res => res.text());
		
	}

}