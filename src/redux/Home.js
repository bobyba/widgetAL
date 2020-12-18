import { apiIMBD } from "../api/api";
import { apiFirebase } from "../api/api-cloud";

const SET_STEP_HOME = "SET_STEP_HOME";

const SET_FILM_FROM_CLOUD = "SET_FILMS_FROM_CLOUD";

const SET_SELECTED_COURSE = "SET_SELECTED_COURSE";

let initialState = {
  stepHome: "selectedCourse",

  dataWidget: {
    searchData: {
      courses: {
        tech: [
          {
            value: "",
            label: "",
            description: "",
            age: "",
            price: "",
          },
          {
            value: "",
            label: "",
            description: "",
            age: "",
            price: "",
          },
          {
            value: "",
            label: "",
            description: "",
            age: "",
            price: "",
          },
        ],
        art: [
          {
            value: "",
            label: "",
            description: "",
            age: "",
            price: "",
          },
          {
            value: "",
            label: "",
            description: "",
            age: "",
            price: "",
          },
          {
            value: "",
            label: "",
            description: "",
            age: "",
            price: "",
          },
        ],
      },
      teachers: [
        {
          value: "",
          label: "",
          coursesTech: [
            { value: "", label: "", price: "" },
            { title: "", label: "", price: "" },
          ],
        },
      ],
    },
  },

  selectCourseData: {
    title: "",
    teacher: {
      avatar: "",
      name: "",
    },
    description: "",
    price: "",
    categories: "",
    age: "",
    quantityHourse: "",
    duration: "",
    dataStart: "",
    location: "",
    documentLink: "",
  },
};

const Home = (state = initialState, action) => {
  switch (action.type) {
    case SET_STEP_HOME: {
      let stateCopy = {
        ...state,
        stepHome: action.step,
      };
      return stateCopy;
    }
    case SET_SELECTED_COURSE: {
      let stateCopy = {
        ...state,
        selectCourseData: action.courseData,
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

const setStepHome = (step) => {
  return {
    type: SET_STEP_HOME,
    step,
  };
};

const setSelectedCourse = (courseData) => {
  return {
    type: SET_SELECTED_COURSE,
    courseData,
  };
};

/* ------------------------------- */

export const getFilmThunk = (filmId) => async (dispatch) => {
  let response = await apiFirebase.getFilmFromFirebase(filmId);

  if (response) {
    dispatch(setFilmFromCloud(response));
  }
};

export const setStepHomeThunk = (step) => async (dispatch) => {
  dispatch(setStepHome(step));
};

export const setSelectedCourseThunk = (courseData) => async (dispatch) => {
  dispatch(setStepHome("selectedCourse"));
  dispatch(setSelectedCourse(courseData));
};

export default Home;
