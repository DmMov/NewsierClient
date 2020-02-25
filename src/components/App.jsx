import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from 'components';

// * Sass
import './App.scss';

export const App = () =>
  <Router>
    <>
      <Navbar />
    </>
  </Router>