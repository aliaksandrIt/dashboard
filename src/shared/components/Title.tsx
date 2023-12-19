import styled from "styled-components";
import { device } from "../../app/styles/breakPoints";
import { colors } from "../../app/styles/colors";

type TitleProps = {
  type: TitleType;
  color?: string;
};

export enum TitleType {
  "H1" = "h1",
  "H2" = "h2",
  "H3" = "h3",
}

export const Title = styled.h1<TitleProps>`
  ${({ color }) => color && `color: ${color ?? colors.black}`};
  margin: 0;
  ${(props) =>
    props.type === "h1" &&
    `
    font-size: 1.3rem;

    @media screen and ${device.mobile} {
      font-size: 2rem;
    }
  `}
  ${(props) =>
    props.type === "h2" &&
    `
    font-size: 1.2rem;

    @media screen and ${device.mobile} {
      font-size: 1.5rem;
    }
  `}
    ${(props) =>
    props.type === "h3" &&
    `
    font-size: 0.8rem;

    @media screen and ${device.mobile} {
      font-size: 1rem;
    }
  `};
`;
