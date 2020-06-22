import React from 'react';
import { useHistory } from 'react-router-dom';
import { ArrowBackIos } from '@material-ui/icons';

// * Sass
import './BackButton.scss';

export const BackButton = () => {
  const history = useHistory();

  const onClick = () => history.goBack();

  return <button className="btn backButton" onClick={onClick}>
    <ArrowBackIos className="backButton__icon" />
    <span className="backButton__text">назад</span>
  </button>;
}