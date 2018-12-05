//  雙行输入框
import React from "react";
import "./index.less";
class TextInputTwoLine extends React.Component {
  render() {
    return (
      <div className="text-input-two-line">
        {this.props.firstValue.length > 0 ? (
          <div className={"tip first-tip"}>
            {this.props.firstPlaceholderTips}
          </div>
        ) : null}
        <input
          type="text"
          className="first-input"
          value={this.props.firstValue}
          onChange={this.props.changeFirstValue}
          placeholder={this.props.firstTips}
        />
        {this.props.secondValue.length > 0 ? (
          <div className={"tip second-tip"}>{this.props.secondTips}</div>
        ) : null}
        <input
          type="text"
          className="second-input"
          value={this.props.secondValue}
          onChange={this.props.changeSecondValue}
          placeholder={this.props.secondPlaceholderTips}
        />
        {this.props.isCheck ? null : (
          <div className="error-tip">{this.props.errorTips}</div>
        )}
      </div>
    );
  }
}
export default TextInputTwoLine;
