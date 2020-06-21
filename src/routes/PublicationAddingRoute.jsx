import React, { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';

// * Components
import { Loader } from 'components';

// * Pages
const PublicationAddingPage = lazy(() => import(/* webpackChunkName: 'publication-adding-page' */ 'pages/publication-adding/PublicationAddingPage'));

export const PublicationAddingRoute = () =>
  <Route
    path="/cabinet/publication-adding"
    component={
      () =>
        <Suspense fallback={<Loader />}>
          <PublicationAddingPage />
        </Suspense>
    }
  />;
