import { Header } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderBack from "../../utils/HeaderBack";
import ListRender from "../../utils/ListRender";

import { Form, Input, InputNumber, Button, message } from "antd";

import s from "./index.module.css";

const PersonalForm = (props) => {
  const [form] = Form.useForm();
  debugger;

  const [formST, setFormST] = useState(false);

  const onFinish = (values) => {
    switch (props.selectedOrNew) {
      case "newParent":
        props.createParentUserData(values);
        props.setStep("personal-data");
        break;
      case "selectParent":
        props.updateParentUserData({
          ...values,
          key: props.selectedUserData.key,
        });
        props.setStep("personal-data");
        break;
      case "newChild":
        props.createChildUserData(values);
        props.setStep("personal-data");
        break;
      case "selectChild":
        props.updateChildUserData({
          ...values,
          key: props.selectedUserData.key,
        });
        props.setStep("personal-data");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    let data = props.selectedUserData;
    debugger;
    switch (props.selectedOrNew) {
      case "newParent":
      case "newChild":
        form.setFieldsValue({
          key: "",
          label: "",
          birthday: "",
          snils: "",
          typeDocument: "",
          id1part: "",
          id2part: "",
          phoneNumber: "",
          email: "",
        });
        break;
      case "selectChild":
      case "selectParent":
        form.setFieldsValue({
          key: data.key,
          label: data.label,
          birthday: data.birthday,
          snils: data.snils,
          typeDocument: data.typeDocument,
          id1part: data.id1part,
          id2part: data.id2part,
          phoneNumber: data.phoneNumber,
          email: data.email,
        });
        break;
      default:
        break;
    }
    switch (props.selectedOrNew) {
      case "newChild":
      case "selectChild":
        setFormST(true);
        break;
      case "newParent":
      case "selectParent":
        setFormST(false);
        break;
      default:
        break;
    }
  }, [props]);

  let form2 = !props.selectedUserData.snils && s.form2;

  const onFinishFailed = () => {
    message.error("не все данные введены");
  };

  return (
    <>
      <HeaderBack
        setStep={props.setStep}
        name="Личные данные"
        step="personal-data"
      />
      <Form
        form={form}
        className={s.form + " " + form2}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        /*  initialValues={props.selectedUserData} */
      >
        <Form.Item
          className={s.fio}
          name="label"
          label={<div className={s.label}>ФИО ребёнка</div>}
        >
          <Input className={s.InputFio} />
        </Form.Item>

        <div className={s.formSub}>
          {formST && (
            <>
              <Form.Item
                name="birthday"
                label={<div className={s.label}>Дата рождения</div>}
                className={s.InputCont}
              >
                <Input className={s.Input} />
              </Form.Item>
              <Form.Item
                name="snils"
                label={<div className={s.label}>Номер СНИЛС</div>}
                className={s.InputCont}
              >
                <InputNumber className={s.Input} />
              </Form.Item>
              <Form.Item
                name="typeDocument"
                label={<div className={s.label}>Документ</div>}
                className={s.InputCont}
              >
                <Input className={s.Input} />
              </Form.Item>
            </>
          )}
          <div className={s.InputCont}>
            <div className={s.passCont}>
              <Form.Item
                name="id1part"
                label={<div className={s.label}>Серия</div>}
              >
                <Input className={s.InputPass} />
              </Form.Item>
              <Form.Item
                name="id2part"
                label={<div className={s.label}>Номер</div>}
              >
                <Input className={s.InputPass} />
              </Form.Item>
            </div>
          </div>
          <Form.Item
            name="phoneNumber"
            label={<div className={s.label}>Телефон</div>}
            className={s.InputCont}
          >
            <Input className={s.Input} />
          </Form.Item>
          <Form.Item
            name="email"
            className={s.InputCont}
            label={<div className={s.label}>Email</div>}
          >
            <Input className={s.Input} />
          </Form.Item>
        </div>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Сохранить
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default PersonalForm;
