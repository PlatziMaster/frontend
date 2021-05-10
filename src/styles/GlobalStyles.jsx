import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Roboto';
        font-size: 14px;
    }

    body {
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyles;
