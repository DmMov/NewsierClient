import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// * Components
import { PublicationList } from './PublicationList';

// * Actions
import {
  getPublications,
  setPublications
} from 'store/actions';

// * Selectors
import { selectPublications } from 'utils/selectors';

export const Publications = ({ url, component }) => {
  const dispatch = useDispatch();
  const publications = useSelector(selectPublications);

  useEffect(() => {
    dispatch(getPublications(url));
    return () => {
      dispatch(setPublications(null));
    }
  }, [])

  return (
    !!publications &&
      <PublicationList
        publications={publications}
        component={component}
      />
  );
}