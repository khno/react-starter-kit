import React from "react";
import { connect } from "react-redux";
import ReactPullLoad, { STATS } from "react-pullload";
import Modal from "../../components/Modal/index.jsx";
// import ReactPullLoad, { STATS } from "../../utils/pulltoload";

import axios from "axios";
import "./index.less";

export class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      hasMore: true,
      action: STATS.init
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

  handleAction = action => {
    console.info(action, this.state.action, action === this.state.action);
    //new action must do not equel to old action
    if (!this.state.hasMore) {
      return false;
    }
    this.handLoadMore();

    // if (action === STATS.refreshing) {
    //   //刷新
    //   this.handRefreshing();
    // } else if (action === STATS.loading) {
    //   console.log(1)
    //   //加载更多
    // } else {
    //   //DO NOT modify below code
    //   this.setState({
    //     action: action
    //   });
    // }
  };

  // 下拉刷新
  handRefreshing = () => {
    let isRefresh = true;
    this.fetchList({ page: 1 }, isRefresh);
  };

  handLoadMore = () => {
    if (!this.state.hasMore) {
      return false;
    }
    this.fetchList({ page: ++this.state.page }, false);
  };

  render() {
    const { data, hasMore, visible } = this.state;

    return (
      <div className="home">
        <div className="fix-header-nav">
          <button className="active" onClick={this.handRefreshing}>
            推荐
          </button>
          <button onClick={this.handRefreshing}>生活</button>
          <button onClick={this.handRefreshing}>科技</button>
        </div>
        <ReactPullLoad
          action={this.state.action}
          handleAction={this.handleAction} // 满足下拉加载更多的回调函数
          downEnough={150} // 满足下拉刷新的距离
          distanceBottom={100} // 距离底部距离触发加载更多 默认值为100像素
          hasMore={hasMore}
          style={{ paddingTop: 95 }}
        >
          <ul className="list-wrap">
            {data.map((item, index) => {
              return (
                <li className="article-item" key={index}>
                  <h4>{item.title}</h4>
                  <div className="content">
                    <img src="" alt="" />
                    <p>{item.content}</p>
                  </div>
                  <p className="item-footer">
                    {item.name} 的创作 {item.num}个赞
                  </p>
                </li>
              );
            })}
            {!hasMore && <div className="bottom-tips">人家是有底线的...</div>}
          </ul>
        </ReactPullLoad>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  rootInitData: store
});

export default connect(
  mapStateToProps,
  null
)(Home);
