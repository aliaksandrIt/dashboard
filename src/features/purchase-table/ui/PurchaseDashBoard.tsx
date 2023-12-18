import React, { useCallback, useState } from "react";
import { observer } from "mobx-react";
import { Button, Col, Flex, Input } from "antd";
import { Purchase } from "../../../shared/Purchase/types";
import { prepopulateStore, purchaseStore, removePurchase } from "../model";
import { PurchaseTable } from "./PurchaseTable";
import AddPurchaseDialog from "../../purchase-dialogs/ui/AddPurchaseDialog";
import {
  Action,
  ButtonType,
  HtmlButtonType,
  StyledContent,
} from "../../../shared/common";
import EditPurchaseDialog from "../../purchase-dialogs/ui/EditPurchaseDialog";
import PrepopulatedDialog from "../../purchase-dialogs/ui/PrepopulatedDialog";
import styled from "styled-components";
import { device } from "../../../app/styles/breakPoints";

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

  const filteredData = purchaseStore.purchaseList.filter(
    (purchase: Purchase) => {
      return purchase.productName
        .toLowerCase()
        .includes(searchText.toLowerCase());
    }
  );

  return (
    <>
      <StyledContent>
        <DashboardControls gap={"middle"}>
          <Input
            placeholder="Search by product name"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button onClick={showPrepopulateModal}>Prepopulate</Button>
          <Button type={ButtonType.Primary} onClick={showAddModal}>
            Add Purchase
          </Button>
        </DashboardControls>
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
      </StyledContent>
    </>
  );
});

const DashboardControls = styled(Flex)`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 20px;

  @media screen and ${device.mobile} {
    flex-direction: row;
  }
`;
