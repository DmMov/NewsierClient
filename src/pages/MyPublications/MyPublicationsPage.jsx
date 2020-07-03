import React from 'react';
import { useDispatch } from 'react-redux';

// * Components
import { Publications } from 'components';

// * Actions
import { deletePublication } from 'store/actions';

// * Sass
import './MyPublicationsPage.scss';

const MyPublicationsPage = () => {
  const dispatch = useDispatch();

  const onPublicationDelete = id => dispatch(deletePublication(id));

  return <div className="myPublicationsPage page">
    <Publications url="/publications/by-publisher" />
  </div>;
}

export default MyPublicationsPage;