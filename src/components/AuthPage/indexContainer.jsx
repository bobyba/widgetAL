import React, { Component } from "react";

import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import AuthPage from "./index";

class AuthPageContainer extends Component {
  render() {
    return <AuthPage />;
  }
}

let mapStateToProps = (state) => {
  return {};
};

export default compose(
  connect(mapStateToProps, {}),
  withRouter
)(AuthPageContainer);
