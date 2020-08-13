import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}

    *, *:before, *:after {
        box-sizing: border-box;
    }

    html {
        box-sizing: border-box;
    }

    html, body, #___gatsby, #___gatsby > div {
        height: 100%;
        background: #fff;
        color: #024059;
        font-family: Roboto, Helvetica, sans-serif;
        margin: 0;
        padding: 0;
    }

    body {
        border: 10px solid #F25C05;
        box-sizing: border-box;
        height: auto;
    }

`;
