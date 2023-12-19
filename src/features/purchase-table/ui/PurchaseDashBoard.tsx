import React, { useCallback, useState } from "react";
import { observer } from "mobx-react";
import { Button, Flex, Input } from "antd";
import {
  Purchase,
  PurchaseFormType,
  PurchaseFormValues,
} from "../../../shared/types";
import {
  addPurchase,
  editPurchase,
  prepopulateStore,
  purchaseStore,
  removePurchase,
} from "../model";
import { PurchaseTable } from "./PurchaseTable";
import {
  AddPurchaseDialog,
  EditPurchaseDialog,
  PrepopulatedDialog,
} from "../../purchase-dialogs/ui";
import { Action, ButtonType, HtmlButtonType } from "../../../shared/types";
import styled from "styled-components";
import { device } from "../../../app/styles/breakPoints";
import dayjs from "dayjs";
import { yMargin } from "../../../shared/utils";

export const PurchaseDashBoard: React.FC = observer(() => {
  const [searchText, setSearchText] = useState("");

  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isPrepopulateModalVisible, setIsPrepopulateModalVisible] =
    useState(false);

  const [currentRecord, setCurrentRecord] = useState<Purchase | null>(null);

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
    setIsEditModalVisible(true);
    setCurrentRecord(record);
  }, []);

  const filteredData = purchaseStore.purchaseList.filter(
    (purchase: Purchase) => {
      return purchase.productName
        .toLowerCase()
        .includes(searchText.toLowerCase());
    }
  );

  //Discriminated Unions
  const formSubmit = useCallback((values: PurchaseFormValues) => {
    if (values.type === PurchaseFormType.Existing) {
      editPurchase(values);
      setIsEditModalVisible(false);
    } else if (values.type === PurchaseFormType.New) {
      addPurchase({
        productName: values.productName,
        category: values.category,
        price: values.price,
        quantity: values.quantity,
        total: values.price * values.quantity,
        purchaseDate: dayjs(values.purchaseDate).format("YYYY-MM-DD"), // DatePicker от Ant Design
      });
      setIsAddModalVisible(false);
    }
  }, []);

  return (
    <>
      <DashboardControls gap={"middle"}>
        <Input
          placeholder="Search by product name"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button
          onClick={() => {
            setIsPrepopulateModalVisible(true);
          }}
        >
          Prepopulate
        </Button>
        <Button
          type={ButtonType.Primary}
          onClick={() => {
            setIsAddModalVisible(true);
          }}
        >
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
        onSubmit={formSubmit}
        actions={
          [
            {
              label: "Cancel",
              handler: () => setIsAddModalVisible(false),
              type: ButtonType.Secondary,
            },

            {
              label: "Add",
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
          onSubmit={formSubmit}
          actions={
            [
              {
                label: "Cancel",
                handler: () => setIsEditModalVisible(false),
                type: ButtonType.Secondary,
              },

              {
                label: "Edit",
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

const DashboardControls = styled(Flex)`
  display: flex;
  flex-direction: column-reverse;
  ${yMargin("md")}

  @media screen and ${device.mobile} {
    flex-direction: row;
  }
`;
