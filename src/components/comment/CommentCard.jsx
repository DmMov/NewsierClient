import React from 'react';
import { string, bool, func } from 'prop-types';

// * Components
import { Link, ResponsiveImage } from 'components';

// * Constants
import { assets } from 'assets/constants';

// * Sass
import './CommentCard.scss';

export const CommentCard = ({ value, canDelete, onDelete, publisherId, publisherImage, createdAtDate, createdAtTime, publisher}) =>
  <div className="commentCard">
    <Link
      to={`/publications/by-publisher/${publisherId}`}
      classes={['commentCard__imageLink']}
    >
      <ResponsiveImage
        src={`${assets}/images/${publisherImage}`}
        classes={['commentCard__imageContainer']}
      />
    </Link>
    <Link
      to={`/publications/by-publisher/${publisherId}`}
    >
      <span className="commentCard__publisherName">
        {publisher}
      </span>
    </Link>
    <p className="commentCard__createdAt">
      <span className="atDate">{createdAtDate}</span> року, о <span className="atTime">{createdAtTime}</span>.
    </p>
    <p className="commentCard__value">{value}</p>
    {canDelete && <button className="commentCard__deleteBtn" onClick={onDelete}>+</button>}
  </div>;

CommentCard.propTypes = {
  id: string.isRequired,
  value: string.isRequired,
  canDelete: bool.isRequired,
  onDelete: func.isRequired,
  publisherId: string.isRequired,
  publisherImage: string.isRequired,
  publisher: string.isRequired,
  createdAtDate: string.isRequired,
  createdAtTime: string.isRequired
};