import React, { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';

// * Components
import { Loader } from 'components';

// * Pages
const PublicationPage = lazy(() => import('pages/publication/PublicationPage'));

export const PublicationRoute = () =>
  <Route
    path="/publication/:publicationId"
    component={
      () =>
        <Suspense fallback={<Loader />}>
          <PublicationPage />
        </Suspense>
    }
  />