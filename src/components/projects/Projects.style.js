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
  }
`;
