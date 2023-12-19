import { Purchase } from "../../../shared/Purchase/types";

export const aggregateSalesByProduct = (
  purchases: Purchase[]
): { productName: string; totalSales: number }[] => {
  if (!purchases.length) {
    return [];
  }
  const salesByProduct: Record<string, number> = {};

  purchases.forEach(({ productName, total }) => {
    if (!salesByProduct[productName]) {
      salesByProduct[productName] = 0;
    }
    salesByProduct[productName] += total;
  });

  return Object.entries(salesByProduct).map(([productName, totalSales]) => ({
    productName,
    totalSales,
  }));
};
