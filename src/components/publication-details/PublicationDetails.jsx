import React from 'react';
import { FiberManualRecordRounded, ChevronRight, VisibilityOutlined } from '@material-ui/icons';

// * Components
import { Link } from 'components';

// * Sass
import './PublicationDetails.scss';

export const PublicationDetails = ({ id, category, categoryId, title, createdAt, publisher, views }) =>
  <div className="publicationDetails">
    <Link
      to={`/publications/by-category/${categoryId}`}
    >
      <span className="publicationDetails_category">{ category }</span>
    </Link>
    <Link
      to={`/publication/${id}`}
    >
      <h3 className="publicationDetails__title">{ title }</h3>
    </Link>
    <div className="publicationDetails__relatedInfo">
      <p className="publisher">
        <span className="publisher__prefix">автор, </span>
        <span className="publisher__name">{ publisher }</span>
      </p>
      <FiberManualRecordRounded className="dotIcon"/>
      <p className="views">
        <VisibilityOutlined className="views__statIcon"/>
        <span className="views__count">{ views }</span>
      </p>
    </div>
    <Link
      to={`/publication/${id}`}
    >
      <span className="publicationDetails__readMore">
        читати більше
      </span>
      <ChevronRight className="arrow-icon"/>
    </Link>
    <span className="publicationDetails__createdAt">{ createdAt }</span>
  </div>
