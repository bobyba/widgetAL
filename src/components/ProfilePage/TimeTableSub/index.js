import { Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import { NavLink } from "react-router-dom";
import HeaderBack from "../../utils/HeaderBack";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import s from "./index.module.css";

const localizer = momentLocalizer(moment)

const TimeTableSub = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <HeaderBack setStep={props.setStep} name="Расписание" step="main" />
      <span className={s.Header}> Выберите ребенка: </span>
      <div className={s.contButtons}>
     {/*    <Calendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        /> */}
      </div>
    </div>
  );
};

export default TimeTableSub;
