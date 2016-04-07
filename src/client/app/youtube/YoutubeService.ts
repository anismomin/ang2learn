import  {Injectable} from 'angular2/core'
import {Http, Response} from 'angular2/http'
import {YoutubeI} from './YoutubeI';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/timeout';

@Injectable()
export class YoutubeService {

	private youtubeApiKey = 'AIzaSyDMIZMsgAYYbAgzlY-SaYcOsBOfj7kmg_4';
	private youtubeUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=tutsplus&type=video&key=' + this.youtubeApiKey;

	constructor(private _http: Http) {

	}

	getVideos() {
		return this._http.get(this.youtubeUrl)
			.map(res => <YoutubeI[]>res.json().items)
			.do(data => console.log(data))
			.catch(this.errorHandler);
	}


	private errorHandler(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}
}