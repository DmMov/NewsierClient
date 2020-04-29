import React from 'react';
import { string, number, arrayOf } from 'prop-types';
import { FiberManualRecord, Visibility } from '@material-ui/icons';

// * Components
import {
  ResponsiveImage,
  Link,
  TagsBox,
  PublisherBox
} from 'components';

// * Constants
import {
  assets,
  tag
} from 'assets/constants';

// * Sass
import './Publication.scss';

export const Publication = ({ title, categoryId, category, image, value, views, tags, ...props }) =>
  <div className="publication">
    <h1 className="publication__title">{title}</h1>
    <div className="publication__inlineWrap">
      <Link
        to={`/publications/by-category/${categoryId}`}
        classes={['publication__category']}
      >
        {category}
      </Link>
      <FiberManualRecord className="dotIcon" />
      <p className="publication__views">
        <Visibility className="statIcon" />
        <span className="publication__views__count">{views}</span>
      </p>
    </div>
    <PublisherBox {...props} />
    <ResponsiveImage
      src={`${assets}/images/${image}`}
      classes={['publication__imageContainer', 'withOverlay']}
    />
    <p className="publication__value">{value}</p>
    <TagsBox tags={tags} />
  </div>

Publication.propTypes = {
  title: string.isRequired,
  categoryId: string.isRequired,
  category: string.isRequired,
  image: string.isRequired,
  value: string.isRequired,
  views: number.isRequired,
  tags: arrayOf(tag)
};