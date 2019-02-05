/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';
import Movie from './Movie';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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
    const { movies } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

export default App;
