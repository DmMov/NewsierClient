import React from 'react';

// * Components
import {
  ResponsiveImage,
  Link,
  TagsBox
} from 'components';
import { PublisherBox } from './PublisherBox';

// * Constants
import { assets } from 'assets/constants';

// * Sass
import './DetailedPublication.scss';

export const DetailedPublication = ({ title, categoryId, category, image, value, tags, ...props }) =>
  <div className="detailedPublication">
    <h1 className="detailedPublication__title">{title}</h1>
    <Link
      to={`/publications/by-category/${categoryId}`}
    >
      <span className="detailedPublication__category">{category}</span>
    </Link>
    <PublisherBox {...props} />
    {/* <ResponsiveImage
      src={`${assets}/images/${image}`}
      classes={['detailedPublication__imageContainer']}
    /> */}
    <p className="detailedPublication__value">
      {value}
    </p>
    <TagsBox tags={!!tags ? tags : []} />
  </div>