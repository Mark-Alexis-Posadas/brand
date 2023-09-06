import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
export const FlexContainer = styled.div`
  display: flex;
  min-height: 100vh;
  overflow: hidden;
`;

export const StyledMain = styled.main`
  width: 100%;

  position: relative;

  @media screen and (min-width: 1024px) {
    margin-left: 300px;
  }
`;

export const StyledWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
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

  a {
    text-decoration: none;
  }

  svg.svg-inline--fa.fa-bars {
    position: absolute;
    right: 37px;
    top: 20px;
    background: #222;
    color: #fff;
    padding: 20px;
    border-radius: 100%;
    
    @media screen and (min-width: 1024px) {
      display: none;
    }
  }
  
`;

export default GlobalStyle;
