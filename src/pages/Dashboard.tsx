import { colors } from "../app/styles/colors";
import { ChartsList } from "../features/charts";
import { Title } from "../shared/components";
import { Box } from "../shared/components";
import { AppHeader, StyledContent } from "../shared/components";

export const Dashboard: React.FC = () => {
  return (
    <div>
      <AppHeader>
        <Box mx="20px">
          <Title color={colors.white} type="h1">
            Dashboard
          </Title>
        </Box>
      </AppHeader>
      <StyledContent>
        <ChartsList />
      </StyledContent>
    </div>
  );
};
