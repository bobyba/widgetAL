import React, { useState } from "react";
import Complete from "./SearchInput/index";
import s from "./index.module.css";
import { Button, Select } from "antd";
import { NavLink } from "react-router-dom";
import HeaderBack from "../../utils/HeaderBack";
import ListRender from "../../utils/ListRender";

const { Option } = Select;

const CoursesSelect = (props) => {
  debugger;
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

  let [selectedAge, setSelectedAge] = useState(0);

  let selectChangeAge = (age) => {
    setSelectedAge(age);

    setCoursesData(
      props.selectedCoursesData.filter((item) => {
        if (Number(item.age1) >= Number(age)) {
          return true;
        }
      })
    );
  };

  let [coursesData, setCoursesData] = useState(props.selectedCoursesData);

  let resetAndAllShow = () => {
    setCoursesData(props.selectedCoursesData);
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
          <Select
            placeholder="Возраст"
            className={s.select}
            onChange={selectChangeAge}
          >
            <Option value="6">6</Option>
            <Option value="7">7</Option>
            <Option value="8">8</Option>
            <Option value="9">10</Option>
            <Option value="11">11</Option>
            <Option value="12">12</Option>
            <Option value="13">14</Option>
            <Option value="14">14</Option>
            <Option value="15">15</Option>
            <Option value="16">16</Option>
            <Option value="17">17</Option>
            <Option value="18">18</Option>
          </Select>
          <Complete
            data={props.selectedCoursesData}
            selectedAge={selectedAge}
            setCoursesData={setCoursesData}
          />
        </div>
        <div className={s.contList}>
          <ListRender
            selectItem={props.selectCourse}
            data={coursesData}
            price={true}
          />
          {coursesData.length === 0 && (
            <Button className={s.link} onClick={resetAndAllShow} type="link">
              Показать все
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default CoursesSelect;
