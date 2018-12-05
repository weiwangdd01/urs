import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import TitleInfo from "@/components/TitleInfo/index.js";
import NavBar from "@/components/NavBar/index.js";
import TextInputTwoLine from "@/components/TextInputTwoLine/index.js";
import Button from "@/components/Button/index.js";
import Tips from "@/components/Tips/index.js";
import ThirdPartyLogin from "@/components/ThirdPartyLogin/index.js";
import { LOGIN_TYPE, APP_TITLE_CONFIG } from "@/constants";
import "./index.less";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      loginType: LOGIN_TYPE.MAIL,
      firstValue: "111",
      secondValue: "11",
      isCheck: false
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
        loginType: LOGIN_TYPE.PHONE
      });
    } else {
      this.setState({
        loginType: LOGIN_TYPE.MAIL
      });
    }
  };

  goto = () => {
    this.props.history.push("./register");
  };

  changeFirstValue = e => {
    this.setState(
      {
        firstValue: e.target.value
      },
      () => {
        this.check();
      }
    );
  };
  changeSecondValue = e => {
    this.setState(
      {
        secondValue: e.target.value
      },
      () => {
        this.check();
      }
    );
  };

  check = () => {
    if (this.state.firstValue === this.state.secondValue) {
      this.setState({
        isCheck: true
      });
    } else {
      this.setState({
        isCheck: false
      });
    }
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
    const txt = <div>緊跟一手實事趣聞，盡享本地生活服務優惠</div>;
    const tips = (
      <div>
        使用<span style={{ color: "#41464b" }}>簡訊確認碼</span>登入
      </div>
    );
    const textInputProps = {
      firstTips: "電話區號",
      secondTips: "手機號碼",
      firstPlaceholderTips: "電話區號",
      secondPlaceholderTips: "请输入手機號碼",
      errorTips: "請檢查您的郵箱/手機號碼是否正確！",
      firstValue: this.state.firstValue,
      secondValue: this.state.secondValue,
      changeFirstValue: this.changeFirstValue,
      changeSecondValue: this.changeSecondValue,
      isCheck: this.state.isCheck
    };
    return (
      <div className="login">
        <NavBar goto={this.goto} />
        <TitleInfo title={title} txt={txt} />
        <TextInputTwoLine {...textInputProps} />
        <Button
          txt="下一步"
          enable={this.state.isCheck}
          click={this.nextClick}
        />
        <Tips txt={tips} />
        <ThirdPartyLogin />
      </div>
    );
  }
}

export default connect(({ system }) => {
  return {
    system: system.toJS()
  };
})(withRouter(Login));
