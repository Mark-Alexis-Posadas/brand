import { useState } from "react";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import data from "./data";
import { StyledSidebar } from "./Sidebar.style";

const Sidebar = () => {
  const [themeIcon, setThemeIcon] = useState(false);

  const handleClick = () => {
    setThemeIcon(!themeIcon);
  };

  return (
    <StyledSidebar>
      <ul>
        <li>
          <FontAwesomeIcon
            onClick={handleClick}
            icon={themeIcon ? faSun : faMoon}
            style={{ fontSize: "1.7rem", cursor: "pointer" }}
            className="fa-rotate-180"
          />
        </li>
        {data.map((link, idx) => (
          <li key={uuidv4()}>
            <NavLink to={link.path} activeclassName={idx === 0 ? "active" : ""}>
              <FontAwesomeIcon icon={link.icon} />
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </StyledSidebar>
  );
};

export default Sidebar;
