import React, { Component } from "react";
import { List } from "antd/lib/form/Form";
import { NavLink } from "react-router-dom";
import HeaderBack from "../../utils/HeaderBack";

import { Form, Input, InputNumber, Button } from "antd";

import s from "./index.module.css";

import { Header } from "antd/lib/layout/layout";
import ListRender from "../../utils/ListRender";

const ProcessOffer = (props) => {
  const onFinish = (values) => {
    console.log(values);
  };
  debugger;

  return (
    <>
      <HeaderBack
        setStep={props.setStep}
        name="Оформить услугу"
        step="selectedCourse"
      />
      <div className={s.container}>
        <span className={s.Header}>Выберете школьника: </span>
        <div className={s.contButtons}>
          <ListRender
            selectItem={props.selectForm}
            data={props.userData.child}
            setSelectedOrNew={props.setSelectedOrNew}
            checkbox="true"
          />
        </div>
        <div className={s.btn}>
          <Button
            type="primary"
            onClick={() => {
              props.setStep("processOfferSub");
              props.setSelectedOrNew("newChild");
            }}
          >
            Добавить
          </Button>
        </div>

        <span className={s.Header}>Выберете родителя: </span>
        <div className={s.contButtons}>
          <ListRender
            selectItem={props.selectForm}
            data={props.userData.parents}
            checkbox="true"
            setSelectedOrNew={props.setSelectedOrNew}
          />
        </div>
        <div className={s.btn}>
          <Button
            type="primary"
            onClick={() => {
              props.setStep("processOfferSub");
              props.setSelectedOrNew("newParent");
            }}
          >
            Добавить
          </Button>
        </div>
      </div>
      <div className={s.btnPayCont}>
        <Button className={s.link} type="link">
          Скачать договор
        </Button>
        <Button type="primary">Оплатить</Button>
      </div>
    </>
  );
};

export default ProcessOffer;
