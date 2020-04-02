import React from 'react';
import { FiberManualRecordRounded, Visibility } from '@material-ui/icons';

// * Components
import { Link } from 'components';

// * Sass
import './PublicationDetails.scss';

export const PublicationDetails = ({ id, category, categoryId, title, publisher, publisherId, views, tags }) =>
  <div className="publicationDetails">
    <Link
      to={`/publications/by-category/${categoryId}`}
    >
      <span className="publicationDetails__category">{category}</span>
    </Link>
    <Link
      to={`/publication/${id}`}
    >
      <h4 className="publicationDetails__title">{title}</h4>
    </Link>
    <div className="publicationDetails__relatedInfo">
      <p className="publisher">
        <span className="publisher__prefix">автор, </span>
        <Link
          to={`/publications/by-publisher/${publisherId}`}
        >
          <span className="publisher__name">{publisher}</span>
        </Link>
      </p>
      <FiberManualRecordRounded className="dotIcon" />
      <p className="views">
        <Visibility className="statIcon" />
        <span className="views__count">{views}</span>
      </p>
    </div>
    <div className="publicationDetails__tags">
      {
        tags.map(
          tag =>
            <Link
              key={tag.id}
              to={`/publications/by-tag/${tag.id}`}
            >
              <span className="tag">{tag.value}</span>
            </Link>
        )
      }
    </div>
  </div>