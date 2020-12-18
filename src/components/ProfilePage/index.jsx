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
  const [step, setStep] = useState(props.stepProfile);

  /*  const step = useEffect(() => {
    return () => {
      effect;
    };
  }, [props.stepProfile]); */

  let render = () => {
    switch (props.stepProfile) {
      case "main":
        return <Main setStep={props.setStep} />;
      case "offers":
        return <OffersTable setStep={props.setStep} />;
      case "timetable":
        return (
          <TimeTable
            selectItem={props.selectUserTimeTable}
            setStep={props.setStep}
          />
        );
      case "timetablesub":
        return <TimeTableSub />;
      case "personal-data":
        return <PersonalData setStep={props.setStep} />;
      default:
        break;
    }
  };
  return <div style={{ height: "100vh" }}>{render()}</div>;
};
export default ProfilePage;
