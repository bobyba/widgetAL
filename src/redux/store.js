import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleWare from "redux-thunk";
import cardFilm from "./cardFilm";
import Home from "./Home";
import appReducer from "./initialApp";
import ProfileUser from "./ProfileUser";

let reducers = combineReducers({ cardFilm, ProfileUser, Home, appReducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleWare))
);
export default store;
