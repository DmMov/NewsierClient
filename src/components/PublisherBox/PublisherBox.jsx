import React from 'react';
import { string } from 'prop-types';

// * Components
import {ResponsiveImage, Link } from 'components';

// * Constants
import { assets } from 'assets/constants';

// * Sass
import './PublisherBox.scss';

export const PublisherBox = ({ publisherId, publisherImage, publisher, createdAt }) =>
  <div className="publisherBox">
    <Link
      to={`/publications/by-publisher/${publisherId}`}
      classes={['publisherBox__imageLink']}
    >
      <ResponsiveImage
        src={`${assets}/images/${publisherImage}`}
        classes={['publisherBox__imageContainer']}
      />
    </Link>
    <span className="publisherBox__publisherPreText">author</span>
    <Link to={`/publications/by-publisher/${publisherId}`}>
      <span className="publisherBox__publisherName">{publisher}</span>
    </Link>
    <span className="publisherBox__createdAt">{createdAt}</span>
  </div>;

PublisherBox.propTypes = {
  publisherId: string.isRequired,
  publisherImage: string.isRequired,
  publisher: string.isRequired,
  createdAt: string.isRequired
};