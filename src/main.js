import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Projects from "./projects";
import './index.css';
// import About from "./aboutme";
// import JobHistory from "./jobhistory";
//var FontAwesome = require('react-fontawesome');

class Main extends Component {

  state = {

  }

render() {
    return (
      <div className="App">
        <div className="body">
          <img if="gif" src="img/logo.gif"/>
          <br/>
          <a href="https://instagram.com/alexwalling19" target="_blank"><i className="fade-in fa fa-instagram fa-3x"></i></a>
          <a href="https://twitter.com/alexwalling" target="_blank"><i className="fade-in fa fa-twitter fa-3x"></i></a>
          <a href="https://github.com/alexwalling" target="_blank"><i className="fade-in fa fa-github fa-3x"></i></a>
          <a href="https://play.spotify.com/user/alexwalling" target="_blank"><i className="fade-in fa fa-spotify fa-3x"></i></a>
          <a href="https://medium.com/@alexwalling" target="_blank"><i className="fade-in fa fa-medium fa-3x"></i></a>
          <a href="https://www.linkedin.com/in/wallingalex/" target="_blank"><i className="fade-in fa fa-linkedin-square fa-3x"></i></a>
          <a href="mailto:alex.walling19@gmail.com"><i className="fade-in fa fa-envelope fa-3x"></i></a>
          <div className="container">
            <NavLink to="/about-me"><h3 className="fade-in">About Me</h3></NavLink>
            <NavLink to="/projects"><h3 className="fade-in">Projects</h3></NavLink>
            <NavLink to="/job-history"><h3 className="fade-in">Job History</h3></NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;