export enum ItemImportanceLevel {
  High = 'High',
  Medium = 'Medium',
  Low = 'Low'
}

export type ItemDataModel = {
  desc: string;
  importance: ItemImportanceLevel;
}

export type ItemDataModelWithKey = {
  key: string;
  item: ItemDataModel;
}
