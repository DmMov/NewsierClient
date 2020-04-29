import React, { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';

// * Components
import {
  RedirectChecker,
  Loader
} from 'components';

// * Pages
const ProfilePage = lazy(() => import('pages/profile/ProfilePage'));

// * Constants
import { profileRedirectParams } from 'assets/constants';

export const ProfileRoute = ({ publisher }) =>
  <Route
    path="/profile"
    component={
      () =>
        <RedirectChecker
          condition={publisher != null}
          component={
            () =>
              <Suspense fallback={<Loader />}>
                <ProfilePage />
              </Suspense>
          }
          redirectParams={profileRedirectParams}
        />
    }
  />