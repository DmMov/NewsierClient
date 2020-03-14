import React from 'react';
import { string, bool, arrayOf } from 'prop-types';
import { Link as RouterLink, Route } from 'react-router-dom';
import classnames from 'classnames';

export const Link = ({ to, exact, label, classes }) =>
  <Route
    path={to}
    exact={exact}
    children={({ match }) =>
      <RouterLink className={classnames('link', !!match && 'active', classes)} to={to}>
        {label}
      </RouterLink>
    }
  />

Link.propTypes = {
  to: string.isRequired,
  exact: bool,
  label: string.isRequired,
  classes: arrayOf(string)
}