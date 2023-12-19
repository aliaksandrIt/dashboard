import Sider from "antd/es/layout/Sider";
import styled from "styled-components";
import { device } from "../../app/styles/breakPoints";

export const StyledSider = styled(Sider)`
  display: none;

  @media screen and ${device.tablet} {
    display: block;
  }
`;
