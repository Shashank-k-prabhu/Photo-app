import './App.css';
import Navbar from './Navbar/navbar';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from "./Contact";
const App = () => {
  return (
    <Router>
      <Switch>

        <Route path="/Contact" component={Contact} />
      </Switch>
    </Router>
  );
};
export default App;
