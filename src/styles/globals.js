import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:  border-box;
    outline: none;
  }

  html, body, #root {
    min-height: 100%;
  }

  body{
    background: #7159C1;
    -webkit-font-smoothing: antialiased !important;
  }

`;
