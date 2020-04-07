import React from 'react';

// * Components
import {
  ResponsiveImage,
  Link
} from 'components';

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
    <Link
      to={`/publications/by-publisher/${publisherId}`}
    >
      <span className="publisherBox__publisherName">
        {publisher}
      </span>
    </Link>
    <span className="publisherBox__createdAt">
      {createdAt}
    </span>
  </div>