import { apiIMBD } from "../api/api";
import { apiFirebase } from "../api/api-cloud";

const SET_STEP_HOME = "SET_STEP_HOME";

const SET_ALL_DATA_COURSES = "SET_ALL_DATA_COURSES",
  SET_SELECTED_COURSE = "SET_SELECTED_COURSE";

let initialState = {
  stepHome: "main",
  statusGetData: false,

  dataWidget: {
    searchData: {
      courses: {
        tech: [
          {
            id: "1WbAlmggswtJVpn8sRcG",
            categoriesEN: "tech",
            quantityHours: 65,
            quantityPlace: 765,
            dateStart: "28-12-20",
            description: "7654",
            documentLink: "654",
            ageFull: "2-6",
            dateEnd: "31-01-21",
            price: 654,
            levelProgram: "Базовая",
            teachersData: [
              {
                description: "aaaaaaaaa",
                label: "aaaaaaaadassss",
                key: 1,
                phone: "aaaaaaaaaaaasd",
                id: "QDx3cXKT5k95gNSMdlvc",
              },
              {
                phone: "рапра",
                label: "dggggg",
                description: "чсм",
                key: 2,
                id: "XViIMTQ2ap63y0VAUPe4",
              },
            ],
            age1: "2",
            age2: "6",
            categories: "Техническая",
            hullsData: [
              {
                id: "pm4mZJCoVi1w4DUxVXXs",
                address: "2",
                label: "41212123",
                key: 2,
                phone: "2",
              },
              {
                label: "534",
                key: 3,
                address: "asd",
                id: "uNiuxpnhqJUqbcsHjQ7I",
                phone: "asd",
              },
            ],
            duration: 564,
            label: "7654",
          },
          {
            id: "hdguyb6GPHcUdAouQncV",
            label: "312",
            documentLink: "123",
            age1: "1",
            categories: "Техническая",
            quantityHours: 123,
            categoriesEN: "tech",
            description: "312",
            hullsData: [
              {
                label: "534",
                address: "asd",
                id: "uNiuxpnhqJUqbcsHjQ7I",
                phone: "asd",
                key: 3,
              },
            ],
            price: 1231,
            teachersData: [
              {
                label: "nice 1",
                id: "c6o52tjXhq3kavA9G4MA",
                phone: "препод",
                key: 3,
                description: "укс",
              },
              {
                id: "XViIMTQ2ap63y0VAUPe4",
                label: "dggggg",
                description: "чсм",
                phone: "рапра",
                key: 2,
              },
            ],
            age2: "8",
            quantityPlace: 123,
            duration: 123,
            dateEnd: "30-01-21",
            dateStart: "28-12-20",
            ageFull: "1-8",
            levelProgram: "Базовая",
          },
        ],
        art: [],
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
    value: "",
    label: "",
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
        dataCourses: state.dataWidget.searchData.courses[action.step],
      };
      debugger;
      return stateCopy;
    }
    case SET_ALL_DATA_COURSES: {
      let stateCopy = {
        ...state,
        statusGetData: true,
        dataWidget: {
          searchData: {
            courses: {
              tech: action.tech.map((item, index) => {
                return { ...item, key: index };
              }),
              art: action.art.map((item, index) => {
                return { ...item, key: index };
              }),
              sport: action.sport.map((item, index) => {
                return { ...item, key: index };
              }),
              social: action.social.map((item, index) => {
                return { ...item, key: index };
              }),
              tourist: action.tourist.map((item, index) => {
                return { ...item, key: index };
              }),
              science: action.science.map((item, index) => {
                return { ...item, key: index };
              }),
            },
          },
        },
      };
      debugger;
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

/* ------------------------------- */

const setStepHome = (step) => {
  return {
    type: SET_STEP_HOME,
    step,
  };
};

/* ------------------------------- */

const setSelectedCourse = (courseData) => {
  return {
    type: SET_SELECTED_COURSE,
    courseData,
  };
};

const setAllDataForCourses = (tech, art, sport, social, tourist, science) => {
  return {
    type: SET_ALL_DATA_COURSES,
    tech,
    art,
    sport,
    social,
    tourist,
    science,
  };
};

/* ------------------------------- */

export const setStepHomeThunk = (step) => async (dispatch) => {
  debugger;
  dispatch(setStepHome(step));
};
/* ------------------------------- */

export const setSelectedCourseThunk = (courseData) => async (dispatch) => {
  dispatch(setStepHome("selectedCourse"));
  dispatch(setSelectedCourse(courseData));
};

export const getAllDataForCoursesThunk = () => async (dispatch) => {
  debugger;
  let tech = await apiFirebase.getDataPrograms("tech");
  let art = await apiFirebase.getDataPrograms("art");
  let sport = await apiFirebase.getDataPrograms("sport");
  let social = await apiFirebase.getDataPrograms("social");
  let tourist = await apiFirebase.getDataPrograms("tourist");
  let science = await apiFirebase.getDataPrograms("science");

  Promise.all([tech, art, sport, social, tourist, science]).then((data) => {
    debugger;
    dispatch(
      setAllDataForCourses(
        (tech = data[0]),
        (art = data[1]),
        (sport = data[2]),
        (social = data[3]),
        (tourist = data[4]),
        (science = data[5])
      )
    );
  });
};

/* ------------------------------- */

export default Home;
