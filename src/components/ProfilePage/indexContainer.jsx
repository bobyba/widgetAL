import React, { Component } from "react";

import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import ProfilePage from "./index";
import {
  selectChildOfferForOfferInfoThunk,
  selectChildOffersThunk,
  selectFormUserThunk,
  setStepProfileThunk,
  setUserDataForTimeTableThunk,
  updateParentUserDataThunk,
  createParentUserDataThunk,
  createChildUserDataThunk,
  updateChildUserDataThunk,
  exitAuthUserThunk,
} from "../../redux/ProfileUser";
import { setAuthThunk } from "../../redux/initialApp";

let ProfilePageContainer = ({
  updateParentUserDataThunk,
  authUser,
  exitAuthUserThunk,
  stepProfile,
  setStepProfileThunk,
  setUserDataForTimeTableThunk,
  selectedUserDataForTimetable,
  userData,
  selectFormUserThunk,
  selectedUserDataForForm,
  selectChildOffersThunk,
  selectedChildOffersData,
  selectedUserDataForOfferInfo,
  selectChildOfferForOfferInfoThunk,
  createParentUserDataThunk,
  createChildUserDataThunk,
  updateChildUserDataThunk,
}) => {
  return (
    <ProfilePage
      authUser={authUser}
      exitAuthUser={exitAuthUserThunk}
      /* ---------- */
      setAuthThunk={setAuthThunk}
      /* ---------- */
      stepProfile={stepProfile}
      setStep={setStepProfileThunk}
      selectUserTimeTable={setUserDataForTimeTableThunk}
      selectedUserDataForTimetable={selectedUserDataForTimetable}
      userData={userData}
      selectForm={selectFormUserThunk}
      selectedUserDataForForm={selectedUserDataForForm}
      selectChildOffers={selectChildOffersThunk}
      selectedChildOffersData={selectedChildOffersData}
      selectedUserDataForOfferInfo={selectedUserDataForOfferInfo}
      selectChildOfferForOfferInfo={selectChildOfferForOfferInfoThunk}
      /*  */
      createParentUserData={createParentUserDataThunk}
      updateParentUserData={updateParentUserDataThunk}
      /*  */
      createChildUserData={createChildUserDataThunk}
      updateChildUserData={updateChildUserDataThunk}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    authUser: state.ProfileUser.authUser,

    stepProfile: state.ProfileUser.stepProfile,
    userData: state.ProfileUser.userData,
    selectedUserDataForTimetable:
      state.ProfileUser.selectedUserDataForTimetable,
    selectedUserDataForForm: state.ProfileUser.selectedUserDataForForm,
    selectedChildOffersData: state.ProfileUser.selectedChildOffersData,
    selectedUserDataForOfferInfo:
      state.ProfileUser.selectedUserDataForOfferInfo,
  };
};

export default compose(
  connect(mapStateToProps, {
    setAuthThunk,
    setStepProfileThunk,
    setUserDataForTimeTableThunk,
    selectFormUserThunk,
    selectChildOffersThunk,
    selectChildOfferForOfferInfoThunk,
    updateParentUserDataThunk,
    createParentUserDataThunk,
    createChildUserDataThunk,
    updateChildUserDataThunk,
    exitAuthUserThunk,
  }),
  withRouter
)(ProfilePageContainer);
