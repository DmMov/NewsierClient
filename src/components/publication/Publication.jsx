import React from 'react';
import { ChevronRight } from '@material-ui/icons';

// * Components
import {
  ResponsiveImage,
  PublicationDetails,
  Link
} from 'components';

// * Constants
import { assets } from 'assets/constants';

// * Sass
import './Publication.scss';

export const Publication = ({ id, image, createdAt, ...props }) =>
  <div className="publication">
    <ResponsiveImage
      src={`${assets}/images/${image}`}
      classes={['publication__imageContainer']}
    />
    <PublicationDetails id={id} {...props} />
    <Link
      to={`/publication/${id}`}
      classes={['btn', 'primary', 'publication__readMore']}
    >
      <span className="readMore__text">читати більше</span>
      <ChevronRight className="arrowIcon" />
    </Link>
    <span className="publication__createdAt">{createdAt}</span>
  </div>