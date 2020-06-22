import React from 'react';
import { arrayOf } from 'prop-types';

// * Components
import { Link } from 'components';

// * Constants
import { tag } from 'assets/constants';

// * Sass
import './TagsBox.scss';

export const TagsBox = ({ tags }) => !!tags && tags.length != 0 &&
  <div className="tagsBox">
    {
      tags.map(
        tag =>
          <Link
            key={tag.id}
            to={`/publications/by-tag/${tag.id}`}
          >
            <span className="tagsBox__tag">#{tag.value}</span>
          </Link>
      )
    }
  </div>;

TagsBox.propTypes = {
  tags: arrayOf(tag)
};