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
@media (max-width: 1024px) {
  html{
  font-size: 70%;
  }
}
body{
    background: #151320;
    color: white;
    scroll-behavior: smooth;
    
font-family: 'Poppins', sans-serif;
}
h1{
    font-family: 'Metal Mania', cursive;
    font-size: 2.5rem;
    font-weight: bold;
}
h2{
    font-family: 'Metal Mania', cursive;
    font-size: 2rem;
    font-weight: lighter;
    letter-spacing: 0.5rem;
   
}
h3{
    color: white;
    font-size: 2rem;
}
li{
    color: white;
    text-decoration: none;
    list-style: none;
    cursor: pointer;
}

button{
    cursor: pointer;
    background: #493e74;
    color: white;
    border: none;
    padding: 0.2rem 1rem;
    transition: all 1s ease;
    &:hover{
        background: white;
        color: #493e74;
    }
}
a{
    color: blue;
    text-decoration: none;
}
 `;

export default GlobalStyle;
