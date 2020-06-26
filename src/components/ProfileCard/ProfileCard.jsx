import React from 'react';
import { FiberManualRecord } from '@material-ui/icons';
import { string, number } from 'prop-types';

// * Components
import { ResponsiveImage } from 'components';

// * Constants
import { assets } from 'assets/constants';

// * Sass
import './ProfileCard.scss';

export const ProfileCard = ({ image, name, surname, publications, comments, createdAt }) =>
  <div className="profileCard">
    <ResponsiveImage
      src={`${assets}/images/${image}`}
      classes={['profileCard__imageContainer']}
    />
    <h2 className="profileCard__publisherFullName">{`${name} ${surname}`}</h2>
    <p className="profileCard__createdAt">Newsier Publisher since <span className="date">{createdAt}</span>.</p>
    <div className="profileCard__stats">
      <p className="statsItem">
        <span className="statsItem__text">publications, </span>
        <span className="statsItem__value digit">{publications}</span>
      </p>
      <FiberManualRecord className="dotIcon" />
      <p className="statsItem">
        <span className="statsItem__text">comments, </span>
        <span className="statsItem__value digit">{comments}</span>
      </p>
    </div>
  </div>;

ProfileCard.propTypes = {
  image: string.isRequired,
  name: string.isRequired,
  surname: string.isRequired,
  publications: number.isRequired,
  comments: number.isRequired,
  createdAt: string.isRequired
};