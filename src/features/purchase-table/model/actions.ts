import { Purchase, ExistingPurchase, NewPurchase } from "../../../shared/types";
import { purchasePrepopulatedData } from "../lib/data";
import { purchaseStore } from "./purchaseStore";

export const addPurchase = (purchase: NewPurchase) => {
  const newPurchase = {
    ...purchase,
    id: ++purchaseStore.lastId, // Увеличиваем lastId на 1 для каждой новой покупки
  };

  purchaseStore.purchaseList.push(newPurchase);
};

export const removePurchase = (id: number) => {
  purchaseStore.purchaseList = purchaseStore.purchaseList.filter(
    (purchase) => purchase.id !== id
  );
};

export const editPurchase = (updatedPurchase: ExistingPurchase) => {
  purchaseStore.purchaseList = purchaseStore.purchaseList.map((purchase) =>
    purchase.id === updatedPurchase.id
      ? { ...purchase, ...updatedPurchase }
      : purchase
  );
};

export const clearPurchases = () => {
  purchaseStore.purchaseList = [];
};

export const prepopulateStore = () => {
  clearPurchases();
  purchaseStore.lastId = 0;
  purchasePrepopulatedData.forEach((purchase: Purchase) => {
    addPurchase(purchase);
  });
};
