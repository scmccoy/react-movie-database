import React, { Component } from "react";
import PropTypes from "prop-types";

class Movie extends Component {
  static propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
      desc: PropTypes.string
    })
  };

  render() {
    const { title } = this.props.movie;
    return (
      <div>
        <h3>{title}</h3>
      </div>
    );
  }
}
export default Movie;
