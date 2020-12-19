import React, { Component, useState } from "react";
import s from "./index.module.css";
import { Button } from "antd";
import { useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";
import Main from "./Main";
import TimeTable from "./TimeTable/index";
import PersonalData from "./PersonalData";
import OffersTable from "./Offers";
import TimeTableSub from "./TimeTableSub";

const ProfilePage = (props) => {
  let render = () => {
    switch (props.stepProfile) {
      case "main":
        return <Main setStep={props.setStep} />;
      case "offers":
        return (
          <OffersTable
            userChildData={props.userData.child}
            setStep={props.setStep}
          />
        );
      case "offersSub":
        return (
          <OffersTable
            offersData={props.userData.child} // это
            setStep={props.setStep}
          />
        );
      case "offerSelectedData":
        return (
          <OffersTable
            offerData={props.userData.child} // это
            setStep={props.setStep}
          />
        );
      case "timetable":
        return (
          <TimeTable
            userChildData={props.userData.child}
            selectItem={props.selectUserTimeTable}
            setStep={props.setStep}
          />
        );
      case "timeTableSub":
        return (
          <TimeTableSub
            selectedTimeTableData={props.timeTableData} // это
            setStep={props.setStep}
          />
        );
      case "personal-data":
        return (
          <PersonalData userData={props.userData} setStep={props.setStep} />
        );
      case "personalForm":
        return (
          <TimeTable
            selectedUserData={props.selectUserTimeTable} // это
            setStep={props.setStep}
          />
        );
      default:
        break;
    }
  };
  return <div style={{ height: "100vh" }}>{render()}</div>;
};
export default ProfilePage;
