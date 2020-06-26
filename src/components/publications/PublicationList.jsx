import React from 'react';
import { arrayOf, object, any } from 'prop-types';

// * Sass
import './PublicationList.scss';

export const PublicationList = ({ publications, component: Component }) =>
  <div className="publicationList">
    {
      publications.length != 0 ?
        publications.map(publication => <Component key={publication.id} {...publication} />) :
        <p className="publicationList__noPublications">there are no publications.</p>
    }
  </div>

PublicationList.propTypes = {
  publications: arrayOf(object).isRequired,
  component: any
};