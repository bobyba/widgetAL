import React from "react";
import { NavLink } from "react-router-dom";

import s from "./index.module.css";

import Slider from "react-slick";

import { RightOutlined, LeftOutlined } from "@ant-design/icons";

import { goToTop } from "react-scrollable-anchor";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MiniFlickComponent2 = (props) => {
  let posters = props.posters;
  if (props.posters.movies) {
    posters = props.posters.movies.concat(
      props.posters.serials,
      props.posters.kidsmovies
    );
  }

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={s.btnLeftContainer}>
        <div className={s.btnLeft} onClick={onClick}>
          <LeftOutlined className={s.btnLeftIcon} />
        </div>
      </div>
    );
  };

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={s.btnRightContainer}>
        <div className={s.btnRight} onClick={onClick}>
          <RightOutlined className={s.btnRightIcon} />
        </div>
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    centerMode: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    cssEase: "linear",
  };

  const goTop = () => {
    goToTop();
  };
  //здесь порешать
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
      className={s.sliderContainer}
    >
      <div style={{ width: "1000px", textAlign: "center" }}>
        <Slider {...settings} className={s.slider}>
          {!props.statusPoster
            ? [
                <div className={s.divItem}>
                  <NavLink to={"/player/"}>
                    <div className={s.img_cell_loader}> </div>
                  </NavLink>
                </div>,
                <div className={s.divItem}>
                  <NavLink to={"/player/"}>
                    <div className={s.img_cell_loader}> </div>
                  </NavLink>
                </div>,
                <div className={s.divItem}>
                  <NavLink to={"/player/"}>
                    <div className={s.img_cell_loader}> </div>
                  </NavLink>
                </div>,
                <div className={s.divItem}>
                  <NavLink to={"/player/"}>
                    <div className={s.img_cell_loader}> </div>
                  </NavLink>
                </div>,
                <div className={s.divItem}>
                  <NavLink to={"/player/"}>
                    <div className={s.img_cell_loader}> </div>
                  </NavLink>
                </div>,
                <div className={s.divItem}>
                  <NavLink to={"/player/"}>
                    <div className={s.img_cell_loader}> </div>
                  </NavLink>
                </div>,
                <div className={s.divItem}>
                  <NavLink to={"/player/"}>
                    <div className={s.img_cell_loader}> </div>
                  </NavLink>
                </div>,
              ]
            : posters
                .sort(function (a, b) {
                  return Math.random() - 0.5;
                })
                .map((poster) => {
                  return (
                    <div
                      className={s.divItem}
                      key={poster.filmId}
                      onClick={goTop}
                    >
                      <NavLink to={"/player/" + poster.id} key={poster.id}>
                        <img
                          className={s.img_cell}
                          src={poster.posterUrl}
                          alt="image_mini"
                        />
                      </NavLink>
                    </div>
                  );
                })}
        </Slider>
      </div>
    </div>
  );
};
export default MiniFlickComponent2;
