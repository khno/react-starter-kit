import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import Header from "../components/header/index.jsx";
import Home from "./home/index.jsx";
import About from "./about/index.jsx";
import Modal from "../components/Modal/index.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: !false
    };
  }

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    console.log("我是onClose回调");
  };

  handleOk = () => {
    console.log("我是confirm回调");
  };

  render() {
    const { visible } = this.state;
    return (
      <React.Fragment>
        <Header showModal={this.showModal} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>

        <Modal
          visible={visible}
          title="登录"
          handleOk={this.handleOk}
          handleCancel={this.handleCancel}
        >
          这是自定义content
        </Modal>
      </React.Fragment>
    );
  }
}

export default App;
