import React from 'react';
import { useDispatch } from 'react-redux';
import { remove } from 'js-cookie';
import { ExitToApp } from '@material-ui/icons';

// * Actions
import { setPublisher } from 'store/actions';

// * Sass
import './SignOutButton.scss';

export const SignOutButton = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    remove('token');
    dispatch(setPublisher({}));
  }

  return <button className="signOutButton btn" onClick={onClick}>
    <ExitToApp className="signOutButton__icon" />
    <span className="signOutButton__text">sign out</span>
  </button>;
}