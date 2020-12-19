import React, { Component } from "react";

import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import ProfilePage from "./index";
import { setStepProfileThunk, setUserDataThunk } from "../../redux/ProfileUser";

class ProfilePageContainer extends Component {
  render() {
    return (
      <ProfilePage
        stepProfile={this.props.stepProfile}
        setStep={this.props.setStepProfileThunk}
        selectUserTimeTable={this.props.setUserDataThunk}
        userData={this.props.userData}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    stepProfile: state.ProfileUser.stepProfile,
    userData: state.ProfileUser.userData,
  };
};

export default compose(
  connect(mapStateToProps, { setStepProfileThunk, setUserDataThunk }),
  withRouter
)(ProfilePageContainer);
