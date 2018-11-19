import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import './App.css';
import './css/homepage.css'
import './css/navBar.css'
import './css/footer.css'
import './css/portfolio.css'

import Portfolio from './components/Portfolio';
import Aboutme from './components/Aboutme';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Home from './components/Home';
import NavBar from './components/NavBar'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path = "/Portfolio" component = { Portfolio }/>
          <Route path = "/Aboutme" comoponent = { Aboutme } />
          <Route path = "/Resume" comoponent = { Resume } />
          <Route path = "/Contact" comoponent = { Contact } />
          <Route path = "/" component = { Home } />
          <Redirect to= "/" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
