export enum ButtonType {
  Primary = "primary",
  Secondary = "secondary",
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
