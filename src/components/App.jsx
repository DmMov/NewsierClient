import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { get } from 'js-cookie';

// * Routes
import {
  RootRoute,
  SignInRoute,
  SignUpRoute,
  CabinetRoute,
  PublicationRoute
} from 'routes';

// * Components
import {
  Header,
  Footer,
  Loader
} from 'components';

// * Selectors
import { selectPublisher } from 'utils/selectors';

// * Actions
import { getPublisher, setPublisher } from 'store/actions';

// * Sass
import './App.scss';

export const App = () => {
  const publisher = useSelector(selectPublisher);
  const dispatch = useDispatch();

  useEffect(() => {
    getAuthenticatedPublisher();
  }, []);

  const getAuthenticatedPublisher = async () => {
    const token = get('token');

    if (!!token)
      dispatch(await getPublisher());
    else
      dispatch(setPublisher({}));
  }

  return publisher ? <Router>
    <div id="app">
      <Header publisher={publisher} />
      <RootRoute />
      <SignInRoute publisher={publisher} />
      <SignUpRoute publisher={publisher} />
      <CabinetRoute publisher={publisher} />
      <PublicationRoute />
      <Footer authorized={!!publisher} />
    </div>
  </Router> :
  <Loader />;
}