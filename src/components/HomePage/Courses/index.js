import React from "react";
import Complete from "./SearchInput/index";
import s from "./index.module.css";
import { Button, Select } from "antd";
import { NavLink } from "react-router-dom";
import HeaderBack from "../../utils/HeaderBack";
import ListRender from "../../utils/ListRender";

const { Option } = Select;

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
  {
    name: "Бег от копов",
    descrip: "Главный по стаканчикам",
    price: "3 000",
  },
  {
    name: "Бег от копов",
    descrip: "Главный по стаканчикам",
    price: "3 000",
  },
  {
    name: "Бег от копов",
    descrip: "Главный по стаканчикам",
    price: "3 000",
  },
  {
    name: "Бег от копов",
    descrip: "Главный по стаканчикам",
    price: "3 000",
  },
];

const CoursesSelect = (props) => {
  let renderNameHeader = () => {
    switch (props.step) {
      case "tech":
        return "Техническая";
      case "art":
        return "Художественная";
      case "science":
        return "Научная";
      case "social":
        return "Социальная";
      case "tourist":
        return "Краеведческая";
      case "sport":
        return "Спортивная";
      default:
        break;
    }
  };
  return (
    <>
      <HeaderBack
        setStep={props.setStep}
        step={"main"}
        name={renderNameHeader()}
      />
      <div className={s.contBox}>
        <div className={s.contSelectComplete}>
          <Select placeholder="Возраст" className={s.select}>
            <Option value="14">14</Option>
            <Option value="15">15</Option>
            <Option value="16">16</Option>
            <Option value="17">17</Option>
            <Option value="18">18</Option>
          </Select>
          <Complete />
        </div>
        <div className={s.contList}>
          <ListRender
            selectItem={props.selectCourse}
            data={list2}
            price={true}
          />
          <NavLink to="/" className={s.link}>
            <Button type="link">Показать все</Button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default CoursesSelect;
