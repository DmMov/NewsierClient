import React, { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';

// * Components
import { Loader } from 'components';

// * Pages
const HomePage = lazy(() => import(/* webpackChunkName: 'home-page' */ 'pages/Home/HomePage'));

export const HomeRoute = () =>
  <Route
    exact
    path="/"
    component={
      () =>
        <Suspense fallback={<Loader />}>
          <HomePage />
        </Suspense>
    }
  />;