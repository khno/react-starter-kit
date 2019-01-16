import React from 'react';
import { Link } from "react-router-dom";
import "./index.less";

const Header = props => (
  <div>
      <li>
          <Link to="/">Netflix</Link>
        </li>
        <li>
          <Link to="/about">Zillow Group</Link>
        </li>
  </div>
);

export default Header;