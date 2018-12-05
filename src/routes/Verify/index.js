import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import TitleInfo from "@/components/TitleInfo/index.js";
import NavBar from "@/components/NavBar/index.js";
import VerifyCode from "@/components/VerifyCode/index.js";
import Tips from "@/components/Tips/index.js";
import { LOGIN_TYPE } from "@/constants";
import "./index.less";

class Verify extends Component {
  constructor() {
    super();
    this.state = {
      loginType: LOGIN_TYPE.MAIL,
      time : 45,
      zone : "+86",
      phone : "12345678901"
    };
  }

  componentDidMount (){
    this.intervalId = setInterval(() => {
      if(this.state.time > 0){
        this.setState({
          time: this.state.time - 1
        });
      }
    }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  nextClick = () => {
    console.log(222222);
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
    this.props.history.push("./password");
  }

  render() {
    const title = (
      <div>
        輸入驗證碼
      </div>
    );
    const txt = <div>我們已向 {this.state.zone} {this.state.phone}的手機號碼發送簡訊認證，請查看簡訊并輸入驗證碼</div>;
    const tips = (
      <div>
        接收簡訊大約還需要{this.state.time}秒
      </div>
    );

    
    return (
      <div className="register">
        <NavBar goto={this.goto}/>
        <TitleInfo title={title} txt={txt} />
        <VerifyCode></VerifyCode>
        <Tips txt={tips}></Tips>
      </div>
    );
  }
}

export default connect(({ system }) => {
  return {
    system: system.toJS()
  };
})(withRouter(Verify));
