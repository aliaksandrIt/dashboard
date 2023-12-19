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
