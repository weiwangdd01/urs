import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import TitleInfo from "@/components/TitleInfo/index.js";
import NavBar from "@/components/NavBar/index.js";
import TextInputTwoLine from "@/components/TextInputTwoLine/index.js";
import Button from "@/components/Button/index.js";
import "./index.less";

class Register extends Component {
  constructor() {
    super();
    this.state = {
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

  goto = () => {
    this.props.history.push("./login");
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
    const title = <div>設置登入密碼</div>;

    const txt = <div>為了您的帳戶安全，請設置登入密碼</div>;

    const textInputProps = {
      firstTips: "登入密碼",
      secondTips: "確認登入密碼",
      firstPlaceholderTips: "請輸入登入密碼",
      secondPlaceholderTips: "請再次確認登入密碼",
      errorTips: "2次輸入密碼不一致，請從新輸入",
      firstValue: this.state.firstValue,
      secondValue: this.state.secondValue,
      changeFirstValue: this.changeFirstValue,
      changeSecondValue: this.changeSecondValue,
      isCheck: this.state.isCheck
    };
    return (
      <div className="password">
        <NavBar goto={this.goto} />
        <TitleInfo title={title} txt={txt} />
        <TextInputTwoLine
          setInputValue={this.setInputValue}
          {...textInputProps}
        />
        <Button
          txt="下一步"
          enable={this.state.isCheck}
          click={this.nextClick}
        />
      </div>
    );
  }
}

export default connect(({ system }) => {
  return {
    system: system.toJS()
  };
})(withRouter(Register));
