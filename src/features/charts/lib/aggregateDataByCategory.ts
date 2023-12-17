import { Category } from "../../../shared/Purchase/types";
import { purchaseStore } from "../../purchase-table/model";

export type AggregatedDataItem = {
  category: Category;
  count: number;
};

export const aggregateDataByCategory = (): AggregatedDataItem[] => {
  const countByCategory: Record<Category, number> = {
    [Category.Meat]: 0,
    [Category.Fruits]: 0,
    [Category.Vegetables]: 0,
    [Category.Fish]: 0,
  };

  purchaseStore.purchaseList.forEach((purchase) => {
    countByCategory[purchase.category] += 1;
  });

  return Object.entries(countByCategory).map(([category, count]) => ({
    category: category as Category,
    count,
  }));
};
