import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import "antd/dist/antd.css";

import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";

import SearchPageContainer from "./components/SearchPage/indexContainer.jsx";
import ProfilePageContainer from "./components/ProfilePage/indexContainer.jsx";
import HomePageContainer from "./components/HomePage/indexContainer.jsx";
import HeaderBox from "./components/Header/index.jsx";

import LayoutContentWrapper from "./components/utils/LayoutContentWrapper";
import { setStepProfileThunk } from "./redux/ProfileUser";
import { setStepHomeThunk, getAllDataForCoursesThunk } from "./redux/Home";

const { Header } = Layout;

let App = ({
  setStepHomeThunk,
  setStepProfileThunk,
  getAllDataForCoursesThunk,
  statusGetData,
}) => {
  return (
    <BrowserRouter>
      <HeaderBox
        setStepHome={setStepHomeThunk}
        setStepProfile={setStepProfileThunk}
        getAllDataForCourses={getAllDataForCoursesThunk}
        statusGetData={statusGetData}
      />
      <LayoutContentWrapper>
        <Switch>
          <Route path="/search" render={() => <SearchPageContainer />} />
          <Route path="/profile" render={() => <ProfilePageContainer />} />
          <Route path="*" render={() => <HomePageContainer />} />
        </Switch>
      </LayoutContentWrapper>
    </BrowserRouter>
  );
};

let mapStateToProps = (state) => {
  return { statusGetData: state.Home.statusGetData };
};

export default compose(
  connect(mapStateToProps, {
    setStepProfileThunk,
    setStepHomeThunk,
    getAllDataForCoursesThunk,
  }),
  withRouter
)(App);
