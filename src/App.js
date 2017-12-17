import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Main from './main.js';
import Projects from "./projects";
import Jobs from './jobs'
import About from './about'
//var FontAwesome = require('react-fontawesome');


class App extends Component {
render() {
    return (
      <HashRouter>
            <div className="content">
              <Route path="/projects" component={Projects}/>
              <Route path="/job-history" component={Jobs}/>
              <Route path="/about-me" component={About}/>
              <Route exact={true} path="/" component={Main}/>
            </div>
      </HashRouter>
    );
  }
}

export default App;
