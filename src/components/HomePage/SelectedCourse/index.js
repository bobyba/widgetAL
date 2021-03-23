import React, { Component } from "react";
import s from "./index.module.css";
import { List } from "antd/lib/form/Form";
import { Link, NavLink } from "react-router-dom";
import { Button } from "antd";
import HeaderBack from "../../utils/HeaderBack";

const SelectedCourse = (props) => {
  debugger;

  let data = props.dataCourse;

  if (!props.authUser) {
  }

  return (
    <>
      <HeaderBack
        name={data.label}
        setStep={props.setStep}
        step={data.categoriesValue}
      />
      <div className={s.headerDescrip}>О направлении:</div>
      <div className={s.descrip}>{data.description}</div>
      <div className={s.contBox}>
        <div>
          <Button
            type="primary"
            onClick={() => {
              props.setStep("processOffer");
            }}
          >
            <span>Оформить услугу</span>
          </Button>
        </div>
        <div className={s.sub}>
          <div style={{ fontWeight: "700" }}>Цена:</div>
          <div>{data.price}</div>
        </div>
        <div className={s.sub}>
          <div style={{ fontWeight: "700" }}>Направленность:</div>
          <div>{data.categories}</div>
        </div>
        <div className={s.sub}>
          <div style={{ fontWeight: "700" }}>Возрастная группа:</div>
          <div>
            {data.age1}-{data.age2}
          </div>
        </div>
        <div className={s.sub}>
          <div style={{ fontWeight: "700" }}>Кол-во часов:</div>
          <div>{data.quantityHours}</div>
        </div>
        <div className={s.sub}>
          <div style={{ fontWeight: "700" }}>Кол-во мест:</div>
          <div>{data.quantityPlace}</div>
        </div>
        <div className={s.sub}>
          <div style={{ fontWeight: "700" }}>
            Продолжительность академ. часа
          </div>
          <div>45 минут</div>
        </div>
        <div className={s.sub}>
          <div style={{ fontWeight: "700" }}>Дата начала занятий:</div>
          <div>{data.dateStart}</div>
        </div>
        <div className={s.sub}>
          <div style={{ fontWeight: "700" }}>Местоположение:</div>
          <div>{data.hullsData[0].label}</div>
        </div>
        <div className={s.sub}>
          <div style={{ fontWeight: "700" }}>Преподаватели:</div>
          <div>{data.teachersData[0].label}</div>
        </div>
        <div className={s.sub}>
          <div style={{ fontWeight: "700" }}>Уровень программы:</div>
          <div>{data.levelProgram}</div>
        </div>
        <div>
          <Button
            className={s.link}
            onClick={() => {
              window.open(data.documentLink, "_blank");
            }}
            type="link"
          >
            Ссылка на документацию
          </Button>
        </div>
      </div>
    </>
  );
};

export default SelectedCourse;
