import { apiIMBD } from "../api/api";
import { apiFirebase } from "../api/api-cloud";

const SET_FILM = "SET_FILM";

const SET_FILM_FROM_CLOUD = "SET_FILMS_FROM_CLOUD";
const SET_FILMS_POSTERS_FROM_CLOUD_MOVIES =
  "SET_FILMS_POSTERS_FROM_CLOUD_MOVIES";

let initialState = {
  statusPoster: false,
  statusFilm: false,
  filmDataFromImbd: {},
  filmDataFromFirebase: 0,
  filmPostersFromFirebase: [],
  filmBigPostersFromFirebase: [],
  filmSuperPostersFromFirebase: [],
  pageFilms: "movies",
};

const cardFilm = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILM: {
      let stateCopy = {
        ...state,
      };
      return stateCopy;
    }
    default:
      return state;
  }
};

export const setFilmFromCloud = (filmData) => {
  return {
    type: SET_FILM_FROM_CLOUD,
    filmData,
  };
};

export const setFilmsPosterFromFireBaseMovies = (posters) => {
  return {
    type: SET_FILMS_POSTERS_FROM_CLOUD_MOVIES,
    posters,
  };
};

export const getFilmThunk = (filmId) => async (dispatch) => {
  let response = await apiFirebase.getFilmFromFirebase(filmId);

  if (response) {
    dispatch(setFilmFromCloud(response));
  }
};

export const pushProductsInFirebaseThunk = (
  filmData,
  filmId,
  ep,
  cardId
) => async (dispatch) => {
  let response = await apiFirebase.pushProductsInFirebase(
    filmData,
    filmId,
    ep,
    cardId
  );
};

export const getFilmsPosterThunk = (categories) => async (dispatch) => {
  if (categories === "/movies") {
    categories = "movies";
  } else if (categories === "/series") {
    categories = "serials";
  } else if (categories === "/kids") {
    categories = "kidsmovies";
  } else {
    categories = "firstpage";
  }

  let response = await apiFirebase.getPoster(categories);
  if (response) {
    dispatch(setFilmsPosterFromFireBaseMovies(response));
  }
};

export default cardFilm;
