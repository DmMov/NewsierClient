import React from 'react';
import { arrayOf, object, any } from 'prop-types';

// * Sass
import './PublicationList.scss';

export const PublicationList = ({ publications, component: Component }) =>
  <div className="publicationList">
    {publications.map(publication => <Component key={publication.id} {...publication} />)}
  </div>

PublicationList.propTypes = {
  publications: arrayOf(object).isRequired,
  component: any
};