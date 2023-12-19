import React from "react";
import { Line } from "@ant-design/plots";
import { NothinToDisplay } from "./NothinToDisplay";

type LineChartProps = {
  data: { date: string; totalSales: number }[];
};

export const SalesOverTimeLineChart: React.FC<LineChartProps> = ({ data }) => {
  const config = {
    data,
    xField: "date",
    yField: "totalSales",
  };

  return (
    <>{data && data.length > 0 ? <Line {...config} /> : <NothinToDisplay />}</>
  );
};
