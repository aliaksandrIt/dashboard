import { Flex } from "antd";
import { ReactNode } from "react";
import { Title } from "../../../shared/components";
import { Box } from "../../../shared/components";
import styled from "styled-components";

type ChartWrapperProps = {
  title: string;
  children: ReactNode;
};

export const ChartWrapper = ({ title, children }: ChartWrapperProps) => {
  return (
    <ShadowBox
      py="10px"
      px="15px"
      borderColor="gray"
      radius="3px"
      borderWidth="1px"
    >
      <Flex vertical={true}>
        <Box mb="10px">
          <Title type="h2">{title}</Title>
        </Box>
        <Box>{children}</Box>
      </Flex>
    </ShadowBox>
  );
};

const ShadowBox = styled(Box)`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
