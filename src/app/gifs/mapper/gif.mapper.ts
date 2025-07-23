import { Title } from '@angular/platform-browser';
import { GiphyItem } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
export class GifMapper{
  static mapGiphyItemToGif(GiphyItem: GiphyItem): Gif {
    return {
      id: GiphyItem.id,
      title: GiphyItem.title,
      url: GiphyItem.images.original.url,
    };
  }

  static mapGiphyItemsToGifArray(GiphyItems: GiphyItem[]): Gif[] {
    return GiphyItems.map(this.mapGiphyItemToGif);
  }
}
