import { apiIMBD } from "../api/api";
import { apiFirebase } from "../api/api-cloud";

const SET_STEP_PROFILE = "SET_STEP_PROFILE",
  SET_USER_DATA_FOR_FORM = "SET_USER_DATA_FOR_FORM",
  SET_USER_DATA_FOR_OFFERSSUB = "SET_USER_DATA_FOR_OFFERSSUB",
  SET_USER_DATA_FOR_OFFER_INFO = "SET_USER_DATA_FOR_OFFER_INFO",
  SET_USER_DATA_FOR_TIMETABLE = "SET_USER_DATA_FOR_TIMETABLE",
  SET_AUTH_USER = "SET_AUTH_USER",
  SET_USER_DATA = "SET_USER_DATA",
  CREATE_PARENT_USER_DATA = "CREATE_PARENT_USER_DATA",
  UPDATE_PARENT_USER_DATA = "UPDATE_PARENT_USER_DATA",
  CREATE_CHILD_USER_DATA = "CREATE_CHILD_USER_DATA",
  UPDATE_CHILD_USER_DATA = "UPDATE_CHILD_USER_DATA",
  EXIT_AUTH_USER = "EXIT_AUTH_USER";

let initialState = {
  stepProfile: "main",
  selectedUserDataForTimetable: {},
  selectedUserDataForForm: {},
  selectedChildOffersData: {},
  selectedUserDataForOfferInfo: {},

  authUser: false,
  userId: "",
  userData: {
    parents: [
      {
        key: 0,
        label: "Eлена Владимировна Шпак",
        id1part: "2515",
        id2part: "123321",
        phoneNumber: "+7 123 321 3232",
        email: "mailru@mail.ru",
      },
    ],
    child: [
      {
        key: 0,
        label: "Костя Шпак",
        birthday: "31.12.2020",
        snils: "42069148805",
        typeDocument: "Паспорт",
        id1part: "2515",
        id2part: "312444",
        timeTableData: [
          {
            title: "Химия",
            start: "2020-12-20T14:30:00",
          },
          {
            title: "Физика",
            start: "2020-12-23T14:30:00",
          },
          {
            title: "Матеш",
            start: "2020-12-24T14:30:00",
          },
          {
            title: "Англ",
            start: "2020-12-25T14:30:00",
            end: "2020-12-25T15:30:00",
          },
          {
            title: "Англ",
            start: "2020-12-26T14:30:00",
          },
          {
            title: "Англ",
            start: "2020-12-27T14:30:00",
          },
          {
            title: "Англ",
            start: "2020-12-25T14:30:00",
          },
          {
            title: "Англ",
            start: "2020-12-25T14:30:00",
          },
        ],
        paidOffers: [
          {
            label: "Химия",
            documentLink: "",
            idDocument: "",
            groupID: "",
            paidFor: "",
            dataPaid: "",
            dataStartCourse: "",
          },
          {
            label: "Физика",
            documentLink: "",
            idDocument: "",
            groupID: "",
            paidFor: "",
            dataPaid: "",
            dataStartCourse: "",
          },
          {
            label: "Матеш",
            documentLink: "",
            idDocument: "",
            groupID: "",
            paidFor: "",
            dataPaid: "",
            dataStartCourse: "",
          },
        ],
        phoneNumber: "+7123123123",
        email: "main@email.com",
      },
      {
        key: 1,
        label: "Костя Шпак",
        birthday: "31.11.2012",
        snils: "42069148805",
        typeDocument: "Паспорт",
        id1part: "4343",
        id2part: "111321",
        timeTableData: [{}],
        paidOffers: [
          {
            nameCourse: "Ректал",
            documentLink: "",
            idDocument: "",
            groupID: "",
            paidFor: "",
            dataPaid: "",
            dataStartCourse: "",
          },
        ],
        phoneNumber: "+79143211232",
        email: "sad@dsa.ds",
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
    case SET_AUTH_USER: {
      let stateCopy = {
        ...state,
        authUser: true,
      };
      return stateCopy;
    }
    case EXIT_AUTH_USER: {
      let stateCopy = {
        ...state,
        authUser: false,
        userData: { parent: [], child: [] },
      };
      return stateCopy;
    }
    case SET_USER_DATA: {
      let stateCopy = {
        ...state,
        /*   userData: { parent: [], child: [] }, */
        userId: action.userData[0],
      };
      return stateCopy;
    }
    /* --------  */
    case CREATE_PARENT_USER_DATA: {
      debugger;

      state.userData.parents.push({
        ...action.userData,
        key: null,
        label: action.userData.label,
        id1part: action.userData.id1part,
        id2part: action.userData.id2part,
        phoneNumber: action.userData.phoneNumber,
        email: action.userData.email,
      });

      let stateCopy = {
        ...state,
        userData: {
          ...state.userData,
          parents: state.userData.parents.map((item, i) => {
            debugger;
            return { ...item, key: i };
          }),
        },
      };

      debugger;

      apiFirebase.updateUserData(stateCopy.userData, stateCopy.userId);

      return stateCopy;
    }
    case UPDATE_PARENT_USER_DATA: {
      let stateCopy = {
        ...state,
        userData: {
          ...state.userData,
          parents: state.userData.parents.map((item, i) => {
            return { ...item, key: i };
          }),
        },
      };
      debugger;
      stateCopy.userData.parents[action.userData.key] = action.userData;
      debugger;
      apiFirebase.updateUserData(stateCopy.userData, stateCopy.userId);
      return stateCopy;
    }
    /* --------  */

    case CREATE_CHILD_USER_DATA: {
      debugger;

      state.userData.child.push({
        key: "",
        label: action.userData.label,
        birthday: action.userData.birthday,
        snils: action.userData.snils,
        typeDocument: action.userData.typeDocument,
        id1part: action.userData.id1part,
        id2part: action.userData.id2part,
        timeTableData: [
          {
            title: "Англ",
            start: "2020-12-25T14:30:00",
          },
        ],
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
        phoneNumber: action.userData.phoneNumber,
        email: action.userData.email,
      });

      let stateCopy = {
        ...state,
        userData: {
          ...state.userData,
          child: state.userData.child.map((item, i) => {
            debugger;
            return { ...item, key: i };
          }),
        },
      };

      debugger;

      apiFirebase.updateUserData(stateCopy.userData, stateCopy.userId);

      return stateCopy;
    }
    case UPDATE_CHILD_USER_DATA: {
      let stateCopy = {
        ...state,
        userData: {
          ...state.userData,
          child: state.userData.child.map((item, i) => {
            return { ...item, key: i };
          }),
        },
      };
      debugger;
      stateCopy.userData.child[action.userData.key] = action.userData;
      debugger;
      apiFirebase.updateUserData(stateCopy.userData, stateCopy.userId);
      return stateCopy;
    }
    /* --------  */
    case SET_USER_DATA_FOR_TIMETABLE: {
      let stateCopy = {
        ...state,
        selectedUserDataForTimetable: action.userData.timeTableData,
      };
      return stateCopy;
    }
    case SET_USER_DATA_FOR_FORM: {
      let stateCopy = {
        ...state,
        selectedUserDataForForm: action.userData,
      };
      return stateCopy;
    }
    case SET_USER_DATA_FOR_OFFERSSUB: {
      let stateCopy = {
        ...state,
        selectedChildOffersData: action.userData.paidOffers,
      };
      return stateCopy;
    }
    case SET_USER_DATA_FOR_OFFER_INFO: {
      let stateCopy = {
        ...state,
        selectedUserDataForOfferInfo: action.userData,
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

const createParentUserData = (userData) => {
  return {
    type: CREATE_PARENT_USER_DATA,
    userData,
  };
};

const updateParentUserData = (userData) => {
  return {
    type: UPDATE_PARENT_USER_DATA,
    userData,
  };
};

const createChildUserData = (userData) => {
  return {
    type: CREATE_CHILD_USER_DATA,
    userData,
  };
};

const updateChildUserData = (userData) => {
  return {
    type: UPDATE_CHILD_USER_DATA,
    userData,
  };
};

/* ------------------------- */

const setUserDataForTimetable = (userData) => {
  return {
    type: SET_USER_DATA_FOR_TIMETABLE,
    userData,
  };
};

const setUserDataForForm = (userData) => {
  return {
    type: SET_USER_DATA_FOR_FORM,
    userData,
  };
};

const setUserDataForOffersSub = (userData) => {
  return {
    type: SET_USER_DATA_FOR_OFFERSSUB,
    userData,
  };
};

const setUserDataForOfferInfo = (userData) => {
  return {
    type: SET_USER_DATA_FOR_OFFER_INFO,
    userData,
  };
};

const setAuthUser = (userData) => {
  return {
    type: SET_AUTH_USER,
    userData,
  };
};

const exitAuthUser = () => {
  return {
    type: EXIT_AUTH_USER,
  };
};

/* ------------------------------- */

export const setStepProfileThunk = (step) => async (dispatch) => {
  dispatch(setStepProfile(step));
};

export const setUserDataForTimeTableThunk = (userData) => async (dispatch) => {
  dispatch(setStepProfile("timeTableSub"));
  dispatch(setUserDataForTimetable(userData));
};

export const createParentUserDataThunk = (userData) => async (dispatch) => {
  dispatch(createParentUserData(userData));
};

export const updateParentUserDataThunk = (userData) => async (dispatch) => {
  dispatch(updateParentUserData(userData));
};

export const createChildUserDataThunk = (userData) => async (dispatch) => {
  dispatch(createChildUserData(userData));
};

export const updateChildUserDataThunk = (userData) => async (dispatch) => {
  dispatch(updateChildUserData(userData));
};

/* ------------------ */

export const selectFormUserThunk = (userData) => async (dispatch) => {
  dispatch(setStepProfile("personalForm"));
  dispatch(setUserDataForForm(userData));
};

export const selectFormUserForHomeThunk = (userData) => async (dispatch) => {
  dispatch(setUserDataForForm(userData));
};

/* ------------------ */

export const selectChildOffersThunk = (userData) => async (dispatch) => {
  dispatch(setStepProfile("offersSub"));
  dispatch(setUserDataForOffersSub(userData));
};

export const selectChildOfferForOfferInfoThunk = (userData) => async (
  dispatch
) => {
  dispatch(setStepProfile("offerInfo"));
  dispatch(setUserDataForOfferInfo(userData));
};
/* ------------------ */

export const setAuthUserThunk = (userData) => async (dispatch) => {
  dispatch(setAuthUser());
  let id = await apiFirebase.createNewUser();

  Promise.all([id]).then((id) => {
    debugger;
    dispatch(setUserData(id));
  });
};

export const exitAuthUserThunk = () => async (dispatch) => {
  dispatch(exitAuthUser());
};

/* export const setDataUserThunk = (userData) => async (dispatch) => {
  dispatch(setDataUser(userData));
}; */
/* ------------------ */

export default ProfileUser;
