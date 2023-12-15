import { makeAutoObservable } from "mobx";
import { Category, Purchase } from "./types";
import dayjs from "dayjs";

class PurchaseStore {
  purchases: Purchase[] = [
    {
      id: 0,
      productName: "Orange",
      category: Category.Fruits,
      price: 97,
      quantity: 8,
      total: 776,
      purchaseDate: "2023-07-04",
    },
    {
      id: 1,
      productName: "Salmon",
      category: Category.Fish,
      price: 15,
      quantity: 10,
      total: 150,
      purchaseDate: "2023-02-14",
    },
    {
      id: 2,
      productName: "Broccoli",
      category: Category.Vegetables,
      price: 64,
      quantity: 8,
      total: 512,
      purchaseDate: "2023-10-17",
    },
    {
      id: 3,
      productName: "Orange",
      category: Category.Fruits,
      price: 49,
      quantity: 8,
      total: 392,
      purchaseDate: "2023-04-29",
    },
    {
      id: 4,
      productName: "Tomato",
      category: Category.Vegetables,
      price: 73,
      quantity: 3,
      total: 219,
      purchaseDate: "2023-07-05",
    },
    {
      id: 5,
      productName: "Pork",
      category: Category.Meat,
      price: 91,
      quantity: 9,
      total: 819,
      purchaseDate: "2023-02-18",
    },
    {
      id: 6,
      productName: "Carrot",
      category: Category.Vegetables,
      price: 48,
      quantity: 2,
      total: 96,
      purchaseDate: "2022-12-21",
    },
    {
      id: 7,
      productName: "Trout",
      category: Category.Fish,
      price: 37,
      quantity: 8,
      total: 296,
      purchaseDate: "2023-05-18",
    },
  ];

  private lastId = this.purchases.length - 1;

  constructor() {
    makeAutoObservable(this);
  }

  addPurchase(purchase: Omit<Purchase, "id">) {
    const newPurchase = {
      ...purchase,
      id: ++this.lastId, // Увеличиваем lastId на 1 для каждой новой покупки
    };

    this.purchases.push(newPurchase);
  }

  removePurchase(id: number) {
    this.purchases = this.purchases.filter((purchase) => purchase.id !== id);
  }

  editPurchase(id: number, updatedPurchase: Purchase) {
    this.purchases = this.purchases.map((purchase) =>
      purchase.id === id ? { ...purchase, ...updatedPurchase } : purchase
    );
  }
}

export const purchaseStore = new PurchaseStore();
