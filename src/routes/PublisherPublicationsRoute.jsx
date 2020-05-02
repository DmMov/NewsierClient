import React, { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';

// * Components
import { Loader } from 'components';

// * Pages
const PublisherPublicationsPage = lazy(() => import('pages/publisher-publications/PublisherPublicationsPage'));

export const PublisherPublicationsRoute = () =>
  <Route
    path="/profile"
    component={
      () =>
        <Suspense fallback={<Loader />}>
          <PublisherPublicationsPage />
        </Suspense>
    }
  />