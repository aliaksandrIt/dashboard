import { Modal } from "antd";

type PrepopulatedDialogProps = {
  isVisible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
};

export default function PrepopulatedDialog({
  isVisible,
  handleOk,
  handleCancel,
}: PrepopulatedDialogProps) {
  return (
    <Modal
      title="Warning"
      open={isVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>
        Current data in the table will be overwritten. Do you want to continue?
      </p>
    </Modal>
  );
}
