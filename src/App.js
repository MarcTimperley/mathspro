import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import './App.css';
import Header from './Components/Header'
import Quiz from './Components/Quiz'
import About from './Components/About'
import Home from './Components/Home'
import Results from './Components/Results'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/results">
            <Results />
          </Route>
          <Route path="/quiz/:operation">
            <Quiz />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
