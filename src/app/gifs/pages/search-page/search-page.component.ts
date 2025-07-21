import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifListComponent } from '../../components/side-menu/gif-list/gif-list.component';

@Component({
  selector: 'app-search-page',
  imports: [],
  templateUrl: './search-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchPageComponent { }
