import React from 'react';
import { FiberManualRecord, Visibility, Delete } from '@material-ui/icons';

// * Components
import {
  ResponsiveImage,
  Link,
  TagsBox
} from 'components';

// * Constants
import { assets } from 'assets/constants';

// * Sass
import './PublicationItem.scss';

export const PublicationItem = ({ id, image, title, category, categoryId, views, value, tags, createdAt }) =>
  <div className="publicationItem">
    <ResponsiveImage
      src={`${assets}/images/${image}`}
      classes={['publicationItem__imageContainer']}
    />
    <Link to={`/publication/${id}`}>
      <h4 className="publicationItem__title">{title}</h4>
    </Link>
    <p className="publicationItem__createdAt">
      опубліковано
      <span className="value"> {createdAt} </span>
      року.
    </p>
    <div className="publicationItem__inlineWrap">
      <Link
        to={`/publications/by-category/${categoryId}`}
        classes={['publicationItem__category']}
      >
        {category}
      </Link>
      <FiberManualRecord className="dotIcon" />
      <p className="publicationItem__views">
        <Visibility className="icon" />
        <span className="count digit">{views}</span>
      </p>
    </div>
    <span className="publicationItem__value">{value}</span>
    <TagsBox tags={tags} />
    <button className="publicationItem__deleteBtn btn">
      <Delete className="icon" />
      <span className="text">видалити</span>
    </button>
  </div>