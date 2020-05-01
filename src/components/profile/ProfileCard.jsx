import React from 'react';
import { FiberManualRecord } from '@material-ui/icons';

// * Components
import { ResponsiveImage } from 'components';

// * Constants
import { assets } from 'assets/constants';

// * Sass
import './ProfileCard.scss';

export const ProfileCard = ({ publisher: { image, name, surname, publications, comments, createdAt } }) =>
  <div className="profileCard">
    <ResponsiveImage
      src={`${assets}/images/${image}`}
      classes={['profileCard__imageContainer']}
    />
    <h2 className="profileCard__publisherFullName">
      {`${name} ${surname}`}
    </h2>
    <span className="profileCard__createdAt">
      Користувач Newsier з {createdAt} року.
    </span>
    <div className="profileCard__stats">
      <p className="statsItem">
        <span className="statsItem__text">публікацій, </span>
        <span className="statsItem__value digit">{publications}</span>
      </p>
      <FiberManualRecord className="dotIcon" />
      <p className="statsItem">
        <span className="statsItem__text">коментарів, </span>
        <span className="statsItem__value digit">{comments}</span>
      </p>
    </div>
  </div>