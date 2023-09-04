import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
export const FlexContainer = styled.div`
  display: flex;
  min-height: 100vh;
  overflow: hidden;
`;

export const StyledMain = styled.main`
  width: 100%;
  margin-left: 300px;
`;

const GlobalStyle = createGlobalStyle`
  html,body {
    font-family: "Jost", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
