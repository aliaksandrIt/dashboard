import { Modal } from "antd";

import { PurchaseFormValues } from "../../../shared/Purchase/types";
import { Action } from "../../../shared/types";
import { PurchaseFrom } from ".";

type PurchaseDialogProps = {
  actions: Action[];
  isModalVisible: boolean;
  onOpen: (value: boolean) => void;
  onSubmit: (values: PurchaseFormValues) => void;
};

export function AddPurchaseDialog({
  isModalVisible,
  onOpen,
  actions,
  onSubmit,
}: PurchaseDialogProps) {
  return (
    <Modal
      title="Add Purchase"
      open={isModalVisible}
      onCancel={() => onOpen(false)}
      footer={null}
    >
      <PurchaseFrom submit={onSubmit} actions={actions} />
    </Modal>
  );
}
