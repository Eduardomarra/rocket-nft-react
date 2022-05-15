import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    ${({ theme }) => css`
        html {
            font-size: 62.5%;
            scroll-behavior: smooth;
        }
        body {
            font-family: ${theme.font.family};
            background-color: ${theme.colors.bodyBackground};
        }
        button {
            cursor: pointer;
            background: none;
            border: none;
        }
        ul {
            list-style: none;
        }
        a {
            text-decoration: none;
        }
    `}
`
export default GlobalStyles
