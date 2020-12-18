import React from "react";
import classes from "./loader.module.css";

function Loader() {
  return (
    <div className={classes.center}>
      <div className={classes.lds_ring}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader