import React, { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';

// * Pages
const SignUpPage = lazy(() => import(/* webpackChunkName: 'sign-up-page' */ 'pages/SignUp/SignUpPage'));

// * Components
import { RedirectChecker, Loader } from 'components';

// * Utils
import { isEmpty } from 'utils/helpers';

// * Constants
import { signUpRedirectParams } from 'assets/constants';

export const SignUpRoute = ({ publisher }) =>
  <Route
    path="/sign-up"
    component={
      () =>
        <RedirectChecker
          condition={!publisher || isEmpty(publisher)}
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