import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
import Todo from './Todo';
import styles from './style.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
        <div className="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Todo">Todo App</Link>
            </li>
          </ul>
        </div>
           <Route exact path="/" component={Home} />
           <Route path="/Todo" component={Todo} />
        </div>
        
      </Router>
    );
  }
}

export default App;