import React from "react";
import { Bar } from "@ant-design/plots";
import { NothinToDisplay } from "./NothinToDisplay";

type BarChartProps = {
  data: { productName: string; totalSales: number }[];
};

export const SalesByProductBarChart: React.FC<BarChartProps> = ({ data }) => {
  const config = {
    data,
    xField: "totalSales",
    yField: "productName",
  };

  return (
    <>{data && data.length > 0 ? <Bar {...config} /> : <NothinToDisplay />}</>
  );
};
