import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

// * Routes
import {
  RootRoute,
  SignInRoute,
  CabinetRoute,
  PublicationRoute
} from 'routes';

// * Components
import { Header } from 'components';

// * Selectors
import { selectPublisher } from 'utils/selectors';

// * Sass
import './App.scss';

export const App = () => {
  const publisher = useSelector(selectPublisher);

  return <Router>
    <div id="app">
      <Header publisher={publisher} />
      <RootRoute />
      <SignInRoute publisher={publisher} />
      <CabinetRoute publisher={publisher} />
      <PublicationRoute />
    </div>
  </Router>
}