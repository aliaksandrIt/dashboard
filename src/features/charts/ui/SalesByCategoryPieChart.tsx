import React from "react";
import { Pie } from "@ant-design/plots";
import { NothinToDisplay } from "./NothinToDisplay";

type PieChartProps = {
  data: { category: string; totalSales: number }[];
};

export const SalesByCategoryPieChart: React.FC<PieChartProps> = ({ data }) => {
  const config = {
    data,
    appendPadding: 10,
    angleField: "totalSales",
    colorField: "category",
    radius: 1,
    innerRadius: 0.6,
    interactions: [{ type: "element-selected" }, { type: "element-active" }],
  };

  return (
    <>{data && data.length > 0 ? <Pie {...config} /> : <NothinToDisplay />}</>
  );
};
