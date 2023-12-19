import styled from "styled-components";
import {
  margin,
  padding,
  xMargin,
  xPadding,
  yMargin,
  yPadding,
} from "../utils";
type BoxProps = {
  p?: string;
  m?: string;
  px?: string;
  py?: string;
  mx?: string;
  my?: string;
  width?: string;
  radius?: string;
};

export const Box = styled.div<BoxProps>`
  ${(props) => props.p && padding(props.p)}
  ${(props) => props.m && margin(props.m)}
  ${(props) => props.px && xPadding(props.px)}
  ${(props) => props.py && yPadding(props.py)}
    ${(props) => props.mx && xMargin(props.mx)}
  ${(props) => props.my && yMargin(props.my)}
  border-radius: ${(props) => props.radius || "0"};
  width: ${(props) => props.width || "auto"};
`;
