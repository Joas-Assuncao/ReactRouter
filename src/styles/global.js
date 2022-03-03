import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;

        font-family: 'Roboto', sans-serif;

        box-sizing: border-box;
    }

    body {
        background: ${props => props.theme.backgroundColor};
        color: ${props => props.theme.textColor};
    }

    #root {
        height: 100vh;
    }
`;