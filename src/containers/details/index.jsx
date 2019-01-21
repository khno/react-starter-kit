import React from "react";
import axios from "axios";
import "./index.less";
class Details extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    axios({
      url:
        "https://www.easy-mock.com/mock/590766877a878d73716e4067/mock/restful/1222/list",
      params: {
        name: "nk"
      }
    }).then(res => {
      console.log(res);
    });
  }

  render() {
    return <div className="details">
      <div className="container">
        <div className="header">
          <a href="">
            <img src="//img.xiaoduyu.com/Fo-W531Q9QUpd4V_DTDy6u5c90Vv?imageMogr2/auto-orient/thumbnail/!200/quality/90" />
          </a>
          <div className="article-info">
            <span className="user-name">Willl</span>
            <span className="publish-date">1天前</span>
          </div>
          <h4>上传视频问题，崩溃。。。。</h4>
        </div>

        <div className="detail-body" dangerouslySetInnerHTML={{__html: '<p>仿照qiniuuploadImage写了一个添加视频的工具，上传之后数据库content_html字段获取不到 video的entity，在editor中与draftHTML相关的地方感觉都改了，但是还是有问题，求指导：</p><p></p><img src="//img.xiaoduyu.com/177b5934-6542-41c5-8cd2-8beb833316b1.png"><br><img src="//img.xiaoduyu.com/55b31d23-c1d8-4bd7-91ee-a40692d04951.png"><br><img src="//img.xiaoduyu.com/8692e64f-a4e5-449b-bdbb-912ef3ef2f15.png"><br><p>后台中content已经获取到video 的entity了：</p><img src="//img.xiaoduyu.com/0c20a472-46c6-4410-a9b6-56bf4d9f0990.png"><br></br>'}}>
        </div>
      </div>
      </div>;
  }
}

export default Details;
