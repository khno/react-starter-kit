import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { signoutUser } from "../../actions/index";
import "./index.less";

class Mine extends React.Component {
  signoutUser = () => {
    this.props.signoutUser().then(res => {
      alert("登出成功！");
      const { history } = this.props;
      history.push({
        pathname: `/`
      });
    });
  };

  render() {
    return (
      <div className="mine-wrap">
        <div className="toper">
          <span className="user-head">
            <img
              src="https://img.souche.com/20161230/png/8bb4f0fd45ed6ae26533eadd85f0f7ea.png"
              alt=""
            />
          </span>
          <div>
            <p className="user-name">Allan</p>
            <p>加入于：3天前</p>
          </div>
        </div>
        <a href="javascript:void(0);" className="row-item">
          <div className="item-name">我的收藏</div>
          <span className="fr">
            <i className="iconfont">&#xe602;</i>
          </span>
        </a>
        <a
          onClick={this.signoutUser}
          href="javascript:void(0);"
          className="row-item"
        >
          <div className="item-name">退出登录</div>
          <span className="fr">
            <i className="iconfont">&#xe602;</i>
          </span>
        </a>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      signoutUser
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Mine);
