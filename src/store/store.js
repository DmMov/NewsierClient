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
  const response = await getRequest('/auth');

  if (response.status == 200) {
    store.dispatch(setPublisher(response.data));
  }
};

checkAuthentication();