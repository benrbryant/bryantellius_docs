import * as React from "react";
import { Link } from "gatsby";

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Results</Link>
          </li>
          <li>
            <Link to="/">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
