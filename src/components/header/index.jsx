import React from "react";
import { Link } from "react-router-dom";
import "./index.less";
import Button from '@material-ui/core/Button';

const Header = props => (
  <header>
      <nav className="header-title">
        <div className="header-logo">
            <i className="iconfont">&#xe64b;</i>
        </div>
        <div className="header-login">
            <Button>登录</Button>
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

export default Header;
