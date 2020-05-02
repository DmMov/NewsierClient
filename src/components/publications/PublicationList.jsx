import React from 'react';
import { arrayOf, object, oneOf } from 'prop-types';
import classnames from 'classnames';

// * Components
import { PublicationCard } from 'components';

// * Sass
import './PublicationList.scss';

export const PublicationList = ({ publications, mode }) =>
  <div className={classnames('publicationList', mode)}>
    {publications.map(publication => <PublicationCard key={publication.id} {...publication} />)}
  </div>

PublicationList.propTypes = {
  publications: arrayOf(object).isRequired,
  mode: oneOf(['cards', 'list'])
};