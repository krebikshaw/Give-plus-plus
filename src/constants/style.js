import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }
  
  a {
    text-decoration: none;
  
    &:hover {
      text-decoration: none;
    }
  }
  
  a:hover {
    cursor: pointer;
  }

  input {
    outline: none;
    border: none;
  }

  textarea {
    border: none;
    &:focus {
      outline: none;
    }
  }

  button {
    border: none;
    background-color: #fff;
    cursor: pointer;
  }

  button:hover, button:focus {
    outline: none;
  }

  body {
    font:  14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.4em;
  }
`
export default GlobalStyle;
export const MEDIA_QUERY_MD = '@media scream and (min-width: 768px)';
export const MEDIA_QUERY_LG = '@media scream and (min-width: 1000px)';
