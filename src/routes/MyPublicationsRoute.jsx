import React, { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';

// * Components
import { Loader } from 'components';

// * Pages
const MyPublicationsPage = lazy(() => import(/* webpackChunkName: 'my-publications-page' */ 'pages/MyPublications/MyPublicationsPage'));

export const MyPublicationsRoute = () =>
  <Route
    path="/cabinet/my-publications"
    component={
      () =>
        <Suspense fallback={<Loader />}>
          <MyPublicationsPage />
        </Suspense>
    }
  />