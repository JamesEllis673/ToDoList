import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CachingService } from '../shared/services/caching/caching.service';
import { ItemDataModelWithKey } from '../shared/types/item-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public items: Array<ItemDataModelWithKey>;

  private readonly cachingService: CachingService;

  constructor(cachingService: CachingService) {
    this.cachingService = cachingService;
  }

  public ngOnInit(): void {
    this.updateItems();
  }

  public updateItems(): void {
    this.items = this.cachingService.getCachedData();
  }
}
