import styled from "styled-components";

export const StyledSidebar = styled.aside`
  width: 300px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  border-right: 1px solid #dadada;
  display: none;

  @media screen and (min-width: 1024px) {
    display: block;
  }

  ul {
    margin-top: 100px;
    margin-left: 60px;
    li {
      margin-bottom: 20px;
      a {
        text-transform: capitalize;
        color: #222;
      }
    }
  }
`;
