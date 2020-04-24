import React from 'react';
import { Redirect } from 'react-router-dom';
import { bool, any, shape, string } from 'prop-types';

export const RedirectChecker = ({ condition, component: Component, redirectParams: { from, to }}) =>
  condition ? <Component /> : <Redirect from={from} to={to} />

RedirectChecker.propTypes = {
  condition: bool.isRequired,
  component: any.isRequired,
  redirectParams: shape({
    from: string.isRequired,
    to: string.isRequired
  }).isRequired
};