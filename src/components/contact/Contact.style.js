import styled from "styled-components";

export const StyledForm = styled.form`
  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  input,
  textarea {
    padding: 1rem;
    border: none;
    background-color: rgb(250, 250, 250);
  }

  textarea {
    min-height: 400px;
  }

  input[type="submit"] {
    background-color: ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.primary};
  }
`;
