import styled from "styled-components";
import { device } from "../../app/styles/breakPoints";
import { colors } from "../../app/styles/colors";

type TitleProps = {
  type: "h1" | "h2" | "h3";
  color?: string;
};

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
