import React, { useState } from "react";
import { AutoComplete } from "antd";
import s from "./index.module.css";

const mockVal = (str, repeat = 1) => {
  return {
    value: str.repeat(repeat),
  };
};

const Complete = () => {
  const [options, setOptions] = useState([
    { value: "check" },
    { value: "dseck" },
  ]);

  const onSelect = (data) => {
    console.log("onSelect", data);
  };

  return (
    <AutoComplete
      className={s.search}
      options={options}
      onSelect={onSelect}
      placeholder="🔍⠀Найти направленность или преподавателя"
      filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
    />
  );
};

export default Complete;
