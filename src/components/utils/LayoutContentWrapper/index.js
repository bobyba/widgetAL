import React from "react";
import s from "./index.module.css";

export default (props) => (
  <div
    className={
      props.className != null
        ? props.className + " " + s.layoutContent
        : s.layoutContent
    }
    {...props}
  >
    {props.children}
  </div>
);
