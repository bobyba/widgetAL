import React from "react";
import { NavLink } from "react-router-dom";

import s from "./index.module.css";

import { RightOutlined, LeftOutlined } from "@ant-design/icons";

import { goToTop } from "react-scrollable-anchor";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BigFlickComponent = (props) => {
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={s.btnLeft} onClick={onClick}>
        <LeftOutlined className={s.btnLeftIcon} />
      </div>
    );
  };

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={s.btnRight} onClick={onClick}>
        <RightOutlined className={s.btnRightIcon} />
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    centerMode: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    cssEase: "linear",
    variableWidth: true,
  };
  const goTop = () => {
    goToTop();
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "45px",
      }}
    >
      <div style={{ width: "99.5vw", textAlign: "center" }}>
        <Slider {...settings}>
          {!props.statusPoster
            ? [
                <NavLink to={""} onClick={goTop}>
                  <div className={s.imgSlider_loader}></div>
                </NavLink>,
                <NavLink to={""} onClick={goTop}>
                  <div className={s.imgSlider_loader}></div>
                </NavLink>,
                <NavLink to={""} onClick={goTop}>
                  <div className={s.imgSlider_loader}></div>
                </NavLink>,
              ]
            : props.bigPosters.map((poster) => {
                return (
                  <NavLink
                    to={"/player/" + poster.filmId}
                    key={poster.filmId}
                    onClick={goTop}
                  >
                    <img
                      src={poster.posterUrl}
                      className={s.imgSlider}
                      alt="image_big"
                    />
                  </NavLink>
                );
              })}
        </Slider>
      </div>
    </div>
  );
};

export default BigFlickComponent;
