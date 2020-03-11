import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from 'components';

// * Sass
import './App.scss';

export const App = () =>
  <Router>
    <>
      <Header />
    </>
  </Router>