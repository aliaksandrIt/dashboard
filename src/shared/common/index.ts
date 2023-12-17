import styled from "styled-components";
import { Layout } from "antd";

export enum ButtonType {
  Primary = "primary",
  Secondary = "text",
}

export enum HtmlButtonType {
  Submit = "submit",
}

export type Action = {
  label: string;
  action: () => void;
  type: ButtonType;
  htmlType?: HtmlButtonType;
};

const { Header, Content, Sider } = Layout;

export const StyledHeader = styled(Header)`
  display: flex;
  align-items: center
  padding: 2em;
  font-size: 2rem;
  color: white;
  /* Дополнительные стили для Header */
`;

export const StyledContent = styled(Content)`
  margin: 16px;
  /* Дополнительные стили для Content */
`;

export const StyledSider = styled(Sider)`
  /* Дополнительные стили для Sider, если нужны */
`;
