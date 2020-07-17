import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    -webkit-font-smoothing: antialiased;
    height: 100vh;
    width: 100%;
    background: #0f171e;
  }
  body, input, button {
    font-size: 14px;
  }
  button {
    cursor: pointer;
  }
`;