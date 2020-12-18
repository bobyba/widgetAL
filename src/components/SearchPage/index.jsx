import React, { Component } from "react";
import s from "./index.module.css";
import Complete from "./SearchInput/index";
import { List } from "antd/lib/form/Form";
import { NavLink } from "react-router-dom";
import { Button } from "antd";
import ListTeacher from "../utils/ListRender";

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

const SearchPage = () => {
  return (
    <div className={s.contBox}>
      <Complete />
      <div className={s.contList}>
        <div className={s.text}>Лучшие преподаватели:</div>
        <ListTeacher data={list1} avatar={true} />
        <NavLink to="/">
          <Button type="link" className={s.link}>
            Больше
          </Button>
        </NavLink>
      </div>
      <div className={s.contList}>
        <div className={s.text}>Популярные дисциплины:</div>
        <ListTeacher data={list2} price={true} />
        <NavLink to="/">
          <Button type="link" className={s.link}>
            Больше
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default SearchPage;
