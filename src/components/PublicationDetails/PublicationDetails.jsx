import React from 'react';
import { string, number, arrayOf } from 'prop-types';
import {  BarChart } from '@material-ui/icons';

// * Components
import { Link, TagsBox } from 'components';

// * Constants
import { tag } from 'assets/constants';

// * Sass
import './PublicationDetails.scss';

export const PublicationDetails = ({ id, category, categoryId, title, publisher, publisherId, views, value, tags }) =>
  <div className="publicationCardDetails">
    <Link to={`/publications/by-category/${categoryId}`} classes={['publicationCardDetails__category']}>
      {category}
    </Link>
    <Link to={`/publication/${id}`}>
      <h4 className="publicationCardDetails__title">{title}</h4>
    </Link>
    <p className="publisher">
      <span className="publisher__prefix">author, </span>
      <Link to={`/publications/by-publisher/${publisherId}`} classes={['publisher__name']}>
        {publisher}
      </Link>
    </p>
    <p className="views">
      <BarChart className="statIcon" />
      <span className="views__count">{views} views</span>
    </p>
    <span className="publicationCardDetails__value">{value}</span>
    <TagsBox tags={tags} />
  </div>;

PublicationDetails.propTypes = {
  id: string.isRequired,
  category: string.isRequired,
  categoryId: string.isRequired,
  title: string.isRequired,
  publisher: string.isRequired,
  publisherId: string.isRequired,
  views: number.isRequired,
  tags: arrayOf(tag)
};