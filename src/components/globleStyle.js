import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
}
html{
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: lightblue;
    }
}

body{
    background: #151320;
    color: white;
    scroll-behavior: smooth;
}

 `;

export default GlobalStyle;
