import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');
  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, -apple-system, Roboto, sans-serif, serif;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style-type: none;
  }
`;