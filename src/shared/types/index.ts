export enum ButtonType {
  Primary = "primary",
  Secondary = "text",
}

export enum HtmlButtonType {
  Submit = "submit",
}

export type Action = {
  label: string;
  handler: () => void;
  type: ButtonType;
  htmlType?: HtmlButtonType;
};

export type Purchase = {
  id: number;
  productName: string;
  category: Category;
  price: number;
  quantity: number;
  total: number;
  purchaseDate: string;
};

export enum PurchaseFormType {
  New = "new",
  Existing = "existing",
}

export type NewPurchase = {
  productName: string;
  category: Category; // предполагается, что у вас определен enum Category
  price: number;
  quantity: number;
  total: number;
  purchaseDate: string;
};

export type ExistingPurchase = {
  id: number;
  productName: string;
  category: Category;
  price: number;
  quantity: number;
  total: number;
  purchaseDate: string;
};

export type PurchaseFormValues =
  | (NewPurchase & {
      type: PurchaseFormType.New;
    })
  | (ExistingPurchase & {
      type: PurchaseFormType.Existing;
    });

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
