import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loginModalShow } from "../../actions/index";
import axios from "axios";
import "./index.less";

const toperMenu = ["推荐", "生活", "科技"];

export class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      hasMore: true,
      active: 0
    };
  }

  componentDidMount() {
    this.fetchList({ page: 1 });
  }

  fetchList = (params, isRefresh) => {
    axios({
      url: "https://www.easy-mock.com/mock/590766877a878d73716e4067/mock/list",
      params: params
    }).then(res => {
      const { result, success } = res.data;
      if (success) {
        let data;
        if (isRefresh) {
          data = result.data;
        } else {
          data = this.state.data.concat(result.data);
        }
        this.setState({
          data,
          page: result.page,
          hasMore: result.hasMore
        });
      }
    });
  };

  // 下拉刷新
  // handleAction = () => {
  //   this.fetchList({ type: this.state.active, page: 1 }, false);
  // };

  // 上拉加载更多
  handLoadMore = () => {
    const { hasMore, active } = this.state;
    // hasMore 为假表示没有下一页数据
    if (!hasMore) {
      return false;
    }
    this.fetchList({ type: active, page: ++this.state.page }, false);
  };

  // 详情页跳转，没有登录需要去先去登录
  toDetails = id => {
    const { authenticated, loginModalShow } = this.props;
    if (authenticated) {
      const { history } = this.props;
      history.push({
        pathname: `/details?id=${id}`,
        // search: `?id=${id}`
      });
      // window.location.hash="/details"
    } else {
      loginModalShow();
    }
  };

  // 顶部菜单切换，根据向后端传参 type 来调用不同类型的列表，如：type:1 为【生活】
  handleSwitch = active => {
    this.setState({ active });
    this.fetchList({ type: active, page: 1 }, false);
  };

  render() {
    const { data, hasMore, active } = this.state;
    return (
      <div className="home">
        <div className="fix-header-nav">
          {toperMenu.map((menu, index) => (
            <button
              className={active === index ? "active" : ""}
              key={index}
              onClick={() => this.handleSwitch(index)}
            >
              {menu}
            </button>
          ))}
        </div>
        <div className="list-warp">
          {data.map((item, index) => {
            return (
              <a
                className="article-item"
                key={index}
                onClick={() => this.toDetails(item.id)}
              >
                <h4>{item.title}</h4>
                <div className="content">
                  <img src="" alt="" />
                  <p>{item.content}</p>
                </div>
                <p className="item-footer">
                  {item.name} 的创作 {item.num}个赞
                </p>
              </a>
            );
          })}
        </div>
        {!hasMore && <div className="bottom-tips">人家是有底线的...</div>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      loginModalShow
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
