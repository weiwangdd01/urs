//  导航栏
import React from 'react';
import "./index.less";
class Tips extends React.Component {
  render() {
    return (
      <div className="component-tips">
         {this.props.txt}
      </div>
    );
  }
}
export default Tips;
