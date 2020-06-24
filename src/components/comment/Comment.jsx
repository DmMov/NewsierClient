import React from 'react';
import { string, bool, func } from 'prop-types';

// * Components
import { Link, ResponsiveImage } from 'components';

// * Constants
import { assets } from 'assets/constants';

// * Sass
import './Comment.scss';

export const Comment = ({ value, canDelete, onDelete, publisherId, publisherImage, createdAtDate, createdAtTime, publisher }) =>
  <div className="comment">
    <Link to={`/publications/by-publisher/${publisherId}`} classes={['comment__imageLink']}>
      <ResponsiveImage src={`${assets}/images/${publisherImage}`} classes={['comment__imageContainer']}/>
    </Link>
    <Link to={`/publications/by-publisher/${publisherId}`}>
      <span className="comment__publisherName">{publisher}</span>
    </Link>
    <span className="comment__createdAt">{createdAtDate} року, о {createdAtTime}.</span>
    <p className="comment__value">{value}</p>
    {canDelete && <button className="comment__deleteBtn" onClick={onDelete}>+</button>}
  </div>;

Comment.propTypes = {
  value: string.isRequired,
  canDelete: bool.isRequired,
  onDelete: func.isRequired,
  publisherId: string.isRequired,
  publisherImage: string.isRequired,
  publisher: string.isRequired,
  createdAtDate: string.isRequired,
  createdAtTime: string.isRequired
};