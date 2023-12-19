export type Purchase = {
  id: number;
  productName: string;
  category: Category;
  price: number;
  quantity: number;
  total: number;
  purchaseDate: string;
};

type NewPurchase = {
  type: "new";
  productName: string;
  category: Category; // предполагается, что у вас определен enum Category
  price: number;
  quantity: number;
  total: number;
  purchaseDate: string;
};

type ExistingPurchase = {
  type: "existing";
  id: number;
  productName: string;
  category: Category;
  price: number;
  quantity: number;
  total: number;
  purchaseDate: string;
};

export type PurchaseFormValues = NewPurchase | ExistingPurchase;

export enum Category {
  Meat = "Meat",
  Fruits = "Fruits",
  Vegetables = "Vegetables",
  Fish = "Fish",
}

export type CategoryRevenue = {
  category: Category;
  totalRevenue: number;
};
