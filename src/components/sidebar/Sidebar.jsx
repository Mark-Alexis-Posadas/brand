import { StyledSidebar } from "./Sidebar.style";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import data from "./data";

const Sidebar = () => {
  return (
    <StyledSidebar>
      <ul>
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
