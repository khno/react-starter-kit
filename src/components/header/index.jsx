import React from "react";
import { Link } from "react-router-dom";
import "./index.less";

const Header = props => {
  const { showModal } = props;
  return (
    <header>
      <nav className="header-title">
        <div className="header-logo">
          <i className="iconfont">&#xe64b;</i>
        </div>
        <div className="header-login">
          <button onClick={showModal}>登录</button>
        </div>
      </nav>
      {/*       
    <li>
      <Link to="/">Netflix</Link>
    </li>
    <li>
      <Link to="/about">Zillow Group</Link>
    </li> */}
    </header>
  );
};

export default Header;
