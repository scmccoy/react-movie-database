/* eslint react/no-did-mount-set-state: 0 */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import MoviesList from './components/MoviesList';
import MovieDetails from './components/MovieDetails';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/" className="App-main-title">
          <h1>- React Movie Database -</h1>
        </Link>
      </header>
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/:id" component={MovieDetails} />

      </Switch>
    </div>
  </Router>
);

export default App;
