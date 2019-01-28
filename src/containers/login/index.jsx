import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ModalContainer from "./ModalContainer";
import { signinUser, loginModalhide } from "../../actions/index";
import "./index.less";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };
  }

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
    const { signinUser, loginModalhide } = this.props;

    // 模拟后端验证账号密码
    if (userName === "" || userName !== "admin") {
      alert("请输入正确账号！");
      return;
    } else if (password === "" || password !== "123456") {
      alert("请输入正确的密码！");
      return;
    }

    signinUser({ userName, password })
      .then(res => {
        // 接口请求成功，关闭弹窗
        if (res.success) {
          loginModalhide();
        }
      })
      .catch(err => {
        // 接口报错处理
        console.log(err);
      });
  };

  render() {
    const { isLoginModalShow, loginModalhide } = this.props;
    const { visible } = isLoginModalShow;
    const divStyle = {
      zIndex: visible ? "1" : "-1"
    };
    return (
      <ModalContainer>
        <div
          className={`${visible ? "modal fade show" : "modal fade"}`}
          style={divStyle}
        >
          <div className="modal-backdrop" />
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <i onClick={loginModalhide} className="iconfont">
                  &#xe85c;
                </i>
                <h4 className="modal-title">登录</h4>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  placeholder="请输入账号：admin"
                  onChange={this.handleChange}
                />
                <input
                  type="password"
                  placeholder="请输入密码：123456"
                  onChange={this.handleChange}
                />
                <input
                  type="submit"
                  className="submit-btn"
                  value="登录"
                  onClick={this.toLogin}
                />
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

const mapStateToProps = state => ({
  isLoginModalShow: state.isLoginModalShow
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      signinUser,
      loginModalhide
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
