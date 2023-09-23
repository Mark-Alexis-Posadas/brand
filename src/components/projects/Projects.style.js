import styled from "styled-components";

export const StyledArticle = styled.article`
  padding: 2rem;
  margin-bottom: 1.9rem;
  border-radius: 5px;
  box-shadow: rgba(90, 90, 90, 0.1) 1px 7px 29px 0px;
`;

export const StyledProjectGrid = styled.div`
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }
`;

export const StyledProjectFlex = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    width: calc(20% - 15px);
    margin-right: 15px;

    button {
      border: 1px solid ${(props) => props.theme.textColor};
      background-color: #fff;
      outline: none;
      margin-bottom: 10px;
      padding: 10px;
    }
    &:first-child {
      display: flex;
      flex-direction: column;
    }
    &:last-child {
      width: 80%;
      margin-right: 0px;
    }
  }
`;
