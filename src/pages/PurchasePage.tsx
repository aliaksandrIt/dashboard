import { PurchaseDashBoard } from "../features/purchase-table/ui/PurchaseDashBoard";
import { AppHeader } from "../shared/common";
import Box from "../shared/components/Box";
import { Header1 } from "../shared/components/StyledHeader";

export function PurchasePage() {
  return (
    <>
      <AppHeader>
        <Box mx="20px">
          <Header1>Purchase List</Header1>
        </Box>
      </AppHeader>
      <PurchaseDashBoard />;
    </>
  );
}
