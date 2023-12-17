import React from "react";
import { Pie } from "@ant-design/plots";

type PieChartProps = {
  data: { category: string; totalSales: number }[];
};

const SalesByCategoryPieChart: React.FC<PieChartProps> = ({ data }) => {
  const config = {
    data,
    angleField: "totalSales",
    colorField: "category",
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: "spider",
      labelHeight: 28,
      content: "{name} ({percentage})",
    },
    // другие настройки по желанию
  };

  return <Pie {...config} />;
};

export default SalesByCategoryPieChart;
