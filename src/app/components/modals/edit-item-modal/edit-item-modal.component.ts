import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CachingService } from '../../../../shared/services/caching/caching.service';
import { ItemDataModel, ItemDataModelWithKey, ItemImportanceLevel } from '../../../../shared/types/item-data';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.scss']
})
export class EditItemModalComponent implements OnInit {
  @Input()
  public editItemModalItemData: ItemDataModelWithKey;

  @Output()
  public closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  public item: ItemDataModel;
  public importanceLevels: typeof ItemImportanceLevel = ItemImportanceLevel;

  private readonly cachingService: CachingService;

  constructor(cachingService: CachingService) {
    this.cachingService = cachingService;
  }

  public ngOnInit(): void {
    this.item = structuredClone(this.editItemModalItemData.item)
  }

  public saveItem(): void {
    this.cachingService.updateCachedData(this.editItemModalItemData.key, this.item);
    this.closeModal.emit(true);
  }

  public deleteItem(): void {
    this.cachingService.deleteData(this.editItemModalItemData.key);
    this.closeModal.emit(true);
  }

  public close(): void {
    this.item = structuredClone(this.editItemModalItemData.item)
    this.closeModal.emit(false);
  }
}
