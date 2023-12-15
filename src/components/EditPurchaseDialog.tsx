import { Modal } from "antd";

import PurchaseFrom, { Action } from "./PurchaseFrom";
import { purchaseStore } from "../store/purchaseStore";
import { Purchase } from "../store/types";

type PurchaseDialogProps = {
  actions: Action[];
  isModalVisible: boolean;
  onOpen: (value: boolean) => void;
  currentPurchase: Purchase;
};

export default function EditPurchaseDialog({
  isModalVisible,
  onOpen,
  actions,
  currentPurchase,
}: PurchaseDialogProps) {
  const onEditFinish = (values: any) => {
    purchaseStore.editPurchase(currentPurchase.id, values);
    onOpen(false);
  };

  return (
    <Modal
      title="Edit Purchase"
      open={isModalVisible}
      onCancel={() => onOpen(false)}
      footer={null}
    >
      <PurchaseFrom
        initialValues={currentPurchase}
        submit={onEditFinish}
        actions={actions}
      />
    </Modal>
  );
}
