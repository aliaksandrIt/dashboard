import React from "react";
import { observer } from "mobx-react-lite";
import { aggregateDataByCategory } from "../features/charts";
import { CategoryPieChart } from "../features/charts/ui/CategoryPieChart";
import { aggregateSalesByProduct } from "../features/charts/lib/aggregateSalesByProduct";
import { purchaseStore } from "../features/purchase-table/model";
import { SalesByProductBarChart } from "../features/charts/ui/SalesByProductBarChart";
import SalesByCategoryPieChart from "../features/charts/ui/SalesByCategoryPieChart";
import { aggregateSalesByCategory } from "../features/charts/lib/aggregateSalesByCategory";
import { aggregateSalesOverTime } from "../features/charts/lib/aggregateSalesOverTime";
import { SalesOverTimeLineChart } from "../features/charts/ui/SalesOverTimeLineChart";
import { AppHeader } from "../shared/common";
import { Header1 } from "../shared/components/StyledHeader";
import Box from "../shared/components/Box";

const DashboardComponent: React.FC = () => {
  const dataForChart = aggregateDataByCategory();

  const data = aggregateSalesByProduct(purchaseStore.purchaseList);

  const data1 = aggregateSalesByCategory(purchaseStore.purchaseList);

  const data3 = aggregateSalesOverTime(purchaseStore.purchaseList);

  return (
    <div>
      <AppHeader>
        <Box mx="10px">
          <Header1>Dashboard</Header1>
        </Box>
      </AppHeader>
      <div style={{ width: 300 }}>
        <h3>Number of purchases by category</h3>
        <CategoryPieChart data={dataForChart} />
      </div>
      <div>
        <SalesByProductBarChart data={data} />
      </div>
      <div>
        <SalesByCategoryPieChart data={data1} />
      </div>
      <div>
        <SalesOverTimeLineChart data={data3} />
      </div>
    </div>
  );
};

export const Dashboard = observer(DashboardComponent);
