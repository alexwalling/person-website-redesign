import React, { Component } from 'react';
import './App.css';
//var FontAwesome = require('react-fontawesome');

class App extends Component {
render() {
    return (
      <div className="App">
        <div className="body">
          <img src="img/logo.gif"/>
          <br/>
          <a href="https://instagram.com/alexwalling19" target="_blank"><i className="fa fa-instagram fa-3x"></i></a>
          <a href="https://twitter.com/alexwalling" target="_blank"><i className="fa fa-twitter fa-3x"></i></a>
          <a href="https://github.com/alexwalling" target="_blank"><i className="fa fa-github fa-3x"></i></a>
          <a href="https://play.spotify.com/user/alexwalling" target="_blank"><i className="fa fa-spotify fa-3x"></i></a>
          <a href="https://medium.com/@alexwalling" target="_blank"><i className="fa fa-medium fa-3x"></i></a>
          <a href="https://www.linkedin.com/in/wallingalex/" target="_blank"><i className="fa fa-linkedin-square fa-3x"></i></a>
          <a href="mailto:alex.walling19@gmail.com"><i className="fa fa-envelope fa-3x"></i></a>
          <div className="container">
            <a href="#"><h3>About Me</h3></a>
            <a href="#"><h3>Projects</h3></a>
            <a href="#"><h3>Job History</h3></a>
          </div>
        </div>
      </div>
    );
  }
}

/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="body">
          
          
          <div className="container">
          <div className="socials">
            <a href="https://instagram.com/alexwalling19" target="_blank"><i className="fa fa-instagram fa-2x"></i></a>
            <br/>
            <a href="https://twitter.com/alexwalling" target="_blank"><i className="fa fa-twitter fa-2x"></i></a>
            <br/>
            <a href="https://github.com/alexwalling" target="_blank"><i className="fa fa-github fa-2x"></i></a>
            <br/>
            <a href="https://play.spotify.com/user/alexwalling" target="_blank"><i className="fa fa-spotify fa-2x"></i></a>
            <br/>
            <a href="https://medium.com/@alexwalling" target="_blank"><i className="fa fa-medium fa-2x"></i></a>
            <br/>
            <a href="https://www.linkedin.com/in/wallingalex/" target="_blank"><i className="fa fa-linkedin-square fa-2x"></i></a>
            <br/>
            <a href="mailto:alex.walling19@gmail.com"><i className="fa fa-envelope fa-2x"></i></a>
          </div>
            <img src="img/logo.gif"/>
            <br/>
            <a href="#"><h3>About Me</h3></a>
            <a href="#"><h3>Projects</h3></a>
            <a href="#"><h3>Job History</h3></a>
          </div>
        </div>
      </div>
    );
  }
}
*/

export default App;
