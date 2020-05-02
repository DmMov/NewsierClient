import React from 'react';
import { string, number, arrayOf } from 'prop-types';
import { FiberManualRecord, Visibility } from '@material-ui/icons';

// * Components
import {
  Link,
  TagsBox
} from 'components';

// * Constants
import { tag } from 'assets/constants';

// * Sass
import './PublicationCardDetails.scss';

export const PublicationCardDetails = ({ id, category, categoryId, title, publisher, publisherId, views, value, tags }) =>
  <div className="publicationCardDetails">
    <Link
      to={`/publications/by-category/${categoryId}`}
      classes={['publicationCardDetails__category']}
    >
      {category}
    </Link>
    <Link to={`/publication/${id}`}>
      <h4 className="publicationCardDetails__title">{title}</h4>
    </Link>
    <div className="publicationCardDetails__relatedInfo">
      <p className="publisher">
        <span className="publisher__prefix">автор, </span>
        <Link
          to={`/publications/by-publisher/${publisherId}`}
          classes={['publisher__name']}
        >
          {publisher}
        </Link>
      </p>
      <FiberManualRecord className="dotIcon" />
      <p className="views">
        <Visibility className="statIcon" />
        <span className="views__count">{views}</span>
      </p>
    </div>
    <span className="publicationCardDetails__value">{value}</span>
    <TagsBox tags={tags} />
  </div>

PublicationCardDetails.propTypes = {
  id: string.isRequired,
  category: string.isRequired,
  categoryId: string.isRequired,
  title: string.isRequired,
  publisher: string.isRequired,
  publisherId: string.isRequired,
  views: number.isRequired,
  tags: arrayOf(tag)
};