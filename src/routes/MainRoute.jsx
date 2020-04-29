import React, { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';

// * Components
import { Loader } from 'components';

// * Pages
const MainPage = lazy(() => import('pages/main/MainPage'));

export const MainRoute = () =>
  <Route
    exact
    path="/"
    component={
      () =>
        <Suspense fallback={<Loader />}>
          <MainPage />
        </Suspense>
    }
  />