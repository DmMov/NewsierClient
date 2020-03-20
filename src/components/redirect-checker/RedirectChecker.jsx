import React from 'react';
import { Redirect } from 'react-router-dom';

export const RedirectChecker = ({ condition, component: Component, redirectParams: { from, to }}) =>
  condition ? <Component /> : <Redirect from={from} to={to} />