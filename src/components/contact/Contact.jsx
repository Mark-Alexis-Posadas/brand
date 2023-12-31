import { PageTitle, StyledWrapper } from "../../globalStyles";
import { StyledForm } from "./Contact.style";
const Contact = () => {
  return (
    <section>
      <StyledWrapper>
        <PageTitle>Contact</PageTitle>
        <StyledForm>
          <div>
            <input type="text" placeholder="Name" />
          </div>
          <div>
            <input type="email" placeholder="Email" />
          </div>
          <div>
            <textarea placeholder="Message" rows="10"></textarea>
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </StyledForm>
      </StyledWrapper>
    </section>
  );
};

export default Contact;
