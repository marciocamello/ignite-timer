import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme['green-500']};
    }

    body{
        background: ${props => props.theme["gray-900"]};
        color: ${props => props.theme["gray-300"]};
    }

    body, input, button,textarea{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`;