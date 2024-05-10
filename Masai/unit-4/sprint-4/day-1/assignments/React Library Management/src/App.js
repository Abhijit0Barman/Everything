import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import SectionPage from './components/SectionPage';
import BookDetailsPage from './components/BookDetailsPage';
import InvalidPage from './components/InvalidPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/section/:section" component={SectionPage} />
        <Route exact path="/bookdetailspage/:id" component={BookDetailsPage} />
        <Route component={InvalidPage} />
      </Switch>
    </Router>
  );
};

export default App;
