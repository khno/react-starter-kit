import React from "react";
import axios from "axios";
import { removeLoading, addLoading } from "../../components/Loading/index";
import "./index.less";

class Details extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.fetchDetail();
  }

  // 根据 id 获取详情
  fetchDetail = () => {
    const { id } = this.props.match.params;
    addLoading();
    axios({
      url: `https://www.easy-mock.com/mock/590766877a878d73716e4067/mock/details/${id}`
    }).then(res => {
      const { result, success } = res.data;
      if (success) {
        removeLoading();
        this.setState({
          author: result.author,
          img: result.img,
          publishDate: result.publishDate,
          title: result.title,
          content: result.content,
          readCount: result.readCount,
          favoriteCount: result.favoriteCount,
          hasFavorite: result.hasFavorite
        });
      }
    });
  };

  // 点赞功能
  toFavorite = () => {
    console.log("点赞！");
  };

  render() {
    const {
      author,
      img,
      publishDate,
      title,
      content,
      readCount,
      favoriteCount
    } = this.state;
    return (
      <div className="details">
        <div className="container">
          <div className="header">
            <a href="">
              <img src={img} />
            </a>
            <div className="article-info">
              <span className="user-name">{author}</span>
              <span className="publish-date">{publishDate} 天前</span>
            </div>
            <h4>{title}</h4>
          </div>

          <div className="detail-body">
            <div
              dangerouslySetInnerHTML={{
                __html: content
              }}
            />
            <span className="read-counts">{readCount}次阅读</span>
            <span className="read-counts">{favoriteCount}次点赞</span>
          </div>
          <div className="detail-footer">
            <i className="iconfont" onClick={this.toFavorite}>
              &#xe630;
            </i>
          </div>
        </div>
        {/* <Route path="/details/:id" component={Topic} /> */}
      </div>
    );
  }
}

export default Details;
