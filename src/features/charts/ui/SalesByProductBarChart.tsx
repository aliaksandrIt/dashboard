import React from "react";
import { Bar } from "@ant-design/plots";

type BarChartProps = {
  data: { productName: string; totalSales: number }[];
};

export const SalesByProductBarChart: React.FC<BarChartProps> = ({ data }) => {
  const config = {
    data,
    xField: "totalSales",
    yField: "productName",
    xAxis: {
      label: {
        // Настройки для оси X
      },
    },
    yAxis: {
      label: {
        // Настройки для оси Y
      },
    },
    // другие настройки по желанию
  };

  return <Bar {...config} />;
};
