import {Component, OnInit} from 'angular2/core'
import {YoutubeService} from './youtubeService'
import {Observable} from 'rxjs/Observable'
import {YoutubeI} from './YoutubeI';

@Component({
	selector : 'youtube',
	templateUrl: './app/youtube/youtube.html',
	providers: [YoutubeService]
})
export class YoutubeComponent implements OnInit {


	errorMessage: string;
    videos: YoutubeI[];
    selectedID: string;
    vidLink: string;
    display: string;

	constructor(private _youtubeService :YoutubeService) {

	}	

	ngOnInit() { this.getVideos(); }

	vidSelect(video: string) {
        this.selectedID = video;
        this.vidLink = `https://www.youtube.com/embed/${this.selectedID}`;
    }

	getVideos() {
		this._youtubeService.getVideos()
			.subscribe(
			videos => this.videos = videos,
			error => this.errorMessage = <any>error
			);

	}

    goBack() {

        this.vidLink = null;

    }

	
}


///////////////////////////////////
//youtube Get video Query response 
///////////////////////////////////
/*{
"kind": "youtube#searchListResponse",
"etag": "\"q5k97EMVGxODeKcDgp8gnMu79wM/0gR4uYY7vjz-vVrkRs4yfIjjZ60\"",
	"nextPageToken": "CAMQAA",
		"regionCode": "PK",
			"pageInfo": {
"totalResults": 49141,
	"resultsPerPage": 3
},
"items": [
{
	"kind": "youtube#searchResult",
	"etag": "\"q5k97EMVGxODeKcDgp8gnMu79wM/MupY-7Lb-AA4_0MaCT14WN0WkAk\"",
	"id": {
		"kind": "youtube#video",
		"videoId": "qF5yiEMmfNg"
	},
	"snippet": {
		"publishedAt": "2015-02-17T16:30:01.000Z",
		"channelId": "UCN9hOR5EPelzxE5P0ygOlKA",
		"title": "Creative Retouching Course - TutsPlus",
		"description": "Link to course: https://design.tutsplus.com/courses/advanced-retouching-techniques-for-advertisements Behance page: ...",
		"thumbnails": {
			"default": {
				"url": "https://i.ytimg.com/vi/qF5yiEMmfNg/default.jpg",
				"width": 120,
				"height": 90
			},
			"medium": {
				"url": "https://i.ytimg.com/vi/qF5yiEMmfNg/mqdefault.jpg",
				"width": 320,
				"height": 180
			},
			"high": {
				"url": "https://i.ytimg.com/vi/qF5yiEMmfNg/hqdefault.jpg",
				"width": 480,
				"height": 360
			}
		},
		"channelTitle": "FlewDesigns - Digital Artist",
		"liveBroadcastContent": "none"
	}
},*/