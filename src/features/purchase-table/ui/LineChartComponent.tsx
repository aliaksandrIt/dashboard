import { Line } from "@ant-design/plots";

type LineChartDataItem = {
  date: string; // предполагаем, что дата представлена в виде строки
  sales: number; // значение продаж
};

type LineChartComponentProps = {
  data: LineChartDataItem[];
};

export const LineChartComponent = ({ data }: LineChartComponentProps) => {
  const config = {
    data,
    xField: "yourXField",
    yField: "yourYField",
    // ... другие настройки ...
  };

  return <Line {...config} />;
};
