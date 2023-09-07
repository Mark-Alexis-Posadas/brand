import { StyledSidebar } from "./Sidebar.style";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import data from "./data";

const Sidebar = () => {
  return (
    <StyledSidebar>
      <ul>
        <li>
          <FontAwesomeIcon
            // onClick={toggleTheme}
            icon={faMoon}
            style={{ fontSize: "1.7rem", cursor: "pointer" }}
            className="fa-rotate-180"
          />
        </li>
        {data.map((link) => (
          <li key={uuidv4()}>
            <Link to={link.path}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </StyledSidebar>
  );
};

export default Sidebar;
