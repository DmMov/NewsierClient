import React from 'react';
import { arrayOf, object } from 'prop-types';

// * Components
import { Publication } from 'components';

// * Sass
import './PublicationList.scss';

export const PublicationList = ({ publications }) =>
  <div className="publicationList">
    {publications.map(publication => <Publication key={publication.id} {...publication} />)}
  </div>

PublicationList.propTypes = {
  publications: arrayOf(object).isRequired
};