import styled from "styled-components";

export const StyledSidebar = styled.aside`
  background-color: ${(props) => props.theme.primary};
  width: auto;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  border-right: 1px solid #dadada;
  display: none;
  @media screen and (min-width: 1024px) {
    width: 300px;
    display: block;
  }

  ul {
    margin-top: 100px;

    li {
      margin-bottom: 20px;
      &:first-child {
        padding: 10px 46px;
        a {
          width: 21px;
          padding: 0;
        }
      }

      a {
        padding: 10px 46px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-transform: capitalize;
        color: ${(props) => props.theme.textColor};

        &.active {
          background-color: ${(props) => props.theme.textColor};
          color: ${(props) => props.theme.primary};
        }
        svg,
        span {
          font-size: 18px;
        }

        span {
          display: none;
          @media screen and (min-width: 1024px) {
            display: block;
          }
        }
      }
    }
  }
`;
