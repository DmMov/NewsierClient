import React, { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';

// * Components
import { Loader } from 'components';

// * Pages
const RootPage = lazy(() => import('pages/root/RootPage'));

export const RootRoute = () =>
  <Route
    exact
    path="/"
    component={
      () =>
        <Suspense fallback={<Loader />}>
          <RootPage />
        </Suspense>
    }
  />