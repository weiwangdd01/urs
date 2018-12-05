//  页面标题信息
import React from "react";
import "./index.less";
class TitleInfo extends React.Component {
  render() {
    return (
      <div className="title-info">
        <div className="title">{this.props.title}</div>
        <div className="txt">{this.props.txt}</div>
      </div>
    );
  }
}
export default TitleInfo;
