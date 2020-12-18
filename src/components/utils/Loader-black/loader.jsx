import React from "react";
import classes from "./loader.module.css";

function LoaderBlack() {
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

export default LoaderBlack