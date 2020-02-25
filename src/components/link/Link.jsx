import React from 'react';
import { string, bool } from 'prop-types';
import { Link as RouterLink, Route } from 'react-router-dom';
import cx from 'classnames';

export const Link = ({ to, exact, label }) =>
  <Route
    path={to}
    exact={exact}
    children={({ match }) =>
      <RouterLink className={cx('link', !!match && 'active')} to={to}>
        {label}
      </RouterLink>
    }
  />

Link.propTypes = {
  to: string,
  exact: bool,
  label: string
}