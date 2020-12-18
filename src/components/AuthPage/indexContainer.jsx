import React, { Component } from "react";

import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import AuthPage from "./index";
import { getFilmsPosterThunk } from "../../redux/cardFilm";

class AuthPageContainer extends Component {
  componentDidMount() {
    this.props.getFilmsPosterThunk(this.props.match.params[0]);
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params[0] !== prevProps.match.params[0]) {
      this.props.getFilmsPosterThunk(this.props.match.params[0]);
    }
  }

  render() {
    return (
      <AuthPage
        posters={this.props.posters}
        bigPosters={this.props.bigPosters}
        statusPoster={this.props.statusPoster}
        superMovies={this.props.superMovies}
        url={this.props.match.params[0]}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    posters: state.cardFilm.filmPostersFromFirebase,
    bigPosters: state.cardFilm.filmBigPostersFromFirebase,
    superMovies: state.cardFilm.filmSuperPostersFromFirebase,
    filmsPage: state.cardFilm.pageFilms,
    statusPoster: state.cardFilm.statusPoster,
  };
};

export default compose(
  connect(mapStateToProps, { getFilmsPosterThunk }),
  withRouter
)(AuthPageContainer);
