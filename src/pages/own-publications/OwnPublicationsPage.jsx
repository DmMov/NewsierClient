import React from 'react';
import { useDispatch } from 'react-redux';

// * Components
import {
  Publications,
  PublicationItem
} from 'components';

// * Actions
import { deletePublication } from 'store/actions';

// * Sass
import './OwnPublicationsPage.scss';

const OwnPublicationsPage = () => {
  const dispatch = useDispatch();

  const onPublicationDelete = id => dispatch(deletePublication(id));

  return (
    <div className="ownPublicationsPage page">
      <Publications
        url="/publications/by-publisher"
        component={props => <PublicationItem onDelete={() => onPublicationDelete(props.id)} {...props} />}
      />
    </div>
  );
}

export default OwnPublicationsPage;