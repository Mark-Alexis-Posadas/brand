import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const PageTitle = styled.h1`
  font-size: 1.8rem;
  color: ${(props) => props.theme.textColor};

  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 4rem;
  }

  @media screen and (min-width: 1440px) {
    font-size: 5rem;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
`;

export const StyledMain = styled.main`
  width: 100%;
  position: relative;

  @media screen and (min-width: 1024px) {
    margin-left: 300px;
  }
`;

export const StyledWrapper = styled.div`
  max-width: 90%;
  margin: auto;

  @media screen and (min-width: 1024px) {
    max-width: 1200px;
  }
`;

const GlobalStyle = createGlobalStyle`
  html,body {
    font-family: "Jost", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  input,textarea,button {
    font-family: "Jost", sans-serif;
  }

  section {
    min-height: calc(100vh - 125px);
    padding-top: 125px;

  }
  h1,h2,h3,h4,h5,h6 {
    margin: 0;
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
