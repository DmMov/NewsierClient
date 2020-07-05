import React from 'react';
import { string, number, arrayOf } from 'prop-types';
import { BarChart } from '@material-ui/icons';

// * Components
import { ResponsiveImage, Link, Tags, PublisherBox } from 'components';

// * Constants
import { assets, tag } from 'assets/constants';

// * Sass
import './Publication.scss';

export const Publication = ({ title, categoryId, category, image, value, views, tags, ...props }) =>
  <div className="publication">
    <Link to={`/publications/by-category/${categoryId}`} classes={['publication__category']}>
      {category}
    </Link>
    <h1 className="publication__title">{title}</h1>
    <PublisherBox {...props} />
    <ResponsiveImage src={`${assets}/images/${image}`} classes={['publication__imageContainer']} />
    <p className="publication__value">{value}</p>
    <Tags tags={tags} />
    <p className="publication__views">
      <BarChart className="statIcon" />
      <span className="count digit">{views} views</span>
    </p>
  </div>;

Publication.propTypes = {
  title: string.isRequired,
  categoryId: string.isRequired,
  category: string.isRequired,
  image: string.isRequired,
  value: string.isRequired,
  views: number.isRequired,
  tags: arrayOf(tag)
};