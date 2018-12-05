import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import TitleInfo from "@/components/TitleInfo/index.js";
import NavBar from "@/components/NavBar/index.js";
import TextInputPhone from "@/components/TextInputPhone/index.js";
import TextInput from "@/components/TextInput/index.js";
import Button from "@/components/Button/index.js";
import Tips from "@/components/Tips/index.js";
import LoginBar from "@/components/LoginBar/index.js";
import Confirm from "@/components/Confirm/index.js";
import { LOGIN_TYPE, APP_TITLE_CONFIG } from "@/constants";
import { checkEmail, checkPhoneFormat } from "@/utils/check";
import "./index.less";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      loginType: LOGIN_TYPE.PHONE,
      emailValue: "",
      zoneValue: "",
      numValue: "",
      isCheck: false,
      isShowConfirm: false
    };
  }

  nextClick = () => {
    if (this.state.isCheck) {
      this.props.history.push("./verify");
    }
  };
  switchLoginType = () => {
    if (this.state.loginType === LOGIN_TYPE.MAIL) {
      this.setState({
        loginType: LOGIN_TYPE.PHONE,
        isCheck: false
      });
    } else {
      this.setState({
        loginType: LOGIN_TYPE.MAIL,
        isCheck: false
      });
    }
  };

  goto = () => {
    this.props.history.push("./verify");
  };

  changeEmailValue = e => {
    this.setState({
      emailValue: e.target.value
    });
    if (e.target.value === "" || checkEmail(e.target.value)) {
      this.setState({
        isCheck: true
      });
    } else {
      this.setState({
        isCheck: false
      });
    }
  };

  changeZoneValue = e => {
    this.setState(
      {
        zoneValue: e[0].toString()
      },
      () => {
        this.checkPhone();
      }
    );
  };
  changeNumValue = e => {
    this.setState(
      {
        numValue: e.target.value
      },
      () => {
        this.checkPhone();
      }
    );
  };

  checkPhone = () => {
    let checkResult = checkPhoneFormat(
      this.state.zoneValue,
      this.state.numValue
    );
    this.setState({
      isCheck: checkResult
    });
  };

  confirmSure = () => {
    this.setState({
      isShowConfirm: false
    });
  };

  render() {
    const title = (
      <div>
        欢迎加入
        <span style={{ color: APP_TITLE_CONFIG.hk01.color }}>
          {APP_TITLE_CONFIG.hk01.name}
        </span>
      </div>
    );
    const tips = (
      <div>
        點擊「下一步」表示您已閱讀並同意
        <br />
        <span className="rule">隱私聲明</span>和
        <span className="rule">使用條款和細則</span>
      </div>
    );

    const txt = <div>緊跟一手實事趣聞，盡享本地生活服務優惠</div>;

    const textInputProps = {
      tips: "E-mail",
      txtTips: "请输入E-mail",
      inputValue: this.state.emailValue,
      errorTips: "請檢查您的E-mail是否正確！",
      changeValue: this.changeEmailValue,
      isCheck: this.state.isCheck
    };

    const textInputPhoneProps = {
      zoneValue: this.state.zoneValue,
      numValue: this.state.numValue,
      changeZoneValue: this.changeZoneValue,
      changeNumValue: this.changeNumValue,
      isCheck: this.state.isCheck
    };

    const confirmProps = {
      sure: this.confirmSure,
      cancel: this.confirmSure,
      txt: "此帳號已是01會員，要去登入嗎？"
    };

    return (
      <div className="register">
        <NavBar goto={this.goto} />
        <TitleInfo title={title} txt={txt} />
        {this.state.loginType === LOGIN_TYPE.MAIL ? (
          <TextInputPhone {...textInputPhoneProps} />
        ) : (
          <TextInput {...textInputProps} />
        )}
        <Button
          txt="下一步"
          enable={this.state.isCheck}
          click={this.nextClick}
        />
        <Tips txt={tips} />
        <LoginBar
          loginType={this.state.loginType}
          switchLoginType={this.switchLoginType}
        />
        {this.state.isShowConfirm ? <Confirm {...confirmProps} /> : null}
      </div>
    );
  }
}

export default connect(({ system }) => {
  return {
    system: system.toJS()
  };
})(withRouter(Register));
