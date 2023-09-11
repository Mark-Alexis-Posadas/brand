import { PageTitle, StyledWrapper } from "../../globalStyles";
import { StyledForm } from "./Contact.style";
const Contact = () => {
  return (
    <section>
      <StyledWrapper>
        <PageTitle>Contact</PageTitle>
        <StyledForm>
          <fieldset>
            <div>
              <input type="text" placeholder="Name" />
            </div>
            <div>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <textarea placeholder="Message" rows="10"></textarea>
            </div>
          </fieldset>
          <input type="submit" value="Submit" />
        </StyledForm>
      </StyledWrapper>
    </section>
  );
};

export default Contact;
