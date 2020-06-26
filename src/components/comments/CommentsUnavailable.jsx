import React from 'react';

// * Components
import { Link } from 'components';

// * Sass
import './CommentsUnavailable.scss';

export const CommentsUnavailable = () =>
  <div className="commentsUnavailable">
    comments unavailable, you must
    <Link
      to={`/sign-in`}
      classes={['commentsUnavailable__authLink']}
    > sign in</Link>.
  </div>;