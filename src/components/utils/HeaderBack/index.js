import React from "react";
import s from "./index.module.css";

const HeaderBack = (props) => {
  debugger;
  return (
    <div
      className={s.contSuperHeader}
      onClick={() => {
        props.setStep(props.step);
      }}
    >
      <svg
        width="14"
        height="20"
        viewBox="0 0 8 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 13L1 7L7 1"
          stroke="#9098B1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className={s.superHeader}>{props.name}</div>
    </div>
  );
};

export default HeaderBack;
