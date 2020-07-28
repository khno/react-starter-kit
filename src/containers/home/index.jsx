import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";
import { loginModalShow } from "../../actions/index";
import { removeLoading, addLoading } from "../../components/Loading/index";
import "./index.less";

const toperMenu = ["推荐", "生活", "科技"];

export class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      hasMore: false, // 是否有下一页
      active: 0
    };
  }

  componentDidMount() {
    // page 为当前页码，type 为列表类型："推荐", "生活", "科技"
    this.fetchList({ page: 1, type: 0 });
  }

  //  列表数据获取
  fetchList = (params, isRefresh) => {
    addLoading();
    // axios({
    //   url: "https://www.easy-mock.com/mock/590766877a878d73716e4067/mock/list",
    //   params: params
    // }).then(res => {
    //   const { result, success } = res.data;
    //   if (success) {
    //     removeLoading();
    //     let data;
    //     if (isRefresh) {
    //       data = result.data;
    //     } else {
    //       data = this.state.data.concat(result.data);
    //     }
    //     this.setState({
    //       data,
    //       page: result.page,
    //       hasMore: result.hasMore
    //     });
    //   }
	// });
	// mock data
	setTimeout(() => {
		const res = {
			"result": {
			  "data": [
				{
				  "id": "1",
				  "title": "《玩具總動員》",
				  "content": "《玩具總動員》（英語：Toy Story）是一部於1995年上映的美国计算机动画冒险伙伴（英语：Buddy film）喜剧片，由皮克斯动画工作室制作，华特迪士尼影业发行。该片是 ...",
				  "wechat_id": "xxiyk",
				  "name": "華特迪士尼影業‎; ‎皮克斯動畫工作室",
				  "num": "99"
				},
				{
				  "id": "2",
				  "title": "《蟲蟲危機》",
				  "content": "蟲蟲危機（英語：A Bug's Life）是一部3D動畫電影，由皮克斯動畫工作室制作，华特迪士尼以及Buena Vista Distribution在美国于1998年9月14日发布，英国部分 ...",
				  "wechat_id": "xxiyk",
				  "name": "‎博伟影片",
				  "num": "99"
				},
				{
				  "id": "3",
				  "title": "《怪獸電力公司》",
				  "content": "《怪兽电力公司》（英語：Monsters, Inc.）是一部2001年的美国计算机动画喜剧片，由皮特·多克特执导，皮克斯动画工作室制作，华特迪士尼影片发行，李·昂克里奇和大卫· ...",
				  "wechat_id": "xxiyk",
				  "name": "皮克斯动画工作室",
				  "num": "99"
				},
			  ],
			  "page": 1,
			  "hasMore": false
			},
			"success": true
		  }
		const { result, success } = res;
		if (success) {
			removeLoading();
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
	}, 500)
  };

  // 顶部菜单切换，根据向后端传参 type 来调用不同类型的列表，如：type:1 为【生活】
  handleSwitch = active => {
    this.setState({ active });
    this.fetchList({ type: active, page: 1 }, true);
  };

  // 详情页跳转，没有登录需要去先去登录
  toDetails = id => {
    const { authenticated, loginModalShow } = this.props;
    if (authenticated) {
      const { history } = this.props;
      history.push({
        pathname: `/details/${id}`
      });
    } else {
      loginModalShow();
    }
  };

  // 上拉加载更多
  handLoadMore = () => {
    const { hasMore, active } = this.state;
    // hasMore 为假表示没有下一页数据
    if (!hasMore) {
      return false;
    }
    this.fetchList({ type: active, page: ++this.state.page }, false);
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
