import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { setCookie, getCookie } from "../utils/common.js";
import axios from "axios";

import Header from "../components/Header/index.jsx";
import Home from "./home/index.jsx";
import About from "./about/index.jsx";
import Login from "./login/index.jsx";
import Details from "./details/index.jsx";

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     visible: false
  //   };
  // }

  // 展示弹窗
  handleOpen = () => {
    this.setState({ visible: true });
  };

  // 关闭弹窗
  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    // const { visible } = this.state;

    return (
      <React.Fragment>
        {/* <Header handleOpen={this.handleOpen} /> */}
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/details/:id" component={Details} />
        </Switch>

        <Login />
      </React.Fragment>
    );
  }
}

export default App;
