import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Manrope', sans-serif;
    background-color: #cacaca;
  }

  img {
    width: 100%;
  }
`;
