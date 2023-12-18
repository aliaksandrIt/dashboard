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
  handler: () => void;
  type: ButtonType;
  htmlType?: HtmlButtonType;
};

const { Header, Content, Sider } = Layout;

export const AppHeader = styled(Header)`
  padding: 0;
`;

export const StyledContent = styled(Content)`
  margin: 16px;
  /* Дополнительные стили для Content */
`;

export const StyledSider = styled(Sider)`
  /* Дополнительные стили для Sider, если нужны */
`;
