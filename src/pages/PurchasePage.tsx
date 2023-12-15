import React, { useState } from "react";
import { observer } from "mobx-react";
import { Button, Input, Table } from "antd";
import { purchaseStore } from "../store/purchaseStore";
import { Purchase } from "../store/types";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import AddPurchaseDialog from "../components/AddPurchaseDialog";
import { Action, ButtonType, HtmlButtonType } from "../components/PurchaseFrom";
import EditPurchaseDialog from "../components/EditPurchaseDialog";

const PurchasePage: React.FC = observer(() => {
  const [searchText, setSearchText] = useState("");

  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);

  const [currentRecord, setCurrentRecord] = useState<Purchase | null>(null);

  const handleDelete = (id: number) => {
    purchaseStore.removePurchase(id);
  };

  const showEditModal = (record: Purchase) => {
    console.log(record, "===record==");
    setCurrentRecord(record);
    setIsEditModalVisible(true);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: (a: Purchase, b: Purchase) => a.id - b.id,
    },
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
      sorter: (a: Purchase, b: Purchase) =>
        a.productName.localeCompare(b.productName),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      sorter: (a: Purchase, b: Purchase) =>
        a.category.localeCompare(b.category),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: (a: Purchase, b: Purchase) => a.price - b.price,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "Quantity",
      sorter: (a: Purchase, b: Purchase) => a.quantity - b.quantity,
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      sorter: (a: Purchase, b: Purchase) => a.total - b.total,
    },
    {
      title: "Action",
      key: "action",
      render: (text: string, record: Purchase) => (
        <>
          <Button
            type="link"
            onClick={() => showEditModal(record)}
            icon={<EditOutlined />}
            style={{ marginRight: 8 }}
          />
          <Button
            type="link"
            onClick={() => handleDelete(record.id)}
            icon={<DeleteOutlined />}
          />
        </>
      ),
    },
  ];

  const showAddModal = () => {
    setIsAddModalVisible(true);
  };

  const filteredData = purchaseStore.purchases.filter((purchase) => {
    return purchase.productName
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });

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
      </div>

      <Table
        dataSource={filteredData}
        columns={columns}
        pagination={{ pageSize: 4 }}
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
    </>
  );
});

export default PurchasePage;
