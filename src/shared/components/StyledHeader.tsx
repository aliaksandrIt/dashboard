import styled from "styled-components";
import { device } from "../../app/styles/breakPoints";

export const Header1 = styled.h1`
  font-size: 1.3rem;

  color: white;
  margin: 0;

  @media screen and ${device.mobile} {
    font-size: 1.7rem;
  }
`;
