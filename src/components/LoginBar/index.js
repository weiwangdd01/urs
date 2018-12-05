//  登陸方式
import React from "react";
import "./index.less";
import { LOGIN_TYPE } from "@/constants";
class LoginBar extends React.Component {
  render() {
    return (
      <div className="login-bar">
        <div className="box" onClick={this.props.switchLoginType}>
          <div
            className={[
              "icon",
              this.props.loginType === LOGIN_TYPE.MAIL
                ? "icon-" + LOGIN_TYPE.MAIL
                : "icon-" + LOGIN_TYPE.PHONE
            ].join(" ")}
          />
          <div className="txt">{this.props.loginType === LOGIN_TYPE.MAIL?"使用電郵註冊":"使用電話註冊"}</div>
        </div>
      </div>
    );
  }
}
export default LoginBar;
