//  输入框
import React from "react";
import "./index.less";
import "./index.less";
import { zoneData } from "@/utils/zone";
import { Picker } from "antd-mobile";

class TextInputPhone extends React.Component {
  constructor() {
    super();
    this.state = {
      zoneTips: "電話區號",
      numTips: "手機號碼",

      zonePlaceholderTips: "電話區號",
      numPlaceholderTips: "请输入手機號碼",
      
      errorTips: "請檢查您的手機號碼是否正確！"
    };
  }
  
  render() {
    return (
      <div className="text-input-phone">
        <div
          className={[
            "input-box",
            this.state.status === "error" ? "input-error" : null
          ].join(" ")}
        >
          {this.props.zoneValue.length > 0 ? (
            <div className={"tip zone-tip"}>
              {this.state.zonePlaceholderTips}
            </div>
          ) : null}
          <Picker
            data={zoneData}
            cols={1}
            title="Areas"
            onOk={this.props.changeZoneValue}
          >
            <div className="ant-select zone">{this.props.zoneValue}{this.props.zoneValue.length > 0 ? null : <span className = "zonePlaceHolder">{this.state.zonePlaceholderTips}</span>}</div>
          </Picker>
          <div className="line" />
          {this.props.numValue.length > 0 ? (
            <div className={"tip num-tip"}>{this.state.numTips}</div>
          ) : null}
          <input
            type="text"
            className="num"
            value={this.props.numValue}
            onChange={this.props.changeNumValue}
            placeholder={this.state.numPlaceholderTips}
          />
        </div>
        {this.props.isCheck ? null : (
          <div className="error-tip">{this.state.errorTips}</div>
        )}
      </div>
    );
  }
}
export default TextInputPhone;
