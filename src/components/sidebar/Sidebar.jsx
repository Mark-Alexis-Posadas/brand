import { useState } from "react";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import data from "./data";
import { StyledSidebar } from "./Sidebar.style";

const Sidebar = ({ toggleMainTheme, isDarkTheme, toggleSidebar }) => {
  const [themeIcon, setThemeIcon] = useState(false);

  const handleClick = () => {
    toggleMainTheme();
    setThemeIcon(!themeIcon);
  };

  return (
    <StyledSidebar style={{ display: toggleSidebar ? "block" : "none" }}>
      <ul>
        <li>
          <a href="#">
            <FontAwesomeIcon
              onClick={handleClick}
              icon={isDarkTheme ? faSun : faMoon}
              style={{ fontSize: "1.7rem", cursor: "pointer" }}
              className={isDarkTheme ? "fa-rotate-180" : ""}
            />
          </a>
        </li>
        {data.map((link) => (
          <li key={uuidv4()}>
            <NavLink to={link.path} activeclassname="active">
              <FontAwesomeIcon icon={link.icon} />
              <span>{link.text}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </StyledSidebar>
  );
};

export default Sidebar;
