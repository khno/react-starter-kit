import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./index.less";

const Header = props => {
  const { handleOpen, authenticated } = props;

  return (
    <header>
      <nav className="header-title">
        <div className="header-logo">
          <Link to="/">
            <i className="iconfont">&#xe64b;</i>
          </Link>
        </div>
        {authenticated ? (
          <Link to="/mine" className="mine">
            <img
              src="https://img.souche.com/20161230/png/8bb4f0fd45ed6ae26533eadd85f0f7ea.png"
              alt=""
            />
          </Link>
        ) : (
          <div className="header-login">
            <button onClick={handleOpen}>登录</button>
          </div>
        )}
      </nav>
    </header>
  );
};

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);
