import React, { Component } from "react";
import ModalContainer from "./ModalContainer.js";
import "./index.less";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      userName: "",
      password: ""
    };
  }

  componentDidMount() {
    this.setState({ visible: this.props.visible });
  }

  componentWillReceiveProps(props) {
    this.setState({ visible: props.visible });
  }

  // 关闭弹窗
  handleCancel = () => {
    this.setState({ visible: false });
  };

  // 表单 onchange 事件
  handleChange = event => {
    const target = event.target;
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
    const { userName, password } = this.state;
    if (userName === "" || userName !== "admin") {
      alert("请输入正确账号！");
      return;
    } else if (password === "" || password !== "admin") {
      alert("请输入正确的密码！");
      return;
    }

    console.log("登录", this.state.userName, this.state.password);
  };

  render() {
    const { visible } = this.state;
    // const { children } = this.props;
    const divStyle = {
      zIndex: visible ? "1" : "-1"
    };
    return (
      <ModalContainer>
        <div
          className={`${visible ? "modal fade show" : "modal fade"}`}
          style={divStyle}
        >
          <div className="modal-backdrop"/>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <i onClick={this.handleCancel} className="iconfont">
                  &#xe85c;
                </i>
                <h4 className="modal-title">登录</h4>
              </div>
              <div className="modal-body">
                {/* <form action=""> */}
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
                {/* </form> */}
                <a href="">忘记密码？</a>
                <p className="login-tips">登录即表示您同意《用户协议》</p>
              </div>
            </div>
          </div>
        </div>
      </ModalContainer>
    );
  }
}
export default Login;
