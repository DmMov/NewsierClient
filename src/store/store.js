import { createStore, applyMiddleware } from 'redux';
import { get } from 'js-cookie';
import thunk from 'redux-thunk';

// * Constants
import { api } from 'assets/constants';

// * Root
import { root } from './reducers';

export const store = createStore(root, applyMiddleware(thunk));

const checkAuthentication = async () => {
  const token = get('token');

  console.log(api);

  if (typeof(token) !== 'undefined') { }
};

checkAuthentication();