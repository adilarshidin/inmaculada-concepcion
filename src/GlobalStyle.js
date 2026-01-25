import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: "Source Serif 4", Georgia, "Times New Roman", serif;
    line-height: 1.6;
    color: #222;
    background-color: #fff;
  }

  button, input, textarea, select {
    font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }
`;

export default GlobalStyle;
