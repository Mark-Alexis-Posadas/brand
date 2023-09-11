import styled from "styled-components";

export const StyledForm = styled.form`
  fieldset {
    border: none;
    width: 100%;
  }

  input,
  textarea {
    width: 100%;
    padding: 1rem;
    border: none;
    background-color: rgb(250, 250, 250);
    margin-bottom: 20px;
  }

  input[type="submit"] {
    background-color: ${(props) => props.theme.textColor};
    color: #fff;
  }
`;
