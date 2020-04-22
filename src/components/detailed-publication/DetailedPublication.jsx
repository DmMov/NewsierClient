import React from 'react';
import { Visibility } from '@material-ui/icons';

// * Components
import {
  ResponsiveImage,
  Link,
  TagsBox,
  PublisherBox
} from 'components';

// * Constants
import { assets } from 'assets/constants';

// * Sass
import './DetailedPublication.scss';

export const DetailedPublication = ({ title, categoryId, category, image, value, views, tags, ...props }) =>
  <div className="detailedPublication">
    <h1 className="detailedPublication__title">{title}</h1>
    <Link
      to={`/publications/by-category/${categoryId}`}
      classes={['detailedPublication__categoryLink']}
    >
      <span className="detailedPublication__category">{category}</span>
    </Link>
    <PublisherBox {...props} />
    <ResponsiveImage
      src={`${assets}/images/${image}`}
      classes={['detailedPublication__imageContainer', 'withOverlay']}
    />
    <p className="detailedPublication__value">{value}</p>
    <p className="detailedPublication__views">
      <Visibility className="statIcon" />
      <span className="detailedPublication__views__count">{views}</span>
    </p>
    {!!tags && <TagsBox tags={tags} />}
  </div>