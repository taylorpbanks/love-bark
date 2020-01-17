import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './pages/home/home';
import Login from './pages/login/login';
import ContactUs from './pages/contact-us/contact-us';
import AvailableDogs from './pages/available-dogs/available-dogs';
import Profile from './pages/available-dogs/profile/profile';
import HowToAdopt from './pages/how-to-adopt/how-to-adopt';
import Navigation from './framework/navigation/navigation';
import Footer from './framework/footer/footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <div className="content-container">
          <Route exact path="/" component={Home} />
          <Route exact path="/available-dogs" component={AvailableDogs} />
          <Route path="/available-dogs/:name" component={Profile} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/how-to-adopt" component={HowToAdopt} />
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
