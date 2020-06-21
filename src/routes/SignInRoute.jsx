import React, { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';

// * Pages
const SignInPage = lazy(() => import(/* webpackChunkName: 'sign-in-page' */ 'pages/sign-in/SignInPage'));

// * Components
import {
  RedirectChecker,
  Loader
} from 'components';

// * Utils
import { isEmpty } from 'utils/helpers';

// * Constants
import { signInRedirectParams } from 'assets/constants';

export const SignInRoute = ({ publisher }) =>
  <Route
    path="/sign-in"
    component={
      () =>
        <RedirectChecker
          condition={!publisher || isEmpty(publisher)}
          component={
            () =>
              <Suspense fallback={<Loader />}>
                <SignInPage />
              </Suspense>
          }
          redirectParams={signInRedirectParams}
        />
    }
  />;