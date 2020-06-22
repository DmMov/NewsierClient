import React from 'react';
import { string } from 'prop-types';

// * Components
import {
  ResponsiveImage,
  Link
} from 'components';

// * Constants
import { assets } from 'assets/constants';

// * Sass
import './PublisherBox.scss';

export const PublisherBox = ({ publisherId, publisherImage, publisher, createdAtDate, createdAtTime }) =>
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
    <span className="publisherBox__publisherPreText">автор</span>
    <Link
      to={`/publications/by-publisher/${publisherId}`}
    >
      <span className="publisherBox__publisherName">
        {publisher}
      </span>
    </Link>
    <p className="publisherBox__createdAt">
      опубліковано <span className="atDate">{createdAtDate}</span> року, о <span className="atTime">{createdAtTime}</span>.
    </p>
  </div>;

PublisherBox.propTypes = {
  publisherId: string.isRequired,
  publisherImage: string.isRequired,
  publisher: string.isRequired,
  createdAtDate: string.isRequired,
  createdAtTime: string.isRequired
};