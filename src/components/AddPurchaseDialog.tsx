import { Modal } from "antd";

import PurchaseFrom, { Action } from "./PurchaseFrom";
import { PurchaseSubmitType } from "../store/types";
import { purchaseStore } from "../store/purchaseStore";
import dayjs from "dayjs";

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
    purchaseStore.addPurchase({
      productName: values.productName,
      category: values.category,
      price: values.price,
      quantity: values.quantity,
      total: values.price * values.quantity,
      purchaseDate: dayjs(values.purchaseDate).format("YYYY-MM-DD"), // предполагая, что вы используете DatePicker от Ant Design
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
