import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { goToTop } from "react-scrollable-anchor";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
// scroll to top of the page
import "slick-carousel/slick/slick.css";
import s from "./index.module.css";

const MiniFlickComponent = (props) => {
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

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
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
    <div className={s.MiniSliderCont}>
      <div style={{ width: "99.5vw", textAlign: "center" }}>
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
                    /*  <div
                      className={s.divItem}
                      key={poster.filmId}
                      
                    > */
                    <NavLink
                      to={"/player/" + poster.id}
                      onClick={goTop}
                      key={poster.id}
                      className={s.posterCont}
                    >
                      <img
                        className={s.img_cell}
                        src={poster.posterUrl}
                        alt="image_mini"
                      />
                      <div className={s.posterTitle}>{poster.t}</div>
                    </NavLink>
                    /*  </div> */
                  );
                })}
        </Slider>
      </div>
    </div>
  );
};

export default MiniFlickComponent;
