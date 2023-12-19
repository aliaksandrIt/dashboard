import { createGlobalStyle } from "styled-components";
import "normalize.css";
import { colors } from "./styles/colors";

const GlobalStyle = createGlobalStyle`
    body, .ant, .ant-layout {
        font-family: 'Montserrat', sans-serif;
        color: ${colors.black};
    }
`;

export default GlobalStyle;
