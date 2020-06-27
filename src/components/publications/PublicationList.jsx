import React from 'react';
import { arrayOf, object } from 'prop-types';

// * Components
import { PublicationCard } from 'components';

// * Sass
import './PublicationList.scss';

export const PublicationList = ({ publications }) =>
  <div className="publicationList">
    {
      publications.length != 0 ?
        publications.map(
          publication => <PublicationCard key={publication.id} {...publication} />
        ) :
        <p className="publicationList__noPublications">
          there are no publications.
        </p>
    }
  </div>;

PublicationList.propTypes = {
  publications: arrayOf(object).isRequired
};