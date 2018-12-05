//  导航栏
import React from "react";
import "./index.less";
class Confirm extends React.Component {
  render() {
    return (
      <div className="confirm">
        <div className="shadow">
          <div className="box">
            <div className="txt-box">
              <div className="txt">{this.props.txt}</div>
            </div>
            <div className="btn-box">
              <div className="btn cancel"  onClick={this.props.cancel}>取消</div>
              <div className="btn sure" onClick={this.props.sure}>确定</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Confirm;
