import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Hind', sans-serif;
    }

    html {
        height: 100%;
    }

    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a {
        text-decoration: none;
    }

    hr {
        border-top: 0;
        border-left: 0;
        border-right: 0;
        border-width: 1px;
        margin-bottom: 20px;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
`;
