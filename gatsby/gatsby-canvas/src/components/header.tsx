import * as React from "react";
import { Link } from "gatsby";

const Header: React.FC = () => {
  return (
    <header className="columns-3">
      <div>
        <span>Logo</span>
      </div>
      <nav>
        <ul className="flex justify-around">
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
      <div>
        <input
          type="search"
          name="siteSearch"
          id="siteSearch"
          placeholder="Search 🔍"
        />
      </div>
    </header>
  );
};

export default Header;
