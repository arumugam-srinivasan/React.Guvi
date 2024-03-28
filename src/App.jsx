// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import FullStackDevelopment from './components/FullStackDevelopment';
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity';
import Career from './components/Career';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navigation">
          <ul>
            <li><Link to="/">All</Link></li>
            <li><Link to="/fullstack">Full Stack Development</Link></li>
            <li><Link to="/datascience">Data Science</Link></li>
            <li><Link to="/cybersecurity">Cyber Security</Link></li>
            <li><Link to="/career">Career</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/fullstack" component={FullStackDevelopment} />
          <Route path="/datascience" component={DataScience} />
          <Route path="/cybersecurity" component={CyberSecurity} />
          <Route path="/career" component={Career} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
