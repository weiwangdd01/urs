//  导航栏
import React from 'react';
import "./index.less";
class NavBar extends React.Component {
  render() {
    return (
      <div className="nav-bar">
        <div className="icon" onClick={this.props.goto}></div>
      </div>
    );
  }
}
export default NavBar;
