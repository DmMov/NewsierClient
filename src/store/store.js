import { createStore } from 'redux';
import { get } from 'js-cookie';

// * Constants
import { api } from 'assets/constants';

// * Root
import { root } from './reducers';

export const store = createStore(root);

const checkAuthentication = async () => {
  const token = get('token');

  console.log(api);

  if (typeof(token) !== 'undefined') { }
};

checkAuthentication();