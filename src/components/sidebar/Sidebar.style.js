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

    li {
      margin-bottom: 20px;

      a {
        padding: 10px 46px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-transform: capitalize;
        color: ${(props) => props.theme.textColor};
        &.active {
          background-color: #222;
          color: #fff;
        }
      }
    }
  }
`;
