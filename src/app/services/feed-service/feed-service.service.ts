import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {FeedModel} from '../../models/feed.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedServiceService {

  private rssToJsonServiceBaseUrl = 'https://rss2json.com/api.json?rss_url=';

  constructor(private http: HttpClient) { }

  getFeedContent(url: string) {
    const customUrl = 'http://www.bbc.co.uk/feeds/rss/music/latest_releases.xml';
    return this.http.get(this.rssToJsonServiceBaseUrl + customUrl).subscribe(response => {
      console.log('res OK');
      console.log(response.toString());
    });
      // .map(this.extractFeeds)
      // .catch(this.handleError);
  }

  private extractFeeds(res: Response): FeedModel {
    const feed = res.json();
    return feed || { };
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
