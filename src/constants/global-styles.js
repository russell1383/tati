import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*::before,
*::after,
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

  }
  *:focus {
    outline: none;
}


  body {
    overflow-x: hidden;

      font-family: 'Lato', sans-serif;
    background: ${({ theme }) => theme.colors.secondary};
    
    h1,h2,button{
      font-family: 'Vidaloka', serif;
    }

  
    
    .slick-prev, .slick-next{
    display: none !important;

    
  }
  }

  hr{
      background-color: #ebebeb;
      border: 0;
      height: 1px;
    }
  a{
    text-decoration: none;
  }

  
  button{
    cursor: pointer;
  }

`;

export default GlobalStyle;
