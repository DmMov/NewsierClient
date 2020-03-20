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

export const App = () => {
  const publisher = useSelector(selectPublisher);
  console.log('publisher in the App component ', publisher);

  return (
    <Router>
      <div id="app">
        <Header />
        <Switch>
          <SignInRoute publisher={publisher} />
        </Switch>
      </div>
    </Router>
  )
}