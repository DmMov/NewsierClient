import React from 'react';
import { string, bool, arrayOf, any } from 'prop-types';
import { Link as RouterLink, Route } from 'react-router-dom';
import classnames from 'classnames';

export const Link = ({ to, exact, classes, children }) =>
  <Route
    path={to}
    exact={exact}
    children={({ match }) =>
      <RouterLink className={classnames('link', !!match && 'active', classes)} to={to}>
        { children }
      </RouterLink>
    }
  />

Link.propTypes = {
  to: string.isRequired,
  exact: bool,
  classes: arrayOf(string),
  children: any
};