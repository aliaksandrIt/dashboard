import { Button, Table } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Purchase } from "../../../shared/Purchase/types";
import { memo } from "react";
import { categoryFilters } from "../lib/filters";
import { Key } from "antd/es/table/interface";

type PurchaseTableProps = {
  showEditModal: (currentPurchase: Purchase) => void;
  handleDelete: (id: number) => void;
  filteredData?: Purchase[];
};

function PurchaseTableComponent({
  showEditModal,
  handleDelete,
  filteredData,
}: PurchaseTableProps) {
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
      filters: categoryFilters,
      onFilter: (value: boolean | Key, record: Purchase) =>
        record.category === value,
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
  return (
    <Table
      dataSource={filteredData}
      columns={columns}
      pagination={{ pageSize: 4 }}
    />
  );
}

export const PurchaseTable = memo(PurchaseTableComponent);
