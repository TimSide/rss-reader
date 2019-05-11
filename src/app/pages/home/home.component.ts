import {Component, OnInit} from '@angular/core';
import {FeedServiceService} from '../../services/feed-service/feed-service.service';
import {FeedItemModel} from '../../models/feed-item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  feedList: FeedItemModel[];
  selectedFeedText: string;

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
