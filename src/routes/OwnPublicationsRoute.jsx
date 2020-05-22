import React, { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';

// * Components
import { Loader } from 'components';

// * Pages
const OwnPublicationsPage = lazy(() => import('pages/own-publications/OwnPublicationsPage'));

export const OwnPublicationsRoute = () =>
  <Route
    exact
    path="/profile"
    component={
      () =>
        <Suspense fallback={<Loader />}>
          <OwnPublicationsPage />
        </Suspense>
    }
  />