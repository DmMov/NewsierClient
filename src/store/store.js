import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { get } from 'js-cookie';

// * Root
import { root } from './reducers/root.reducer';

// * Actions
import { getPublisher } from 'store/actions';

export const store = createStore(root, applyMiddleware(thunk));

const checkAuthentication = async () => {
  const token = get('token');

  if (!!token)
    store.dispatch(await getPublisher());
};

checkAuthentication();