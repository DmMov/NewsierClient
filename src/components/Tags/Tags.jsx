import React from 'react';
import { arrayOf } from 'prop-types';

// * Components
import { Link } from 'components';

// * Constants
import { tag } from 'assets/constants';

// * Sass
import './Tags.scss';

export const Tags = ({ tags }) => !!tags && tags.length != 0 &&
  <div className="tags">
    {
      tags.map(
        tag =>
          <Link key={tag.id} to={`/publications/by-tag/${tag.id}`}>
            <span className="tags__tag">#{tag.value}</span>
          </Link>
      )
    }
  </div>;

Tags.propTypes = {
  tags: arrayOf(tag)
};