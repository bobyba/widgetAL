import React, { Component } from "react";

import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import SearchPage from "./index";

class SearchPageContainer extends Component {
  render() {
    return <SearchPage />;
  }
}

let mapStateToProps = (state) => {
  return {};
};

export default compose(
  connect(mapStateToProps, {}),
  withRouter
)(SearchPageContainer);
