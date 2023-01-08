import { createGlobalStyle } from "styled-components";

const customMediaQuery = (maxWidth, queryType = "max-width") =>
  `@media (${queryType}: ${maxWidth}px)`;

const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(922),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(576),
};

export const myAppTheme = {
  primaryColor: "#000000",
  secondaryColor: "#ffffff",
  media,
};

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Unica 77 LL';
        src: url('fonts/Unica_77LL-Medium.woff2') format('woff2'),
            url('fonts/Unica_77LL-Medium.woff') format('woff');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Unica 77 LL';
        src: url('fonts/Unica_77LL-Regular.woff2') format('woff2'),
            url('fonts/Unica_77LL-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
    body {
        font-family: "Unica 77 LL", sans-serif !important;
        margin: 0;
        padding: 0;
        background-color: ${({ theme }) => theme.bodyBg};
        color: ${({ theme }) => theme.textColor};
        transition: 300ms all ease-in-out;
    }
`;
