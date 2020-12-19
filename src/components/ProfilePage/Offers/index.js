import { Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import { NavLink } from "react-router-dom";
import HeaderBack from "../../utils/HeaderBack";
import ListRender from "../../utils/ListRender";

import s from "./index.module.css";

const OffersTable = (props) => {
  const data = [
    { name: "Шласк Илений Спейсиксович" },
    { name: "Хакисов Абдурахмед Ахмедукович" },
    { name: "Щекунтовоков Констурмарт Шопаклякович" },
    { name: "Кентавров Сарадин Кострамской" },
    { name: "Ездриев Членгисхан Шатокастелович" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <HeaderBack
        setStep={props.setStep}
        name="Оформленные услуги"
        step="main"
      />
      <span className={s.Header}> Выберите ребенка: </span>
      <div className={s.contButtons}>
        <ListRender data={data} />
      </div>
    </div>
  );
};

export default OffersTable;
