import React from 'react';

// * Components
import { Link } from 'components';

// * Sass
import './TagsBox.scss';

export const TagsBox = ({ tags }) =>
  <div className="tagsBox">
    {
      tags.map(
        tag =>
          <Link
            key={tag.id}
            to={`/publications/by-tag/${tag.id}`}
          >
            <span className="tagsBox__tag">{tag.value}</span>
          </Link>
      )
    }
  </div>
