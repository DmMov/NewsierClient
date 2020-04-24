import React from 'react';
import { string, func } from 'prop-types';

// * Components
import { ResponsiveImage } from 'components';

// * Constants
import { assets } from 'assets/constants';

// * Sass
import './ReplyAim.scss';

export const ReplyAim = ({ publisherImage, publisher, value, cancel }) =>
  <div className="replyAim">
    <ResponsiveImage
      src={`${assets}/images/${publisherImage}`}
      classes={['replyAim__imageContainer']}
    />
    <span className="replyAim__publisher">
      {publisher}
    </span>
    <span className="replyAim__value">
      {value}
    </span>
    <button className="replyAim__cancelBtn" onClick={cancel}>+</button>
  </div>

ReplyAim.propTypes = {
  publisherImage: string.isRequired,
  publisher: string.isRequired,
  value: string.isRequired,
  cancel: func.isRequired
};