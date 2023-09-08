import { PageTitle, StyledWrapper } from "../../globalStyles";
const Contact = () => {
  return (
    <section>
      <StyledWrapper>
        <PageTitle>Contact</PageTitle>
        <form>
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
        </form>
      </StyledWrapper>
    </section>
  );
};

export default Contact;
