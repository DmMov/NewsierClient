import React, { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';

// * Pages
const SignUpPage = lazy(() => import('pages/sign-up/SignUpPage'));

// * Components
import {
  RedirectChecker,
  Loader
} from 'components';

// * Constants
import { signUpRedirectParams } from 'assets/constants';

export const SignUpRoute = ({ publisher }) =>
  <Route
    path="/sign-up"
    component={
      () =>
        <RedirectChecker
          condition={publisher == null}
          component={
            () =>
              <Suspense fallback={<Loader />}>
                <SignUpPage />
              </Suspense>
          }
          redirectParams={signUpRedirectParams}
        />
    }
  />;