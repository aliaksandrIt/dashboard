import { makeAutoObservable } from "mobx";
import { Purchase } from "../../../shared/types";

class PurchaseStore {
  purchaseList: Purchase[] = [];

  lastId = this.purchaseList.length - 1;

  constructor() {
    makeAutoObservable(this);
  }
}

export const purchaseStore = new PurchaseStore();
