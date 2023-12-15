import { Modal } from "antd";

import PurchaseFrom from "./PurchaseFrom";

import dayjs from "dayjs";
import { PurchaseSubmitType } from "../../../shared/Purchase/types";
import { addPurchase } from "../../purchase-table/model";
import { Action } from "../../../shared/common";

type PurchaseDialogProps = {
  actions: Action[];
  isModalVisible: boolean;
  onOpen: (value: boolean) => void;
};

export default function AddPurchaseDialog({
  isModalVisible,
  onOpen,
  actions,
}: PurchaseDialogProps) {
  const onAddPurchase = (values: PurchaseSubmitType) => {
    addPurchase({
      productName: values.productName,
      category: values.category,
      price: values.price,
      quantity: values.quantity,
      total: values.price * values.quantity,
      purchaseDate: dayjs(values.purchaseDate).format("YYYY-MM-DD"), // DatePicker от Ant Design
    });
    onOpen(false);
  };

  return (
    <Modal
      title="Add Purchase"
      open={isModalVisible}
      onCancel={() => onOpen(false)}
      footer={null}
    >
      <PurchaseFrom submit={onAddPurchase} actions={actions} />
    </Modal>
  );
}
