//  输入框
import React from "react";
import "./index.less";
class TextInput extends React.Component {
 
  render() {
    return (
      <div className="text-input">
        {this.props.inputValue.length > 0 ? (
          <div className="tip">{this.props.tips}</div>
        ) : null}
        <input
          type="text"
          className={[this.props.isCheck ? null : "input-error"].join(" ")}
          value={this.props.inputValue}
          onChange={this.props.changeValue}
          placeholder={this.props.txtTips}
        />
        {this.props.isCheck ? null : (
          <div className="error-tip">{this.props.errorTips}</div>
        )}
      </div>
    );
  }
}
export default TextInput;
