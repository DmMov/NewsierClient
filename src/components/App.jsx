import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from 'components';

// * Components
import {
  SignInPage
} from 'components';

// * Sass
import './App.scss';

export const App = () =>
  <Router>
    <div id="app">
      <Header />
      <Switch>
        <Route path="/sign-in" component={SignInPage} />
      </Switch>
    </div>
  </Router>