import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import AuthPage from './components/Auth';
import BookingsPage from './components/Bookings';
import EventsPage from './components/Events';
import MainNav from './components/Navigation/MainNav'

import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainNav/>
          <main className="main-content">
            <Switch>
            <Redirect from="/" to="/auth" exact />
            <Route path="/auth" component={AuthPage} />
            <Route path="/events" component={EventsPage} />
            <Route path="/bookings" component={BookingsPage} />   
          </Switch>
          </main>
      </BrowserRouter>
    );
  }
}

export default App;