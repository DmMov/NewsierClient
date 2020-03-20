import React from 'react';
import { Route } from 'react-router-dom';
// * Pages
import { SignInPage } from 'pages';

// * Components
import { RedirectChecker } from 'components';

// * Constants
import { signInRedirectParams } from 'assets/constants';

export const SignInRoute = ({ publisher }) =>
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
