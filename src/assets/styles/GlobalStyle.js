import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-family: 'Merriweather Sans', sans-serif;
    }

    *, *::after, *::before {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }

    a, button, select {
        font-family: 'Merriweather Sans', sans-serif;
    }

    p {
        font-size: ${({ theme }) => theme.fontSizes.primary};
        margin-bottom: 3rem;
        letter-spacing: .5px;
        line-height: 1.5;
    }

    h1 {
        font-size: ${({ theme }) => theme.fontSizes.large};
        text-transform: uppercase;
        font-weight: 800;
        letter-spacing: 1px;
        margin-bottom: 1rem;
        line-height: 1.1;
    }
`;
