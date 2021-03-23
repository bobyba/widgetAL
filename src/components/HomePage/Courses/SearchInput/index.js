import React, { useState } from "react";
import { AutoComplete, Input, Form } from "antd";
import s from "./index.module.css";

import { SearchOutlined } from "@ant-design/icons";

const mockVal = (str, repeat = 1) => {
  return {
    value: str.repeat(repeat),
  };
};

const { Search } = Input;

const Complete = (props) => {
  debugger;

  const [form] = Form.useForm();

  /*  data = { coursesData }; */

  /* setCoursesData = { setCoursesData }; */

  let selectedAge = props.selectedAge || 0;

  const setSearchCourses = (data) => {
    props.setCoursesData(
      props.data.filter((item) => {
        if (
          item.label.toUpperCase().indexOf(data.target.value.toUpperCase()) !==
            -1 &&
          Number(item.age1) >= Number(selectedAge)
        ) {
          debugger;
          return true;
        }
      })
    );
    /*   return option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1; */
  };

  return (
    <Form form={form} className={s.search} onFieldsChange={setSearchCourses}>
      <Form.Item>
        <Input
          nostyle="true"
          name="search"
          suffix={
            <SearchOutlined style={{ color: "#1890ff", fontSize: "13px" }} />
          }
          onChange={setSearchCourses}
          placeholder="Найти направленность"
        />
      </Form.Item>
    </Form>
  );
};

export default Complete;
