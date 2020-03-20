import { createStore } from 'redux';
import { get } from 'js-cookie';

// * Helpers
import { getRequest } from 'utils/helpers';

// * Root
import { root } from './reducers/root.reducer';

// * Actions
import { setPublisher } from 'store/actions';

export const store = createStore(root);

const checkAuthentication = async () => {
  const token = get('token');

  const response = await getRequest('/auth');

  if (response.status == 200) {
    store.dispatch(setPublisher(response.data));
  }

  console.log('publisher ', response.data);

  if (typeof(token) !== 'undefined') { }
};

checkAuthentication();