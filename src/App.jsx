import { Route, Routes } from "react-router-dom";
import GlobalStyle, { FlexContainer, StyledMain } from "./globalStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import { ThemeProvider } from "styled-components";

const lightTheme = {
  primary: "#ffffff",
  textColor: "#131313",
};

// const darkTheme = {
//   primary: "#181818",
//   textColor: "#ffffff",
// };

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <FlexContainer>
          <Sidebar />
          <StyledMain>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <FontAwesomeIcon icon={faBars} />
          </StyledMain>
        </FlexContainer>
      </ThemeProvider>
    </>
  );
};

export default App;
