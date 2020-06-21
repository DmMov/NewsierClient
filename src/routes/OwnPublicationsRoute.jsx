import React, { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';

// * Components
import { Loader } from 'components';

// * Pages
const OwnPublicationsPage = lazy(() => import(/* webpackChunkName: 'own-publications-page' */ 'pages/own-publications/OwnPublicationsPage'));

export const OwnPublicationsRoute = () =>
  <Route
    path="/cabinet/my-publications"
    component={
      () =>
        <Suspense fallback={<Loader />}>
          <OwnPublicationsPage />
        </Suspense>
    }
  />