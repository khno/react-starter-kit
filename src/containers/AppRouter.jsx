import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../components/Header/index.jsx";
import Home from "./home/index.jsx";
import Details from "./details/index.jsx";
import Mine from "./mine/index.jsx";
import Login from "./login/index.jsx";

class AppRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* 公用头 */}
        <Header />
        {/* 公用登录模态框 */}
        <Login />
        {/* 路由配置 */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/mine" component={Mine} />
          <Route exact path="/details/:id" component={Details} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default AppRouter;
