import {Component, OnInit} from '@angular/core';
import {FeedServiceService} from '../../services/feed-service/feed-service.service';
import {FeedItemModel} from '../../models/feed-item.model';
import {RssFeedModel} from '../../models/rss-feed.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  feedList: FeedItemModel[];
  selectedFeedText: string;
  savedRssFeeds: RssFeedModel[];

  constructor(private feedService: FeedServiceService) { }

  ngOnInit() {
    this.feedService.getFeedContent('azaza').subscribe(response => {
      console.log('res OK');
      this.feedList = response.items;
    });
  }

  selectFeed(event: MouseEvent) {
    // @ts-ignore
    this.selectedFeedText = event.target.textContent;
  }
}
