import styled from "styled-components";
type BoxProps = {
  p?: string;
  m?: string;
  pt?: string;
  pb?: string;
  pl?: string;
  pr?: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  px?: string;
  py?: string;
  mx?: string;
  my?: string;
};

const Box = styled.div<BoxProps>`
  padding: ${(props) => props.p || "0"};
  margin: ${(props) => props.m || "0"};
  padding-top: ${(props) => props.pt || props.py || "0"};
  padding-bottom: ${(props) => props.pb || props.py || "0"};
  padding-left: ${(props) => props.pl || props.px || "0"};
  padding-right: ${(props) => props.pr || props.px || "0"};
  margin-top: ${(props) => props.mt || props.my || "0"};
  margin-bottom: ${(props) => props.mb || props.my || "0"};
  margin-left: ${(props) => props.ml || props.mx || "0"};
  margin-right: ${(props) => props.mr || props.mx || "0"};
`;

export default Box;
