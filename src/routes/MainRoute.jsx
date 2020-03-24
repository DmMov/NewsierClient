import React from 'react';
import { Route } from 'react-router-dom';

// * Pages
import { MainPage } from 'pages';

export const MainRoute = () =>
  <Route
    exact
    path="/"
    component={MainPage}
  />