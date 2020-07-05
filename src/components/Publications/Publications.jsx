import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { string } from 'prop-types';

// * Components
import { PublicationList } from './PublicationList';
import { Spinner } from 'components';

// * Actions
import { getPublications, setPublications } from 'store/actions';

// * Selectors
import { selectPublications } from 'utils/selectors';

export const Publications = ({ url }) => {
  const dispatch = useDispatch();
  const publications = useSelector(selectPublications);

  useEffect(() => {
    dispatch(getPublications(url));
    return () => {
      dispatch(setPublications(null));
    }
  }, []);

  return !!publications ?
    <PublicationList publications={publications} /> :
    <Spinner />;
}

Publications.propTypes = {
  url: string.isRequired
};