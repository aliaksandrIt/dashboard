import { Purchase } from "../../../shared/types";

export const aggregateSalesByCategory = (
  purchases: Purchase[]
): { category: string; totalSales: number }[] => {
  if (!purchases.length) {
    return [];
  }
  const salesByCategory: Record<string, number> = {};

  purchases.forEach(({ category, total }) => {
    salesByCategory[category] = (salesByCategory[category] || 0) + total;
  });

  return Object.entries(salesByCategory).map(([category, totalSales]) => ({
    category,
    totalSales,
  }));
};
