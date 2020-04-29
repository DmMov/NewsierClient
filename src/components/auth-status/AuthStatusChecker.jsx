import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { get, remove } from 'js-cookie';

// * Components
import { AuthButtonSet } from './AuthButtonSet';
import { AuthenticatedPanel } from './AuthenticatedPanel';

// * Selectors
import { selectPublisher } from 'utils/selectors';

// * Actions
import { setPublisher } from 'store/actions';

export const AuthStatusChecker = () => {
  const publisher = useSelector(selectPublisher);
  const dispatch = useDispatch();

  const onSignOut = () => {
    remove('token');
    const token = get('token');

    if (typeof(token) == 'undefined')
      dispatch(setPublisher(null));
  }

  return !publisher ?
    <AuthButtonSet /> :
    <AuthenticatedPanel {...publisher}/>
}