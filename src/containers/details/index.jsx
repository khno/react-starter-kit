import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";
import "./index.less";
class Details extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    axios({
      url: `https://www.easy-mock.com/mock/590766877a878d73716e4067/mock/details/${id}`
    }).then(res => {
      const { result, success } = res.data;
      if (success) {
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
  }

  toFavorite = () => {};

  render() {
    const {
      author,
      img,
      publishDate,
      title,
      content,
      readCount,
      favoriteCount,
      hasFavorite
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  errorMessage: state.auth.error
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      // signinUser
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
