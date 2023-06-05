import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CachingService } from '../../../shared/services/caching/caching.service';
import { ItemDataModelWithKey } from '../../../shared/types/item-data';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToDoItemComponent {
  @Input()
  public toDoItemData: ItemDataModelWithKey;

  @Output()
  public itemUpdated: EventEmitter<void> = new EventEmitter<void>();

  private readonly cachingService: CachingService

  constructor(cachingService: CachingService) {
    this.cachingService = cachingService;
  }

  public deleteItem(): void {
    this.cachingService.deleteData(this.toDoItemData.key);
    this.itemUpdated.emit();
  }

  public closeModal(updated: boolean) {
    const modal: HTMLDialogElement = document.getElementById(`editItemModal-${this.toDoItemData.key}`) as HTMLDialogElement;

    modal.close();

    if (updated) {
      this.itemUpdated.emit();
    }
  }

  public showModal(): void {
    const modal: HTMLDialogElement = document.getElementById(`editItemModal-${this.toDoItemData.key}`) as HTMLDialogElement;

    modal.showModal();
  }
}
