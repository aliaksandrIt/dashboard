import { PurchaseDashBoard } from "../features/purchase-table/ui/PurchaseDashBoard";
import { AppHeader, StyledContent } from "../shared/components";
import { Box } from "../shared/components";
import { Title } from "../shared/components/Title";
import { colors } from "../app/styles/colors";

export function PurchasePage() {
  return (
    <>
      <AppHeader>
        <Box mx="20px">
          <Title color={colors.white} type="h1">
            Purchase List
          </Title>
        </Box>
      </AppHeader>
      <StyledContent>
        <PurchaseDashBoard />;
      </StyledContent>
    </>
  );
}
