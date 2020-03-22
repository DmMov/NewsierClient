import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

// * Routes
import { SignInRoute } from 'routes';

// * Components
import { Header } from 'components';

// * Selectors
import { selectPublisher } from 'utils/selectors';

// * Sass
import './App.scss';
import { Slider } from './slider/Slider';

export const App = () => {
  const publisher = useSelector(selectPublisher);

  return (
    <Router>
      <div id="app">
        <Header />
        <Slider />
        <Switch>
          <SignInRoute publisher={publisher} />
        </Switch>
      </div>
    </Router>
  )
}