import { createGlobalStyle } from "styled-components";
import "normalize.css";
import { colors } from "./styles/colors";

const GlobalStyle = createGlobalStyle`

    :root {
        --spacing-xs: 4px;
        --spacing-sm: 8px;
        --spacing-md: 16px;
        --spacing-lg: 24px;
        --spacing-xl: 32px;
    }

    body, .ant, .ant-layout {
        font-family: 'Montserrat', sans-serif;
        color: ${colors.black};
    }
`;

export default GlobalStyle;
