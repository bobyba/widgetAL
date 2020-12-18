import React from "react";
import s from "./index.module.css";
import { Link, NavLink } from "react-router-dom";
import { Layout } from "antd";

const { Header } = Layout;

function HeaderContainer(props) {
  return (
    <Header className={s.Header}>
      <div className={s.icon}>
        <NavLink
          to="/home"
          className={s.icon}
          onClick={() => {
            props.setStepHome("main");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon"
            width="28px"
            height="28px"
            viewBox="0 0 512 512"
          >
            <title>Home</title>
            <path d="M261.56 101.28a8 8 0 00-11.06 0L66.4 277.15a8 8 0 00-2.47 5.79L63.9 448a32 32 0 0032 32H192a16 16 0 0016-16V328a8 8 0 018-8h80a8 8 0 018 8v136a16 16 0 0016 16h96.06a32 32 0 0032-32V282.94a8 8 0 00-2.47-5.79z" />
            <path d="M490.91 244.15l-74.8-71.56V64a16 16 0 00-16-16h-48a16 16 0 00-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0043 267.56L250.5 69.28a8 8 0 0111.06 0l207.52 198.28a16 16 0 0022.59-.44c6.14-6.36 5.63-16.86-.76-22.97z" />
          </svg>
        </NavLink>
      </div>
      <NavLink to="/search" className={s.middle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ionicon"
          width="28px"
          height="28px"
          viewBox="0 0 512 512"
        >
          <title>Search</title>
          <path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z" />
        </svg>
      </NavLink>
      <NavLink
        to="/profile"
        className={s.icon}
        onClick={() => {
          props.setStepProfile("main");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ionicon"
          width="28px"
          height="28px"
          viewBox="0 0 512 512"
        >
          <title>Person</title>
          <path d="M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6zM432 480H80a31 31 0 01-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75 1.94 10.73-.68 21.34-7.18 29.11A31 31 0 01432 480z" />
        </svg>
      </NavLink>
    </Header>
  );
}

export default HeaderContainer;
