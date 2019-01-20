import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import Header from "../components/Header/index.jsx";
import Home from "./home/index.jsx";
import About from "./about/index.jsx";
import Modal from "../components/Modal/index.jsx";
import Password from "antd/lib/input/Password";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: !false,
      userName: "",
      password: ""
    };
  }

  // 展示弹窗
  showModal = () => {
    this.setState({ visible: true });
  };

  // 关闭弹窗
  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleChange = event => {
    const target = event.target;
    console.log(target.type)
    if (target.type === "text") {
      this.setState({
        userName: target.value
      });
    }
    if (target.type === "password") {
      this.setState({
        password: target.value
      });
    }
  };

  // 表单提交
  toLogin = () => {
    console.log("登录", this.state.userName, this.state.password);
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

        <Modal visible={visible}>
          <div className="modal-header">
            <i onClick={this.handleCancel} className="iconfont">
              &#xe85c;
            </i>
            <h4 className="modal-title">登录</h4>
          </div>
          <div className="modal-body">
            <form action="">
              <input
                type="text"
                placeholder="请输入账号：admin"
                onChange={this.handleChange}
              />
              <input
                type="password"
                placeholder="请输入：admin"
                onChange={this.handleChange}
              />
              <input
                type="submit"
                className="submit-btn"
                value="登录"
                onClick={this.toLogin}
              />
            </form>
            <a href="">忘记密码？</a>
            <p className="login-tips">登录即表示您同意《用户协议》</p>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

export default App;
