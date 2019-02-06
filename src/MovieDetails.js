import React, { Component } from 'react';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import { Poster } from './Movie';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetails extends Component {
  state = {
    movie: {},
  }

  async componentDidMount() {
    // grab from the movie database site
    const url = `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=eb27fae1b1495dbfd2ee6a28991bbdec&language=en-US`;
    try {
      const res = await fetch(`${url}`);
      const movie = await res.json();
      this.setState({
        movie,
      });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const { movie } = this.state;
    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <MovieInfo>
          <Overdrive id={movie.id} duration="300">
            <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
          </Overdrive>
          <div>
            <h1>{movie.title}</h1>
            <h3>{movie.release_date}</h3>
            <p>{movie.overview}</p>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
  }
}

export default MovieDetails;

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background-size: cover;
  background: url(${props => props.backdrop}) no-repeat;
`;

const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;
