import { Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import { NavLink } from "react-router-dom";
import HeaderBack from "../../utils/HeaderBack";
import ListRender from "../../utils/ListRender";

import s from "./index.module.css";

const PersonalData = (props) => {
  return (
    <>
      <HeaderBack setStep={props.setStep} name="Личные данные" step="main" />
      <div className={s.container}>
        <span className={s.Header}>Родители: </span>
        <div className={s.contButtons}>
          <ListRender
            selectItem={props.selectForm}
            data={props.userData.parents}
            setSelectedOrNew={props.setSelectedOrNew}
          />
        </div>
        <div className={s.btn}>
          <Button
            type="primary"
            onClick={() => {
              props.setStep("personalForm");
              props.setSelectedOrNew("newParent");
            }}
          >
            Добавить
          </Button>
        </div>

        <span className={s.Header}>Школьники: </span>
        <div className={s.contButtons}>
          <ListRender
            selectItem={props.selectForm}
            data={props.userData.child}
            setSelectedOrNew={props.setSelectedOrNew}
          />
        </div>
        <div className={s.btn}>
          <Button
            type="primary"
            onClick={() => {
              props.setStep("personalForm");
              props.setSelectedOrNew("newChild");
            }}
          >
            Добавить
          </Button>
        </div>
      </div>
    </>
  );
};

export default PersonalData;
