import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import { ThemeProvider } from "styled-components";

import GlobalStyle, { FlexContainer, StyledMain } from "./globalStyles";

const lightTheme = {
  primary: "#ffffff",
  textColor: "#131313",
};

const darkTheme = {
  primary: "rgb(43, 57, 69)",
  textColor: "#ffffff",
};

const App = () => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const isDarkTheme = theme === "dark";

  const toggleMainTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };

  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <FlexContainer>
          {toggle && (
            <Sidebar
              toggleMainTheme={toggleMainTheme}
              isDarkTheme={isDarkTheme}
              toggleSidebar={handleClick}
            />
          )}
          <StyledMain>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>

            <FontAwesomeIcon
              icon={toggle ? faBars : faWindowClose}
              onClick={handleClick}
              className="menu-bar"
            />
          </StyledMain>
        </FlexContainer>
      </ThemeProvider>
    </>
  );
};

export default App;
