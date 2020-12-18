import { Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import { NavLink } from "react-router-dom";
import HeaderBack from "../../utils/HeaderBack";
import ListTeacher from "../../utils/ListRender";

import s from "./index.module.css";

const data1 = [
  { name: "Шласк Илений Спейсиксович" },
  { name: "Хакисов Абдурахмед Ахмедукович" },
  { name: "Хакисов Абдурахмед Ахмедукович" },
];

const data2 = [
  { name: "Шласк Илений Спейсиксович" },
  { name: "Хакисов Абдурахмед Ахмедукович" },
];

const PersonalData = (props) => {
  return (
    <>
      <HeaderBack setStep={props.setStep} name="Личные данные" step="main" />
      <div className={s.container}>
        <span className={s.Header}>Родители: </span>
        <div className={s.contButtons}>
          <ListTeacher data={data1} />
        </div>
        <div className={s.btn}>
          <Button type="primary">Добавить</Button>
        </div>

        <span className={s.Header}>Школьники: </span>
        <div className={s.contButtons}>
          <ListTeacher data={data1} />
        </div>
        <div className={s.btn}>
          <Button type="primary">Добавить</Button>
        </div>
      </div>
    </>
  );
};

export default PersonalData;
