import { apiIMBD } from "../api/api";
import { apiFirebase } from "../api/api-cloud";

const SET_STEP_PROFILE = "SET_STEP_PROFILE";
const SET_USER_DATA = "SET_USER_DATA";

const SET_FILM_FROM_CLOUD = "SET_FILMS_FROM_CLOUD";
const SET_FILMS_POSTERS_FROM_CLOUD_MOVIES =
  "SET_FILMS_POSTERS_FROM_CLOUD_MOVIES";

let initialState = {
  stepProfile: "main",

  userData: {
    parents: [
      {
        fio: "",
        passport: {
          id1part: "",
          id2part: "",
        },
        phoneNumber: "",
        email: "",
      },
      {
        fio: "",
        passport: {
          id1part: "",
          id2part: "",
        },
        phoneNumber: "",
        email: "",
      },
    ],
    child: [
      {
        fio: "",
        birthday: "",
        snils: "",
        typeDocument: "",
        passport: {
          id1part: "",
          id2part: "",
        },
        timeTableData: {},
        paidOffers: [
          {
            nameCourse: "",
            documentLink: "",
            idDocument: "",
            groupID: "",
            paidFor: "",
            dataPaid: "",
            dataStartCourse: "",
          },
        ],
        phoneNumber: "",
        email: "",
      },
      {
        fio: "",
        birthday: "",
        snils: "",
        passport: {
          id1part: "",
          id2part: "",
        },
        timeTableData: {},
        paidOffers: [
          {
            nameCourse: "",
            documentLink: "",
            idDocument: "",
            groupID: "",
            paidFor: "",
            dataPaid: "",
            dataStartCourse: "",
          },
        ],
        phoneNumber: "",
        email: "",
      },
    ],
  },
};

const ProfileUser = (state = initialState, action) => {
  switch (action.type) {
    case SET_STEP_PROFILE: {
      let stateCopy = {
        ...state,
        stepProfile: action.step,
      };
      return stateCopy;
    }
    case SET_USER_DATA: {
      let stateCopy = {
        ...state,
        userData: action.userData,
      };
      return stateCopy;
    }
    default:
      return state;
  }
};

const setFilmFromCloud = (filmData) => {
  return {
    type: SET_FILM_FROM_CLOUD,
    filmData,
  };
};

const setFilmsPosterFromFireBaseMovies = (posters) => {
  return {
    type: SET_FILMS_POSTERS_FROM_CLOUD_MOVIES,
    posters,
  };
};

/* ------------------------- */

const setStepProfile = (step) => {
  return {
    type: SET_STEP_PROFILE,
    step,
  };
};

const setUserData = (userData) => {
  return {
    type: SET_USER_DATA,
    userData,
  };
};

/* ------------------------------- */

export const getFilmThunk = (filmId) => async (dispatch) => {
  let response = await apiFirebase.getFilmFromFirebase(filmId);

  if (response) {
    dispatch(setFilmFromCloud(response));
  }
};

export const setStepProfileThunk = (step) => async (dispatch) => {
  dispatch(setStepProfile(step));
};

export const setUserDataThunk = (dataUser) => async (dispatch) => {
  dispatch(setUserData(dataUser));
};

/* ------------------ */

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

export default ProfileUser;
