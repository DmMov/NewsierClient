import 'scss/index';

import React from 'react';
import { render } from 'react-dom';

import(/* webpackChunkName: 'app' */ 'components/App')
  .then(({ App }) => 
    render(
      <App />, 
      document.getElementById('app')
    )
  );