import { createGlobalStyle } from 'styled-components';

import Colors from './colors'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Ubuntu', sans-serif;
    background-color: ${Colors.White};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  .container{
    max-width: 1200px;
    width: 100%;
    padding: 0px 15px;
    margin: 0px auto;
  }

  .space-header{
    height: 80px;
  }
`

export default GlobalStyle
