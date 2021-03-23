import { useState } from "react";
import s from "./index.module.css";
import { Button } from "antd";
import { useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";
import Main from "./Main";
import TimeTable from "./TimeTable/index";
import PersonalData from "./PersonalData";
import OffersTable from "./Offers";
import TimeTableSub from "./TimeTableSub";
import PersonalForm from "./PersonalForm";
import OffersSubTable from "./OffersSub";
import OfferInfo from "./OfferInfo";

import AuthPageContainer from "../AuthPage/indexContainer";

let ProfilePage = ({
  authUser,
  exitAuthUser,
  stepProfile,
  setAuthThunk,
  setStep,
  selectChildOffers,
  userData,
  selectedChildOffersData,
  selectChildOfferForOfferInfo,
  selectedUserDataForOfferInfo,
  selectUserTimeTable,
  selectedUserDataForTimetable,
  selectForm,
  createParentUserData,
  selectedUserDataForForm,
  updateParentUserData,
  createChildUserData,
  updateChildUserData,
}) => {
  const [selectedOrNew, setSelectedOrNew] = useState();
  let render = () => {
    if (!authUser) {
      debugger;
      return <AuthPageContainer />;
    } else {
      switch (stepProfile) {
        case "main":
          return (
            <Main
              exitAuthUser={exitAuthUser}
              setAuthThunk={setAuthThunk}
              setStep={setStep}
            />
          );
        case "offers":
          return (
            <OffersTable
              selectItem={selectChildOffers}
              userChildData={userData.child}
              setStep={setStep}
            />
          );
        case "offersSub":
          return (
            <OffersSubTable
              selectedChildOffersData={selectedChildOffersData}
              selectItem={selectChildOfferForOfferInfo}
              setStep={setStep}
            />
          );
        case "offerInfo":
          return (
            <OfferInfo
              offerData={selectedUserDataForOfferInfo} // это
              setStep={setStep}
            />
          );
        case "timetable":
          return (
            <TimeTable
              userChildData={userData.child}
              selectItem={selectUserTimeTable}
              setStep={setStep}
            />
          );
        case "timeTableSub":
          return (
            <TimeTableSub
              selectedTimeTableData={selectedUserDataForTimetable} // это
              setStep={setStep}
            />
          );
        case "personal-data":
          return (
            <PersonalData
              setSelectedOrNew={setSelectedOrNew}
              userData={userData}
              selectForm={selectForm}
              setStep={setStep}
            />
          );
        case "personalForm":
          return (
            <PersonalForm
              createParentUserData={createParentUserData}
              updateParentUserData={updateParentUserData}
              createChildUserData={createChildUserData}
              updateChildUserData={updateChildUserData}
              selectedOrNew={selectedOrNew}
              selectedUserData={selectedUserDataForForm}
              setStep={setStep}
            />
          );
        default:
          break;
      }
    }
  };

  return <div style={{ height: "100vh" }}>{render()}</div>;
};
export default ProfilePage;
