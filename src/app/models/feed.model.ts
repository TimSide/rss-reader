import {FeedItemModel} from './feed-item.model';

export interface FeedModel {
  status: string;
  feed: {
    url: string;
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
  };
  items: FeedItemModel[];
}
