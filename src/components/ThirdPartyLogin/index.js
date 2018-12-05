//  登陸方式
import React from "react";
import "./index.less";
import { THRID_LOGIN_CLIENT_ID } from "@/constants";
class ThirdPartyLogin extends React.Component {
  constructor(){
    super();
    this.auth2 = {};
  }
  componentDidMount() {
    this.googleLoginInit();
  }
  
  googleLoginInit = () => {
    let that = this;
    window.gapi.load("auth2", function() {
      that.auth2 = window.gapi.auth2.init({
        client_id:THRID_LOGIN_CLIENT_ID.GOOGLE
      });
      that.attachSignin(document.getElementById("google-login"));
    });
  }

  attachSignin = (element) => {
    this.auth2.attachClickHandler(
      element,
      {},
      function(googleUser) {
        console.log(googleUser.getBasicProfile());
      },
      function(error) {
        alert(JSON.stringify(error, undefined, 2));
      }
    );
  }

  facebookLogin = () => {
    window.FB.login(
      function(response) {
        console.log(response);
        if (response.status === "connected") {
          window.FB.api("/me", function(response) {
            console.log("Successful login for: " + response.name);
          });
        } else {
          console.log("该用户没有登录");
        }
      },
      { scope: "public_profile,email" }
    );
  }
  
  render() {
    return (
      <div className="third-party-login">
        <div className="title">- 以社交媒體登入 -</div>
        <div className="box" id="google-login">
          <div className={["icon", "icon-google"].join(" ")} />
          <div className="txt">Google</div>
        </div>
        <div className="box" id="facebook-login" onClick={this.facebookLogin}>
          <div className={["icon", "icon-facebook"].join(" ")} />
          <div className="txt">FaceBook</div>
        </div>
      </div>
    );
  }
}
export default ThirdPartyLogin;
