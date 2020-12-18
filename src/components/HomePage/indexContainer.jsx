import React, { Component } from "react";

import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import HomePage from "./index";
import { setSelectedCourseThunk, setStepHomeThunk } from "../../redux/Home";

class HomePageContainer extends Component {
  render() {
    return (
      <HomePage
        step={this.props.stepHome}
        setStep={this.props.setStepHomeThunk}
        selectCourse={this.props.setSelectedCourseThunk}
        selectCourseData={this.props.selectedCourseData}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    stepHome: state.Home.stepHome,
    selectedCourseData: state.Home.selectCourseData,
  };
};

export default compose(
  connect(mapStateToProps, { setStepHomeThunk, setSelectedCourseThunk }),
  withRouter
)(HomePageContainer);
