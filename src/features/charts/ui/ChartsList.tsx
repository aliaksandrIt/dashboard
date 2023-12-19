import { Flex } from "antd";
import { observer } from "mobx-react-lite";
import { Box } from "../../../shared/components/Box";
import { purchaseStore } from "../../purchase-table/model";
import {
  aggregateDataByCategory,
  aggregateSalesByCategory,
  aggregateSalesByProduct,
  aggregateSalesOverTime,
} from "../lib";
import { CategoryPieChart } from "./CategoryPieChart";
import { ChartWrapper } from "./ChartWrapper";
import { SalesByCategoryPieChart } from "./SalesByCategoryPieChart";
import { SalesByProductBarChart } from "./SalesByProductBarChart";
import { SalesOverTimeLineChart } from "./SalesOverTimeLineChart";
import styled from "styled-components";
import { device } from "../../../app/styles/breakPoints";

const ChartsListComponent = () => {
  const dataForCategoryChart = aggregateDataByCategory(
    purchaseStore.purchaseList
  );

  const salesByProductData = aggregateSalesByProduct(
    purchaseStore.purchaseList
  );

  const salesByCategoryData = aggregateSalesByCategory(
    purchaseStore.purchaseList
  );

  const salesOverTimeData = aggregateSalesOverTime(purchaseStore.purchaseList);
  return (
    <Flex gap="30px" wrap="wrap">
      <FlexChart>
        <ChartWrapper title="Purchases by the Category">
          <CategoryPieChart data={dataForCategoryChart} />
        </ChartWrapper>
      </FlexChart>
      <FlexChart>
        <ChartWrapper title="Sales by the Product">
          <SalesByProductBarChart data={salesByProductData} />
        </ChartWrapper>
      </FlexChart>
      <FlexChart>
        <ChartWrapper title="Sales by the Category">
          <SalesByCategoryPieChart data={salesByCategoryData} />
        </ChartWrapper>
      </FlexChart>
      <FlexChart>
        <ChartWrapper title="Sales over time">
          <SalesOverTimeLineChart data={salesOverTimeData} />
        </ChartWrapper>
      </FlexChart>
    </Flex>
  );
};

export const ChartsList = observer(ChartsListComponent);

const FlexChart = styled(Box)`
  width: 100%;

  @media screen and ${device.laptop} {
    width: 48%;
  }
`;
