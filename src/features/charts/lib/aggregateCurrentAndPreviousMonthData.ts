import {
  startOfMonth,
  endOfMonth,
  subMonths,
  isWithinInterval,
} from "date-fns";
import { Purchase } from "../../../shared/types";
import { purchaseStore } from "../../purchase-table/model";

export type ComparisonDataItem = {
  period: string;
  total: number;
};

export const aggregateCurrentAndPreviousMonthData = () => {
  const currentMonthStart = startOfMonth(new Date());
  const currentMonthEnd = endOfMonth(new Date());
  const previousMonthStart = startOfMonth(subMonths(new Date(), 1));
  const previousMonthEnd = endOfMonth(subMonths(new Date(), 1));

  let currentMonthTotal = 0;
  let previousMonthTotal = 0;

  purchaseStore.purchaseList.forEach((purchase: Purchase) => {
    const purchaseDate = new Date(purchase.purchaseDate);
    if (
      isWithinInterval(purchaseDate, {
        start: currentMonthStart,
        end: currentMonthEnd,
      })
    ) {
      currentMonthTotal += purchase.total;
    } else if (
      isWithinInterval(purchaseDate, {
        start: previousMonthStart,
        end: previousMonthEnd,
      })
    ) {
      previousMonthTotal += purchase.total;
    }
  });

  return [
    { period: "Current Month", total: currentMonthTotal },
    { period: "Previous Month", total: previousMonthTotal },
  ];
};
