import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './LandingPage';
import Main from './Main';
// import firebase from './firebase';
import { BrowserRouter as Router, Link, NavLink, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={ LandingPage } />
          <Route path="/home" component={ Main } />
        </div>
      </Router>
    );
  }
}

export default App;
