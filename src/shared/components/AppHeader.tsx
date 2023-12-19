import { Button, Drawer, Flex } from "antd";
import { useState } from "react";
import { Header } from "antd/es/layout/layout";
import { MenuOutlined } from "@ant-design/icons";
import { AppMenu } from "./AppMenu";
import { colors } from "../../app/styles/colors";
import { Title, TitleType } from "./Title";
import styled from "styled-components";
import { device } from "../../app/styles/breakPoints";
import { Box } from "./Box";
import { ButtonType } from "../types";

type AppHeaderProps = {
  title: string;
  handleMenu: (value: any) => void;
  activeMenu: string;
};

export function AppHeader({ title, handleMenu, activeMenu }: AppHeaderProps) {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const toggleDrawer = () => {
    setVisible(!visible);
  };

  return (
    <StyledHeader>
      <Flex gap={"20px"} align={"center"}>
        <BurgerMenu>
          <Button type={ButtonType.Primary} onClick={showDrawer}>
            <MenuOutlined />
          </Button>
          <StyledDrawer
            width={"200px"}
            title="Navigation"
            placement="left"
            closable={false}
            onClose={toggleDrawer}
            open={visible}
          >
            <AppMenu activeMenu={activeMenu} handleMenu={handleMenu} />
          </StyledDrawer>
        </BurgerMenu>
        <Title color={colors.white} type={TitleType.H2}>
          {title}
        </Title>
      </Flex>
    </StyledHeader>
  );
}

const StyledDrawer = styled(Drawer)`
  .ant-drawer-body {
    padding: 10px;

    .ant-menu {
      border-right: 0;
    }
  }
`;

const StyledHeader = styled(Header)`
  padding: 0 25px;
`;

const BurgerMenu = styled(Box)`
  display: block;

  @media screen and ${device.tablet} {
    display: none;
  }
`;
