import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// * Sass
import 'assets/scss';

// * Store
import { store } from 'store';

import(/* webpackChunkName: 'app' */ 'components/App')
  .then(({ App }) =>
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('app')
    )
  );