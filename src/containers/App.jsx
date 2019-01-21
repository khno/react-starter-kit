import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import Header from "../components/Header/index.jsx";
import Home from "./home/index.jsx";
import About from "./about/index.jsx";
import Login from "./login/index.jsx";
import Details from "./details/index.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false
    };
  }

  // 展示弹窗
  showModal = () => {
    this.setState({ visible: true });
  };

  render() {
    const { visible } = this.state;

    return (
      <React.Fragment>
        <Header showModal={this.showModal} />
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/details" component={Details} />
        </Switch>

        <Login visible={visible} />
      </React.Fragment>
    );
  }
}

export default App;
