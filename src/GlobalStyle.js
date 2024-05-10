import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
    &{
        
--Pale-blue: hsl(225, 100%, 94%);
--Bright-blue: hsl(245, 75%, 52%);
--Very-pale-blue: hsl(225, 100%, 98%);
--Desaturated-blue: hsl(224, 23%, 55%);
--Dark-blue: hsl(223, 47%, 23%);
    }
}

html{
    font-size: 62.5%;
}


*,::after,::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    min-height: 100vh;
    display: grid;
    place-items: center;
    color: var(--Dark-blue);
    background-image: url("/pattern-background-desktop.svg");
    font-family: "Red Hat Display", sans-serif;
    background-repeat: no-repeat; /* Optional: Control tiling */
  background-size: contain;
  background-color: var(--Pale-blue);
  font-size: 1.6rem;
}
`;

export default GlobalStyle;
