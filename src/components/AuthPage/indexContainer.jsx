import React, { Component } from "react";

import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import AuthPage from "./index";
import { setAuthUserThunk, setDataUserThunk } from "../../redux/ProfileUser";

let AuthPageContainer = (props) => {
  return <AuthPage setAuth={props.setAuthUserThunk} />;
};

let mapStateToProps = (state) => {
  return { authUser: state.ProfileUser.authUser };
};

export default compose(
  connect(mapStateToProps, { setAuthUserThunk }),
  withRouter
)(AuthPageContainer);
