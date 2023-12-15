import React, { useCallback, useMemo, useState } from "react";
import { observer } from "mobx-react";
import { Button, Input } from "antd";
import { Purchase } from "../../../shared/Purchase/types";
import { prepopulateStore, purchaseStore, removePurchase } from "../model";
import { PurchaseTable } from "./PurchaseTable";
import AddPurchaseDialog from "../../purchase-dialogs/ui/AddPurchaseDialog";
import { Action, ButtonType, HtmlButtonType } from "../../../shared/common";
import EditPurchaseDialog from "../../purchase-dialogs/ui/EditPurchaseDialog";
import PrepopulatedDialog from "../../purchase-dialogs/ui/PrepopulatedDialog";

export const PurchaseDashBoard: React.FC = observer(() => {
  const [searchText, setSearchText] = useState("");

  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isPrepopulateModalVisible, setIsPrepopulateModalVisible] =
    useState(false);

  const [currentRecord, setCurrentRecord] = useState<Purchase | null>(null);

  const showPrepopulateModal = () => {
    setIsPrepopulateModalVisible(true);
  };

  const handlePrepopulateOk = () => {
    prepopulateStore();
    setIsPrepopulateModalVisible(false);
  };

  const handlePrepopulateCancel = () => {
    setIsPrepopulateModalVisible(false);
  };

  const handlePurchaseDelete = useCallback((id: number) => {
    removePurchase(id);
  }, []);

  const showEditModal = useCallback((record: Purchase) => {
    setCurrentRecord(record);
    setIsEditModalVisible(true);
  }, []);

  const showAddModal = () => {
    setIsAddModalVisible(true);
  };

  //check memo
  const filteredData = useMemo(() => {
    return purchaseStore.purchaseList.filter((purchase: Purchase) => {
      return purchase.productName
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
  }, [searchText]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <Input
          placeholder="Search by product name"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button type="primary" onClick={showAddModal}>
          Add Purchase
        </Button>
        <Button onClick={showPrepopulateModal}>Prepopulate</Button>
      </div>
      <PurchaseTable
        showEditModal={showEditModal}
        handleDelete={handlePurchaseDelete}
        filteredData={filteredData}
      />
      <AddPurchaseDialog
        isModalVisible={isAddModalVisible}
        onOpen={setIsAddModalVisible}
        actions={
          [
            {
              label: "Cancel",
              action: () => setIsAddModalVisible(false),
              type: ButtonType.Secondary,
            },

            {
              label: "Add",
              action: undefined,
              htmlType: HtmlButtonType.Submit,
              type: ButtonType.Primary,
            },
          ] as Action[]
        }
      />
      {currentRecord && (
        <EditPurchaseDialog
          isModalVisible={isEditModalVisible}
          onOpen={setIsEditModalVisible}
          currentPurchase={currentRecord}
          actions={
            [
              {
                label: "Cancel",
                action: () => setIsEditModalVisible(false),
                type: ButtonType.Secondary,
              },

              {
                label: "Edit",
                action: undefined,
                htmlType: HtmlButtonType.Submit,
                type: ButtonType.Primary,
              },
            ] as Action[]
          }
        />
      )}
      <PrepopulatedDialog
        handleCancel={handlePrepopulateCancel}
        handleOk={handlePrepopulateOk}
        isVisible={isPrepopulateModalVisible}
      />
    </>
  );
});
