import { Injectable } from '@angular/core';
import { v4 as uuidGenerator } from 'uuid';
import { ItemDataModel, ItemDataModelWithKey, ItemImportanceLevel } from '../../types/item-data';

@Injectable({ providedIn: 'root' })
export class CachingService {
  constructor() {}

  public cacheData(item: ItemDataModel): void {
    window.localStorage.setItem(uuidGenerator(), JSON.stringify(item));
  }

  public getCachedData(): Array<ItemDataModelWithKey> {
    const models: Array<ItemDataModelWithKey> = this._getAllData();
    return models.sort(this.compareItems);
  }

  public updateCachedData(key: string, item: ItemDataModel): void {
    window.localStorage.setItem(key, JSON.stringify(item));
  }

  public deleteData(key: string): void {
    window.localStorage.removeItem(key);
  }

  private _getAllData(): Array<ItemDataModelWithKey> {
    const models: Array<ItemDataModelWithKey> = [];

    for (const key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        const item: ItemDataModel = JSON.parse(localStorage.getItem(key)!);
        models.push({ key, item});
      }
    }

    return models;
  }

  private compareItems(a: ItemDataModelWithKey, b: ItemDataModelWithKey): number {
    if (a.item.importance !== b.item.importance) {
      if (a.item.importance === ItemImportanceLevel.High) {
        return -1;
      }
      if (b.item.importance === ItemImportanceLevel.High) {
        return 1;
      }
      if (a.item.importance === ItemImportanceLevel.Medium) {
        return -1;
      }
      if (b.item.importance === ItemImportanceLevel.Medium) {
        return 1;
      }
    }

    return a.item.desc.localeCompare(b.item.desc);
  }
}
