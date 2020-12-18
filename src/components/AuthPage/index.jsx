import React from "react";
import MiniFlickComponent from "../utils/mini-slider";
import BigFlickComponent from "../utils/Big-slider";
import s from "./index.module.css";
import { NavLink } from "react-router-dom";

function AuthPage(props) {
  let postersSuper;
  let postersKids;
  let postersMovies;
  let postersSeries;
  let superHeader = "";
  let secondHeader = "";
  let superClass = s.superClass;
  if (props.posters.movies) {
    postersSuper = props.posters.superMovies;
    superHeader = "Super movies";
    secondHeader = "Kids";
    superClass = s.superClass;
    postersKids = props.posters.kidsmovies;
    postersMovies = props.posters.movies;
    postersSeries = props.posters.serials;
  } else {
    if (props.url === "/movies") {
      superHeader = "Super Movies";
      secondHeader = "All movies";
    } else if (props.url === "/series") {
      superHeader = "Super Series";
      secondHeader = "All series";
    } else if (props.url === "/kids") {
      superHeader = "Super Kids Movies";
      secondHeader = "All movies kids";
    }
    postersSuper = props.superMovies;
    postersKids = props.posters;
  }
  const width = document.body.clientWidth; // ширина экрана задаёт кол-во элементов в слайдере

  return (
    <div className={s.firstPage}>
      <BigFlickComponent
        statusPoster={props.statusPoster}
        bigPosters={props.bigPosters}
      />
      <div className={s.contDisplay}>
        <div className={s.contSliders}>
          <div style={{ display: "flex" }}>
            <h1 className={`${s.header} ${superClass}`}>Super movies</h1>
          </div>
          <MiniFlickComponent
            statusPoster={props.statusPoster}
            posters={postersSuper}
          />
          <div style={{ display: "flex" }}>
            {props.posters.movies ? (
              <NavLink to="/kids" className={s.NavLink}>
                <h1 className={s.header}>{secondHeader}</h1>
              </NavLink>
            ) : (
              <h1 className={s.header}>{secondHeader}</h1>
            )}
          </div>
          <MiniFlickComponent
            statusPoster={props.statusPoster}
            posters={postersKids}
          />

          {props.posters.movies && (
            <>
              <div style={{ display: "flex" }}>
                <NavLink to="/movies" className={s.NavLink}>
                  <h1 className={s.header}>Movies</h1>
                </NavLink>
              </div>
              <MiniFlickComponent
                statusPoster={props.statusPoster}
                posters={postersMovies}
              />
              <NavLink to="/series" className={s.NavLink}>
                <div style={{ display: "flex" }}>
                  <h1 className={s.header}>Series</h1>
                </div>
              </NavLink>
              <MiniFlickComponent
                statusPoster={props.statusPoster}
                posters={postersSeries}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
