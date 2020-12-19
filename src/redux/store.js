import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleWare from "redux-thunk";
import Home from "./Home";
import appReducer from "./initialApp";
import ProfileUser from "./ProfileUser";

let reducers = combineReducers({ ProfileUser, Home, appReducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleWare))
);
export default store;
