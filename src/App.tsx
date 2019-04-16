import React, { Component } from "react";
import {HashRouter as Router, Route} from 'react-router-dom';
import {TodoPage, FormPage} from './pages';


class App extends Component {
  render() {
    return (
      <Router>
          <Route exact path='/' component={TodoPage}  />
          <Route  path='/form' component={FormPage}  />
      </Router>
    );
  }
}

export default App;
