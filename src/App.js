import React, { Component } from "react";
import Movie from "./Movie";
import logo from "./logo.svg";
import "./App.css";

const movies = [
  {
    id: 1,
    title: "Star Wars"
  },
  {
    id: 2,
    title: "Star Wars: The Empire Strikes Back"
  },
  {
    id: 3,
    title: "Star Wars: Revenge of the Jedi"
  }
];

class App extends Component {
  render() {
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
