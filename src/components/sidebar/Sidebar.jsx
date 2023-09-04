import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import data from "./data";

const Sidebar = () => {
  return (
    <aside>
      <ul>
        {data.map((link) => (
          <li key={uuidv4()}>
            <Link to={link.path}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
