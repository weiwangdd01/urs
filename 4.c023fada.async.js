webpackJsonp([4],{"90wQ":function(t,e){},"KzZ/":function(t,e){},Q464:function(t,e,n){"use strict";var a=n("Z60a"),i=n.n(a),r=n("j/rp"),o=n.n(r),c=n("C9uT"),s=n.n(c),u=n("T/v0"),l=n.n(u),m=n("tNLN"),p=n.n(m),h=n("GiK3"),v=n.n(h),f=n("90wQ"),d=(n.n(f),function(t){function e(){return i()(this,e),l()(this,p()(e).apply(this,arguments))}return s()(e,[{key:"render",value:function(){return v.a.createElement("div",{className:"component-tips"},this.props.txt)}}]),o()(e,t),e}(v.a.Component));e.a=d},Xzit:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Z60a"),i=n.n(a),r=n("j/rp"),o=n.n(r),c=n("C9uT"),s=n.n(c),u=n("T/v0"),l=n.n(u),m=n("tNLN"),p=n.n(m),h=n("GiK3"),v=n.n(h),f=n("RH2O"),d=n("F8kA"),E=n("w4dL"),y=n("caDB"),N=(n("hCne"),function(t){function e(){return i()(this,e),l()(this,p()(e).apply(this,arguments))}return s()(e,[{key:"render",value:function(){return v.a.createElement("div",{className:"verify-code"},v.a.createElement("div",{className:"box-list"},v.a.createElement("input",{type:"text",className:"box",maxLength:"1"}),v.a.createElement("input",{type:"text",className:"box",maxLength:"1"}),v.a.createElement("input",{type:"text",className:"box",maxLength:"1"}),v.a.createElement("input",{type:"text",className:"box",maxLength:"1"})),v.a.createElement("div",{className:"error-info"},"\u8acb\u6aa2\u67e5\u60a8\u7684\u9a57\u8b49\u78bc\u662f\u5426\u6b63\u78ba\uff01"))}}]),o()(e,t),e}(v.a.Component)),g=N,x=n("Q464"),b=n("oiih"),L=(n("naEJ"),function(t){function e(){var t;return i()(this,e),t=l()(this,p()(e).call(this)),t.nextClick=function(){console.log(222222)},t.switchLoginType=function(){t.state.loginType===b.b.MAIL?t.setState({loginType:b.b.PHONE}):t.setState({loginType:b.b.MAIL})},t.goto=function(){t.props.history.push("./password")},t.state={loginType:b.b.MAIL,time:45,zone:"+86",phone:"12345678901"},t}return s()(e,[{key:"componentDidMount",value:function(){var t=this;this.intervalId=setInterval(function(){t.state.time>0&&t.setState({time:t.state.time-1})},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"render",value:function(){var t=v.a.createElement("div",null,"\u8f38\u5165\u9a57\u8b49\u78bc"),e=v.a.createElement("div",null,"\u6211\u5011\u5df2\u5411 ",this.state.zone," ",this.state.phone,"\u7684\u624b\u6a5f\u865f\u78bc\u767c\u9001\u7c21\u8a0a\u8a8d\u8b49\uff0c\u8acb\u67e5\u770b\u7c21\u8a0a\u5e76\u8f38\u5165\u9a57\u8b49\u78bc"),n=v.a.createElement("div",null,"\u63a5\u6536\u7c21\u8a0a\u5927\u7d04\u9084\u9700\u8981",this.state.time,"\u79d2");return v.a.createElement("div",{className:"register"},v.a.createElement(y.a,{goto:this.goto}),v.a.createElement(E.a,{title:t,txt:e}),v.a.createElement(g,null),v.a.createElement(x.a,{txt:n}))}}]),o()(e,t),e}(h.Component));e.default=Object(f.connect)(function(t){return{system:t.system.toJS()}})(Object(d.withRouter)(L))},caDB:function(t,e,n){"use strict";var a=n("Z60a"),i=n.n(a),r=n("j/rp"),o=n.n(r),c=n("C9uT"),s=n.n(c),u=n("T/v0"),l=n.n(u),m=n("tNLN"),p=n.n(m),h=n("GiK3"),v=n.n(h),f=n("KzZ/"),d=(n.n(f),function(t){function e(){return i()(this,e),l()(this,p()(e).apply(this,arguments))}return s()(e,[{key:"render",value:function(){return v.a.createElement("div",{className:"nav-bar"},v.a.createElement("div",{className:"icon",onClick:this.props.goto}))}}]),o()(e,t),e}(v.a.Component));e.a=d},hCne:function(t,e){},hrRn:function(t,e){},naEJ:function(t,e){},oiih:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i}),n.d(e,"c",function(){return r});var a={hk01:{name:"01\u6703\u54e1",color:"#1772E6"}},i={MAIL:"mail",PHONE:"phone"},r={GOOGLE:"716334354901-1v29h4ngrj8n00g9nknhcntm1vgd5itb.apps.googleusercontent.com"}},w4dL:function(t,e,n){"use strict";var a=n("Z60a"),i=n.n(a),r=n("j/rp"),o=n.n(r),c=n("C9uT"),s=n.n(c),u=n("T/v0"),l=n.n(u),m=n("tNLN"),p=n.n(m),h=n("GiK3"),v=n.n(h),f=n("hrRn"),d=(n.n(f),function(t){function e(){return i()(this,e),l()(this,p()(e).apply(this,arguments))}return s()(e,[{key:"render",value:function(){return v.a.createElement("div",{className:"title-info"},v.a.createElement("div",{className:"title"},this.props.title),v.a.createElement("div",{className:"txt"},this.props.txt))}}]),o()(e,t),e}(v.a.Component));e.a=d}});