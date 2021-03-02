import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import "./App.css";
import Home from "./components/Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <>
      <Home />
    </>
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(App);