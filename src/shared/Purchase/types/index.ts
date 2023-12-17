export type Purchase = {
  id: number;
  productName: string;
  category: Category;
  price: number;
  quantity: number;
  total: number;
  purchaseDate: string;
};

export type PurchaseSubmitType = Omit<Purchase, "id">;

export enum Category {
  Meat = "Meat",
  Fruits = "Fruits",
  Vegetables = "Vegetables",
  Fish = "Fish",
}
