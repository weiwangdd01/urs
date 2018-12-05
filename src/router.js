import React from "react";
import { Router, Route, Switch , Redirect } from "dva/router";
import dynamic from "dva/dynamic";

function RouterConfig({ history, app }) {
  const Register = dynamic({
    app,
    models: () => [import("./models/System")],
    component: () => import("./routes/Register")
  });
  const Verify = dynamic({
    app,
    models: () => [import("./models/System")],
    component: () => import("./routes/Verify")
  });
  const Password = dynamic({
    app,
    models: () => [import("./models/System")],
    component: () => import("./routes/Password")
  });
  const Login = dynamic({
    app,
    models: () => [import("./models/System")],
    component: () => import("./routes/Login")
  });
  return (
    <Router history={history}>
      <Switch>
        <Route path="/register" exact component={Register} />
        <Route path="/verify" exact component={Verify} />
        <Route path="/password" exact component={Password} />
        <Route path="/Login" exact component={Login} />
        <Redirect path="/" to={{pathname: '/register'}} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
