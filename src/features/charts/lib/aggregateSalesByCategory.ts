import { Purchase } from "../../../shared/Purchase/types";

export const aggregateSalesByCategory = (
  purchases: Purchase[]
): { category: string; totalSales: number }[] => {
  const salesByCategory: Record<string, number> = {};

  purchases.forEach(({ category, total }) => {
    salesByCategory[category] = (salesByCategory[category] || 0) + total;
  });

  return Object.entries(salesByCategory).map(([category, totalSales]) => ({
    category,
    totalSales,
  }));
};
