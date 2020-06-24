import React from 'react';

// * Components
import { Link } from 'components';

// * Sass
import './CommentsUnavailable.scss';

export const CommentsUnavailable = () =>
  <div className="commentsUnavailable">
    коментарі недоступні, вам необхідно
    <Link
      to={`/sign-in`}
      classes={['commentsUnavailable__authLink']}
    > авторизуватись</Link>.
  </div>;