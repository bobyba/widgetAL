import React, { Component } from "react";

import { Link, withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import HomePage from "./index";
import { setSelectedCourseThunk, setStepHomeThunk } from "../../redux/Home";
import { selectFormUserForHomeThunk } from "../../redux/ProfileUser";

let HomePageContainer = ({
  stepHome,
  userData,
  setStepHomeThunk,
  setSelectedCourseThunk,
  selectedCoursesData,
  selectedCourseData,
  authUser,
  selectFormUserForHomeThunk,
}) => {
  return (
    <HomePage
      step={stepHome}
      userData={userData}
      setStep={setStepHomeThunk}
      /*  */
      selectedCoursesData={selectedCoursesData}
      selectCourse={setSelectedCourseThunk}
      selectCourseData={selectedCourseData}
      /*  */
      selectFormUserForHome={selectFormUserForHomeThunk}
      authUser={authUser}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    userData: state.ProfileUser.userData,
    stepHome: state.Home.stepHome,

    selectedCourseData: state.Home.selectCourseData,

    selectedCoursesData: state.Home.dataCourses,
    authUser: state.ProfileUser.authUser,
  };
};

export default compose(
  connect(mapStateToProps, {
    setStepHomeThunk,
    setSelectedCourseThunk,
    selectFormUserForHomeThunk,
  }),
  withRouter
)(HomePageContainer);
