import React, { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';

// * Pages
const SignInPage = lazy(() => import('pages/sign-in/SignInPage'));

// * Components
import {
  RedirectChecker,
  Loader
} from 'components';

// * Constants
import { signInRedirectParams } from 'assets/constants';

export const SignInRoute = ({ publisher }) =>
  <Route
    path="/sign-in"
    component={
      () =>
        <RedirectChecker
          condition={publisher == null}
          component={
            () =>
              <Suspense fallback={<Loader />}>
                <SignInPage />
              </Suspense>
          }
          redirectParams={signInRedirectParams}
        />
    }
  />
