import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import Dashboard from "../containers/dashboard";
// import Settings from "../containers/settings";
// import Wallets from "../containers/wallets";
// import Rewards from "../containers/rewards";
// import ReferFriendPage from "../containers/RefralCode";
// import BuyLCXComponent from "../containers/buyLcx";
// import StoHome from "../pages/auth/StoHome";
// import StoDashboard from "../pages/auth/StoDashboard";
// import StoTransaction from "../pages/auth/StoTransaction";
// import StoInvest from "../pages/auth/StoInvest";
// import TermsCondition from "../components/Sto/termsCondition";
// import StoInvestConfirm from "../pages/auth/StoInvestConfirm";

const AuthRouter = () => (
  <Switch>
    {/* <Route exact path="/register" render={() => <Redirect to="/home" />} />
    <Route exact path="/" render={() => <Redirect to="/home" />} />
    <Route exact path="/home" component={Dashboard} />
    <Route path="/wallet" component={Wallets} />
    <Route path="/referral" component={ReferFriendPage} />
    <Route path="/buy_lcx" component={BuyLCXComponent} />
    <Route path="/wallet/:tab" component={Wallets} />
    <Route path="/settings" component={Settings} />
    <Route path="/rewards" component={Rewards} />
    <Route path="/settings/:tab" component={Settings} /> */}
  </Switch>
);

export default AuthRouter;
