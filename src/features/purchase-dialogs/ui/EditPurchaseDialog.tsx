import { Modal } from "antd";
import { PurchaseFrom } from ".";

import { Purchase, PurchaseFormValues } from "../../../shared/types";
import { Action } from "../../../shared/types";

type PurchaseDialogProps = {
  actions: Action[];
  isModalVisible: boolean;
  onOpen: (value: boolean) => void;
  currentPurchase: Purchase;
  onSubmit: (values: PurchaseFormValues) => void;
};

export function EditPurchaseDialog({
  isModalVisible,
  onOpen,
  actions,
  currentPurchase,
  onSubmit,
}: PurchaseDialogProps) {
  return (
    <Modal
      title="Edit Purchase"
      open={isModalVisible}
      onCancel={() => onOpen(false)}
      footer={null}
    >
      <PurchaseFrom
        initialValues={currentPurchase}
        submit={onSubmit}
        actions={actions}
      />
    </Modal>
  );
}
