const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";
const INITIALIZED_UNSUCCESS = "INITIALIZED_UNSUCCESS";
const UPDATE_POP = "UPDATE_POP";

let initialState = {
  initialStatus: false,
  statusPop: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return { ...state, initialStatus: true, statusPop: false };
    case INITIALIZED_UNSUCCESS:
      return { ...state, initialStatus: false, statusPop: true };
    case UPDATE_POP:
      return { ...state, statusPop: false };
    default:
      return state;
  }
};

export const initialzedSuccess = () => {
  return {
    type: INITIALIZED_SUCCESS,
  };
};

export const initialzedUnSuccess = () => {
  return {
    type: INITIALIZED_UNSUCCESS,
  };
};

export const updatePop = () => {
  return {
    type: UPDATE_POP,
  };
};

export const initiliazedApp = (password, pay) => async (dispatch) => {
  if (password === "AC15DAB5E0") {
    dispatch(initialzedSuccess());
  } else {          
    dispatch(initialzedUnSuccess());
  }

  if (pay === "pay success") {
    dispatch(initialzedSuccess());
  }

  setTimeout(() => {
    dispatch(updatePop());
  }, 1500);
};

export default appReducer;
