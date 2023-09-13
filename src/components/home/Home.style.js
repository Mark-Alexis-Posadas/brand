import styled from "styled-components";

export const StyledHome = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0;
  min-height: 100vh;

  @media screen and (min-width: 1366px) {
    h1 {
      font-size: 7rem;
      line-height: 1;
    }

    p {
      font-size: 25px;
      max-width: 70%;
      margin: auto;
    }
  }
`;
