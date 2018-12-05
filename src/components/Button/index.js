//  按钮
import React from "react";
import "./index.less";
class Button extends React.Component {
  render() {
    return (
      <div className="button" style={{ ...this.props.style }}>
        <div  onClick={this.props.click} className={["txt", this.props.enable ? "txt-enable" : null].join(" ")}>
          {this.props.txt}
        </div>
      </div>
    );
  }
}
export default Button;
