import React from "react";
import s from "./index.module.css";
import { Link, NavLink } from "react-router-dom";
import Main from "./Main/index";
import CoursesSelect from "./Courses/index";
import SelectedCourse from "./CourseRegestr";

const HomePage = (props) => {
  debugger;
  let render = () => {
    switch (props.step) {
      case "main":
        return <Main setStep={props.setStep} />;
      case "tech":
      case "art":
      case "social":
      case "tourist":
      case "science":
      case "sport":
        return (
          <CoursesSelect
            selectCourse={props.selectCourse}
            setStep={props.setStep}
            step={props.step}
          />
        );
      case "selectedCourse":
        return (
          <SelectedCourse
            dataCourse={props.selectCourseData}
            setStep={props.setStep}
          />
        );
      default:
        return <Main setStep={props.setStep} />;
    }
  };

  return <div style={{ height: "100vh", width: "100%" }}>{render()}</div>;
};

export default HomePage;
