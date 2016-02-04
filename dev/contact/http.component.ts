import {Component} from 'angular2/core'
import {HttpTestService} from './http-test.service'

@Component({
	selector: 'http-test',
	template: `
		<button (click)="testGetReq()" class="btn btn-default">button</button>
		<p>Get Respose: {{ getResponse }}</p>
		
		<button (click)="testPostReq()" class="btn btn-default">button</button>
		<p>Get Respose: {{ postResponse }}</p>

		<button (click)="getRandomQuotes()" class="btn btn-default">Get random Quotes</button>
		<p>Quote Respose: {{ QuoteResponse }}</p>
	`,
	providers: [HttpTestService]
})
export class HttpComponent{
	
	getResponse: string;
	postResponse: string;
	QuoteResponse: string;

	constructor(private _httpService: HttpTestService) { }

	testGetReq	() {
		this._httpService.getCurrentTime()
			.subscribe(
				data => this.getResponse = JSON.stringify(data),
				error => console.log(error),
				() => console.log('FINISH')
			);
	}
	
	testPostReq() {
		this._httpService.postJSON()
			.subscribe(
				data => this.postResponse = JSON.stringify(data),
				error => this.logError(error),
				() => console.log('FINISH')
			);
	}

	getRandomQuotes() {

		this._httpService.getRandomQuote()
			.subscribe(
				data => this.QuoteResponse = data,
				error => this.logError(error),
				() => console.log('FINISH')
			);
	}

	logError(error) {
		console.log(error);
	}	
}