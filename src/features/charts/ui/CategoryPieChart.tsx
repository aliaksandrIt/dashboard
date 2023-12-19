import React from "react";
import { Pie } from "@ant-design/plots";
import { AggregatedDataItem } from "../lib/aggregateDataByCategory";
import { NothinToDisplay } from "./NothinToDisplay";

type PieChartProps = {
  data: AggregatedDataItem[];
};

export const CategoryPieChart: React.FC<PieChartProps> = ({ data }) => {
  const config = {
    appendPadding: 10,
    data,
    angleField: "count",
    colorField: "category",
    radius: 1,
    innerRadius: 0.6,
    interactions: [{ type: "element-selected" }, { type: "element-active" }],
  };

  return (
    <>{data && data.length > 0 ? <Pie {...config} /> : <NothinToDisplay />}</>
  );
};
