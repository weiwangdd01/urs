//  验证码
import React from "react";
import "./index.less";
class VerifyCode extends React.Component {
  render() {
    return (
      <div className="verify-code">
        <div className="box-list">
          <input type="text" className="box" maxLength="1"></input>
          <input type="text" className="box" maxLength="1"></input>
          <input type="text" className="box" maxLength="1"></input>
          <input type="text" className="box" maxLength="1"></input>
        </div>
        <div className="error-info">請檢查您的驗證碼是否正確！</div>
      </div>
    );
  }
}
export default VerifyCode;
