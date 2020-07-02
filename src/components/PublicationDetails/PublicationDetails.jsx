import React from 'react';
import { string, number, arrayOf } from 'prop-types';
import { BarChart } from '@material-ui/icons';

// * Components
import { Link, TagsBox } from 'components';

// * Constants
import { tag } from 'assets/constants';

// * Sass
import './PublicationDetails.scss';

export const PublicationDetails = ({ id, category, categoryId, title, publisher, publisherId, views, value, tags }) =>
  <div className="publicationDetails">
    <Link to={`/publications/by-category/${categoryId}`} classes={['publicationDetails__category']}>
      {category}
    </Link>
    <Link to={`/publication/${id}`}>
      <h4 className="publicationDetails__title">{title}</h4>
    </Link>
    <div className="publicationDetails__inlineWrap">
      <p className="publicationDetails__publisher">
        <span className="prefix">by </span>
        <Link to={`/publications/by-publisher/${publisherId}`} classes={['name']}>
          {publisher}
        </Link>
      </p>
      <span className="publicationDetails__verticalDash">|</span>
      <p className="publicationDetails__views">
        <BarChart className="statIcon" />
        <span className="count digit">{views} views</span>
      </p>
    </div>
    <span className="publicationDetails__value">{value}</span>
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