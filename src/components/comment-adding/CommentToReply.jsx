import React from 'react';

// * Components
import { ResponsiveImage } from 'components';

// * Constants
import { assets } from 'assets/constants';

// * Sass
import './CommentToReply.scss';

export const CommentToReply = ({ publisherImage, publisher, value, cancel }) =>
  <div className="commentToReply">
    <ResponsiveImage
      src={`${assets}/images/${publisherImage}`}
      classes={['commentToReply__imageContainer']}
    />
    <span className="commentToReply__publisher">
      {publisher}
    </span>
    <span className="commentToReply__value">
      {value}
    </span>
    <button className="commentToReply__cancelBtn" onClick={cancel}>+</button>
  </div>