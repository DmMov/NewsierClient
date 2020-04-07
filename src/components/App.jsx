import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// * Routes
import {
  MainRoute,
  SignInRoute,
  PublicationRoute
} from 'routes';

// * Components
import { Header } from 'components';

// * Selectors
import { selectPublisher } from 'utils/selectors';

// * Sass
import './App.scss';
import { PublicationPage } from '../pages';

export const App = () => {
  const publisher = useSelector(selectPublisher);

  return (
    <Router>
      <div id="app">
        <Header />
        <MainRoute />
        <SignInRoute publisher={publisher} />
        <Switch>
          <Route
            exact
            path="/publication/:id"
            component={PublicationPage}
          />
        </Switch>
      </div>
    </Router>
  )
}