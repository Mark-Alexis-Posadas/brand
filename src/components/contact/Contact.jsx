import { PageTitle, StyledWrapper } from "../../globalStyles";
import { StyledForm } from "./Contact.style";
const Contact = () => {
  return (
    <section>
      <StyledWrapper>
        <PageTitle>Contact</PageTitle>
        <StyledForm>
          <fieldset>
            <p>
              <input type="text" placeholder="Name" />
            </p>
            <p>
              <input type="email" placeholder="Email" />
            </p>
            <p>
              <textarea placeholder="Message" cols="30" rows="10"></textarea>
            </p>
            <input type="submit" value="Submit" />
          </fieldset>
        </StyledForm>
      </StyledWrapper>
    </section>
  );
};

export default Contact;
