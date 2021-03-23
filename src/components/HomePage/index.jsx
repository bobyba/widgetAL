import React, { useState } from "react";
import s from "./index.module.css";
import { Link, NavLink } from "react-router-dom";
import Main from "./Main/index";
import CoursesSelect from "./Courses/index";
import SelectedCourse from "./SelectedCourse";
import ProcessOffer from "./ProcessOffer";

import ProcessOfferSub from "./ProcessOfferSub";

import AuthPageContainer from "../AuthPage/indexContainer";

const HomePage = ({
  step,
  setStep,
  selectedCoursesData,
  selectCourse,
  authUser,
  selectCourseData,
  userData,
  selectedUserDataForForm,
  selectFormUserForHome,
}) => {
  const [selectedOrNew, setSelectedOrNew] = useState();

  let render = () => {
    switch (step) {
      case "main":
        return <Main setStep={setStep} />;
      case "tech":
      case "art":
      case "social":
      case "tourist":
      case "science":
      case "sport":
        return (
          <CoursesSelect
            selectedCoursesData={selectedCoursesData}
            selectCourse={selectCourse}
            setStep={setStep}
            step={step}
          />
        );
      case "selectedCourse":
        return (
          <SelectedCourse
            authUser={authUser}
            dataCourse={selectCourseData}
            setStep={setStep}
            step={step}
          />
        );
      case "processOffer":
        if (!authUser) {
          return <AuthPageContainer />;
        }
        return (
          <ProcessOffer
            setSelectedOrNew={setSelectedOrNew}
            selectForm={selectFormUserForHome}
            userData={userData}
            setStep={setStep}
          />
        );
      case "processOfferSub":
        return (
          <ProcessOfferSub
            selectedOrNew={selectedOrNew}
            selectedUserData={selectedUserDataForForm}
            setStep={setStep}
          />
        );
      default:
        return <Main setStep={setStep} />;
    }
  };

  return <div style={{ height: "100vh", width: "100%" }}>{render()}</div>;
};

export default HomePage;
