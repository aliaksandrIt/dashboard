import { parseISO, format } from "date-fns";
import { Purchase } from "../../../shared/types";

export const aggregateSalesOverTime = (
  purchases: Purchase[]
): { date: string; totalSales: number }[] => {
  if (!purchases.length) {
    return [];
  }

  const salesOverTime: Record<string, number> = {};

  purchases.forEach(({ purchaseDate, total }) => {
    const date = format(parseISO(purchaseDate), "yyyy-MM-dd");
    salesOverTime[date] = (salesOverTime[date] || 0) + total;
  });

  const sortedDates = Object.keys(salesOverTime).sort();
  return sortedDates.map((date) => ({
    date,
    totalSales: salesOverTime[date],
  }));
};
