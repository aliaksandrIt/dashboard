import { Bar } from "@ant-design/plots";
import { ComparisonDataItem } from "../lib/aggregateCurrentAndPreviousMonthData";

type ComparisonBarChartProps = {
  data: ComparisonDataItem[];
};

export const ComparisonBarChart = ({ data }: ComparisonBarChartProps) => {
  const config = {
    data,
    xField: "total",
    yField: "period",
    seriesField: "period",
  };

  return <Bar {...config} />;
};
