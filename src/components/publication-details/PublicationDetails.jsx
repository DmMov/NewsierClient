import React from 'react';
import { FiberManualRecordRounded, ChevronRight, Visibility } from '@material-ui/icons';

// * Components
import { Link } from 'components';

// * Sass
import './PublicationDetails.scss';

export const PublicationDetails = ({ id, category, categoryId, title, createdAt, publisher, views }) =>
  <div className="publicationDetails">
    <Link
      to={`/publications/by-category/${categoryId}`}
    >
      <span className="publicationDetails__category">{ category }</span>
    </Link>
    <Link
      to={`/publication/${id}`}
    >
      <h4 className="publicationDetails__title">{ title }</h4>
    </Link>
    <div className="publicationDetails__relatedInfo">
      <p className="publisher">
        <span className="publisher__prefix">автор, </span>
        <span className="publisher__name">{ publisher }</span>
      </p>
      <FiberManualRecordRounded className="dotIcon"/>
      <p className="views">
        <Visibility className="statIcon"/>
        <span className="views__count">{ views }</span>
      </p>
    </div>
    <Link
      to={`/publication/${id}`}
      classes={['btn', 'primary', 'publicationDetails__readMore']}
    >
      <span className="readMore__text">читати більше</span>
      <ChevronRight className="arrowIcon"/>
    </Link>
    <span className="publicationDetails__createdAt">{ createdAt }</span>
  </div>
