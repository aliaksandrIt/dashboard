import { Flex } from "antd";
import { ReactNode } from "react";
import { Title } from "../../../shared/components";
import { Box } from "../../../shared/components";
import styled from "styled-components";
import { TitleType } from "../../../shared/components/Title";

type ChartWrapperProps = {
  title: string;
  children: ReactNode;
};

export const ChartWrapper = ({ title, children }: ChartWrapperProps) => {
  return (
    <ShadowBox borderColor="gray" radius="3px" borderWidth="1px">
      <Box py="sm" px="md">
        <Flex vertical={true}>
          <Box m="md">
            <Title type={TitleType.H2}>{title}</Title>
          </Box>
          <Box>{children}</Box>
        </Flex>
      </Box>
    </ShadowBox>
  );
};

const ShadowBox = styled(Box)`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
