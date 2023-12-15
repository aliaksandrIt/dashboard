import { DatePicker, Form, Input, InputNumber, Select, Button } from "antd";
import { useState } from "react";
import dayjs from "dayjs";
import {
  Category,
  Purchase,
  PurchaseSubmitType,
} from "../../../shared/Purchase/types";
import { Action } from "../../../shared/common";

type PurchaseFromProps = {
  submit: (values: PurchaseSubmitType) => void;
  actions: Action[];
  initialValues?: Purchase;
};

const { Option } = Select;

export default function PurchaseFrom({
  submit,
  actions,
  initialValues,
}: PurchaseFromProps) {
  const [price, setPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      key={initialValues ? initialValues.id : "new"}
      initialValues={{
        ...initialValues,
        purchaseDate: dayjs(initialValues?.purchaseDate),
      }}
      onFinish={submit}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="productName"
        rules={[{ required: true, message: "Please input the product name!" }]}
      >
        <Input placeholder="Product Name" />
      </Form.Item>
      <Form.Item
        name="purchaseDate"
        rules={[
          { required: true, message: "Please select the purchase date!" },
        ]}
      >
        <DatePicker style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        name="category"
        rules={[{ required: true, message: "Please select a category!" }]}
      >
        <Select placeholder="Select a category" allowClear>
          {Object.values(Category).map((category) => (
            <Option key={category} value={category}>
              {category}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: "Please input the price!" }]}
      >
        <InputNumber
          min={0}
          value={price}
          onChange={(value) => {
            const newPrice = value ?? 0; // Установка 0, если значение null
            setPrice(newPrice);
            setTotal(newPrice * quantity);
          }}
        />
      </Form.Item>
      <Form.Item
        label="Quantity"
        name="quantity"
        rules={[{ required: true, message: "Please input the quantity!" }]}
      >
        <InputNumber
          min={1}
          value={quantity}
          onChange={(value) => {
            const newQuantity = value ?? 1; // Установка 1, если значение null
            setQuantity(newQuantity);
            setTotal(price * newQuantity);
          }}
        />
      </Form.Item>
      <Form.Item>
        <span>Total: {total}</span>
      </Form.Item>
      <Form.Item>
        {actions.map((action, index) => {
          return (
            <Button key={index} htmlType={action.htmlType}>
              {action.label}
            </Button>
          );
        })}
      </Form.Item>
    </Form>
  );
}
