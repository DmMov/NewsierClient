import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// * Components
import {
  SignInPage,
  RedirectChecker,
  Header
} from 'components';

// * Selectors
import { selectPublisher } from 'utils/selectors';

// * Constants
import { signInRedirectParams } from 'assets/constants';

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
          <Route
            path="/sign-in"
            component={
              () =>
                <RedirectChecker
                  condition={publisher == null}
                  component={SignInPage}
                  redirectParams={signInRedirectParams}
                />
            }
          />
        </Switch>
      </div>
    </Router>
  )
}