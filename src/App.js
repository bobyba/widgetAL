import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import "antd/dist/antd.css";

import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";

import AuthPageContainer from "./components/AuthPage/indexContainer.jsx";
import SearchPageContainer from "./components/SearchPage/indexContainer.jsx";
import ProfilePageContainer from "./components/ProfilePage/indexContainer.jsx";
import HomePageContainer from "./components/HomePage/indexContainer.jsx";
import HeaderBox from "./components/Header/index.jsx";

import LayoutContentWrapper from "./components/utils/LayoutContentWrapper";
import { setStepProfileThunk } from "./redux/ProfileUser";
import { setStepHomeThunk } from "./redux/Home";

const { Header } = Layout;

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <HeaderBox
          setStepHome={this.props.setStepHomeThunk}
          setStepProfile={this.props.setStepProfileThunk}
        />
        <LayoutContentWrapper>
          <Switch>
            <Route path="/auth" render={() => <AuthPageContainer />} />
            <Route path="/search" render={() => <SearchPageContainer />} />
            <Route path="/profile" render={() => <ProfilePageContainer />} />
            <Route path="*" render={() => <HomePageContainer />} />
          </Switch>
        </LayoutContentWrapper>
      </BrowserRouter>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    passwordStatus: state.appReducer.initialStatus,
    statusPop: state.appReducer.statusPop,
  };
};

export default compose(
  connect(mapStateToProps, { setStepProfileThunk, setStepHomeThunk }),
  withRouter
)(App);
