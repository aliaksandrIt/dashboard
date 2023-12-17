import { Category, Purchase } from "../../../shared/Purchase/types";
import { purchaseStore } from "../model";

export const categoryFilters = Object.values(Category).map((value) => ({
  text: value.charAt(0).toUpperCase() + value.slice(1), // Преобразование в читаемый формат
  value: value,
}));

export const getDataForChart = (record: Purchase) => {
  const purchases = purchaseStore.purchaseList;

  const filteredData = purchases.filter(
    (purchase) => purchase.productName === record.productName
  );

  const dataForChart = filteredData.map((purchase) => ({
    date: purchase.purchaseDate,
    sales: purchase.total, // или другой параметр, который вы хотите отобразить
  }));

  // // Сортировка данных по дате, если это необходимо
  dataForChart.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  console.log(dataForChart, "==dataForChart==");
  return dataForChart;
};
