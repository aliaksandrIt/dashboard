import { Box, StyledContent } from "../shared/components";
import { Title, TitleType } from "../shared/components/Title";

export function HomePage() {
  return (
    <StyledContent>
      <Title type={TitleType.H1}>Welcome to the Purchase</Title>
      <Box my="md">
        <Title type={TitleType.H3}>
          Since I had lost some time by illness there is some topics, that I
          could manage to cover:
        </Title>
      </Box>
      <ul>
        <li>move data fetching to async logic</li>
        <li>
          createing separate service for purchase data and charts data
          generation
        </li>
        <li>skeletons covering</li>
        <li>test covering</li>
      </ul>
    </StyledContent>
  );
}
