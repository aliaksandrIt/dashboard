import { Modal } from "antd";

import PurchaseFrom from "./PurchaseFrom";
import { Purchase } from "../../../shared/Purchase/types";
import { editPurchase } from "../../purchase-table/model";
import { Action } from "../../../shared/common";

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
    editPurchase(currentPurchase.id, values);
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
