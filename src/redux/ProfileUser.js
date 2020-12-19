import { apiIMBD } from "../api/api";
import { apiFirebase } from "../api/api-cloud";

const SET_STEP_PROFILE = "SET_STEP_PROFILE";
const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  stepProfile: "main",

  userData: {
    parents: [
      {
        id: "0",
        fio: "",
        passport: {
          id1part: "",
          id2part: "",
        },
        phoneNumber: "",
        email: "",
      },
      {
        id: "1",
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
        id: "0",
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
        id: "1",
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

export const setStepProfileThunk = (step) => async (dispatch) => {
  dispatch(setStepProfile(step));
};

export const setUserDataThunk = (dataUser) => async (dispatch) => {
  dispatch(setUserData(dataUser));
};

/* ------------------ */

export default ProfileUser;
