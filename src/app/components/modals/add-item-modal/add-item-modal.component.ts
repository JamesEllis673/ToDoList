import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CachingService } from '../../../../shared/services/caching/caching.service';
import { ItemDataModel, ItemImportanceLevel } from '../../../../shared/types/item-data';

@Component({
  selector: 'app-add-item-modal',
  templateUrl: './add-item-modal.component.html',
  styleUrls: ['./add-item-modal.component.scss']
})
export class AddItemModalComponent implements OnInit {
  @Output()
  public closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  public item: ItemDataModel;
  public importanceLevels: typeof ItemImportanceLevel = ItemImportanceLevel;

  private readonly cachingService: CachingService;

  constructor(cachingService: CachingService) {
    this.cachingService = cachingService;
  }

  public ngOnInit(): void {
    this.item = {
      desc: '',
      importance: ItemImportanceLevel.Low
    };
  }

  public createItem(): void {
    this.cachingService.cacheData(this.item);
    this.item = {
      desc: '',
      importance: ItemImportanceLevel.Low
    };

    this.closeModal.emit(true);
  }

  public close(): void {
    this.item = {
      desc: '',
      importance: ItemImportanceLevel.Low
    };

    this.closeModal.emit(false);
  }
}
