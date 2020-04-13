import React from 'react';
import { Route } from 'react-router-dom';

// * Pages
import { PublicationPage } from 'pages';

export const PublicationRoute = () =>
  <Route
    path="/publication/:publicationId"
    component={PublicationPage}
  />