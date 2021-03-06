import React, { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';

// * Components
import { Loader } from 'components';

// * Pages
const ProfilePage = lazy(() => import(/* webpackChunkName: 'profile-page' */ 'pages/Profile/ProfilePage'));

export const ProfileRoute = () =>
  <Route
    exact
    path="/cabinet"
    component={
      () =>
        <Suspense fallback={<Loader />}>
          <ProfilePage />
        </Suspense>
    }
  />