import React from 'react';
import { string } from 'prop-types';
import { ChevronRight } from '@material-ui/icons';

// * Components
import { ResponsiveImage, PublicationDetails, Link } from 'components';

// * Constants
import { assets } from 'assets/constants';

// * Sass
import './PublicationCard.scss';

export const PublicationCard = ({ image, createdAt, ...props }) =>
  <div className="publicationCard">
    <ResponsiveImage
      src={`${assets}/images/${image}`}
      classes={['publicationCard__imageContainer', 'withOverlay']}
    />
    <PublicationDetails {...props} />
    <Link
      to={`/publication/${props.id}`}
      classes={['btn', 'primary', 'publicationCard__readMore']}
    >
      <span className="readMore__text">see more</span>
      <ChevronRight className="arrowIcon" />
    </Link>
    <span className="publicationCard__createdAt">{createdAt}.</span>
  </div>;

PublicationCard.propTypes = {
  image: string.isRequired,
  createdAt: string.isRequired
};