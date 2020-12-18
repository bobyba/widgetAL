import React, { Component } from "react";
import s from "./index.module.css";
import { List } from "antd/lib/form/Form";
import { NavLink } from "react-router-dom";
import { Button } from "antd";
import HeaderBack from "../../utils/HeaderBack";

const list1 = [
  {
    name: "Генерал росгвардии России",
    descrip: "Главный по капусте",
    avatar: "",
  },
  {
    name: "Петр Сергеевич Сванидзе",
    descrip: "Главный по хинкалям",
    avatar: "",
  },
  {
    name: "Иванов Иван Иванович",
    avatar: "",
    descrip: "Главный по бананам",
  },
];
const list2 = [
  {
    name: "Тяжелая химия",
    descrip: "Главный по курсорам",
    price: "1 000",
  },
  {
    name: "Ножевой бой",
    descrip: "Главный по мясу",
    price: "4 000",
  },
  {
    name: "Бег от копов",
    descrip: "Главный по стаканчикам",
    price: "3 000",
  },
];

const SelectedCourse = (props) => {
  return (
    <>
      <HeaderBack name={"check"} />
      <div className={s.contBox}>
        <div className={s.descrip}>
          Процедура очистки дымохода от скопившихся загрязнений на его
          внутренних поверхностях обязательно осуществляется с определенной
          периодичностью, независимо от того, изменяется ли тяга или нет. Это
          позволяет избежать существенных проблем в том случае, если конструкция
          от скопившегося налета просто перестанет справляться со своим
          назначением.
        </div>
        <div className={s.sub}>
          <div style={{ fontWeight: "700" }}>Цена:</div>
          <div>1488 руб</div>
        </div>
        <div className={s.sub}>
          <div style={{ fontWeight: "700" }}>Направленность:</div>
          <div>Техническая</div>
        </div>
        <div className={s.sub}>
          <div style={{ fontWeight: "700" }}>Возрастная группа:</div>
          <div>7-18 лет</div>
        </div>
        <div className={s.sub}>
          <div style={{ fontWeight: "700" }}>Кол-во часов:</div>
          <div>420</div>
        </div>
        <div className={s.sub}>
          <div style={{ fontWeight: "700" }}>Продолжительность часа</div>
          <div>69 минут</div>
        </div>
        <div className={s.sub}>
          <div style={{ fontWeight: "700" }}>Дата начала занятий:</div>
          <div>31.02.2021</div>
        </div>
        <div className={s.sub}>
          <div style={{ fontWeight: "700" }}>Местоположение:</div>
          <div>Жулебинский бульвар</div>
        </div>
      </div>
      <div>
        <Button
          onClick={() => {
            props.payStep();
          }}
        >
          Оформить услугу
        </Button>
      </div>
    </>
  );
};

export default SelectedCourse;
