import React from 'react';
import { string, bool, func } from 'prop-types';

// * Components
import { PublisherBox } from 'components';

// * Sass
import './CommentCard.scss';

export const CommentCard = ({ value, authenticated, canDelete, onDelete, ...props }) =>
  <div className="commentCard">
    <PublisherBox {...props} />
    <span className="commentCard__value">{value}</span>
    {canDelete && <button className="commentCard__deleteBtn" onClick={onDelete}>+</button>}
  </div>

CommentCard.propTypes = {
  id: string.isRequired,
  value: string.isRequired,
  canDelete: bool.isRequired,
  onDelete: func.isRequired
};