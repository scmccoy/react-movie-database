/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';
import styled from 'styled-components';
import Movie from './Movie';

class MoviesList extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    // grab from the movie database site
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=eb27fae1b1495dbfd2ee6a28991bbdec&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
    try {
      const res = await fetch(`${url}`);
      const movies = await res.json();
      this.setState({
        movies: movies.results,
      });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <MovieGrid>
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </MovieGrid>
    );
  }
}

export default MoviesList;

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6,1fr);
  grid-row-gap: 1rem;
`;
