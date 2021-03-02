import React from "react";
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";

// import LoginPage from "../containers/login";
// import Register from "../containers/register";
// import ForgetPassword from "../containers/forgotpassword";
// import ResetPassword from "../containers/resetpassword";

const NonAuthRouter = () => (
  <Switch>
    {/* <Route exact path="/" component={LoginPage} />
    <Route path="/register" component={Register} />
    <Route path="/forgotpassword" component={ForgetPassword} />
    <Route path="/resetpassword" component={ResetPassword} />
    <Route path="/" render={() => <Redirect to="/" />} /> */}
  </Switch>
);

export default NonAuthRouter;
