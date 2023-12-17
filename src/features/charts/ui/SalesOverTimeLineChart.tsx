import React from "react";
import { Line } from "@ant-design/plots";

type LineChartProps = {
  data: { date: string; totalSales: number }[];
};

export const SalesOverTimeLineChart: React.FC<LineChartProps> = ({ data }) => {
  const config = {
    data,
    xField: "date",
    yField: "totalSales",
    // Дополнительные настройки...
  };

  return <Line {...config} />;
};
