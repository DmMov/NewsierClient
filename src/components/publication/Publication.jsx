import React from 'react';
import { string } from 'prop-types';
import { ChevronRight } from '@material-ui/icons';

// * Components
import {
  ResponsiveImage,
  PublicationDetails,
  Link
} from 'components';

// * Constants
import {
  assets,
  publication
} from 'assets/constants';

// * Sass
import './Publication.scss';

export const Publication = ({ id, image, createdAt, ...props }) =>
  <div className="publication">
    <ResponsiveImage
      src={`${assets}/images/${image}`}
      classes={['publication__imageContainer', 'withOverlay']}
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

Publication.propTypes = {
  id: string.isRequired,
  image: string.isRequired,
  createdAt: string.isRequired
};