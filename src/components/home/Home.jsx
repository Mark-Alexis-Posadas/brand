import { PageTitle, StyledText, StyledWrapper } from "../../globalStyles";
import { StyledHome } from "./Home.style";

const Home = () => {
  return (
    <StyledHome>
      <StyledWrapper>
        <PageTitle>
          Hello! I&apos;m Mark <br /> Alexis Posadas
        </PageTitle>
        <StyledText>
          I am a front-end developer with a passion for creating beautiful,
          functional, and user-friendly websites.
        </StyledText>
      </StyledWrapper>
    </StyledHome>
  );
};

export default Home;
