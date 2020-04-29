import React from 'react';
import { arrayOf, object } from 'prop-types';

// * Components
import { PublicationCard } from 'components';

// * Sass
import './PublicationCardList.scss';

export const PublicationCardList = ({ publications }) =>
  <div className="publicationList">
    {publications.map(publication => <PublicationCard key={publication.id} {...publication} />)}
  </div>

PublicationCardList.propTypes = {
  publications: arrayOf(object).isRequired
};