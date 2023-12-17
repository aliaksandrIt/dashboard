import { PurchaseDashBoard } from "../features/purchase-table/ui/PurchaseDashBoard";
import { StyledHeader } from "../shared/common";

export function PurchasePage() {
  return (
    <>
      <StyledHeader>Purchase List</StyledHeader>
      <PurchaseDashBoard />;
    </>
  );
}
