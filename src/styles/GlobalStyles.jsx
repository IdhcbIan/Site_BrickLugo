import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rozha+One&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Avenir+Light&display=swap');
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  body {
    background-color: #f5f5f5;
    color: #333333;
    margin: 0;
    padding: 0;
    font-family: 'Rozha One', serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
  }
  h1 {
    color: #404040;
  }
  h2 {
    color: #404040;
  }
  h3 {
    color: #404040;
  }
`;

export default GlobalStyles;
