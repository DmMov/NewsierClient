import { combineReducers } from 'redux';

// * Reducers
import { publisher } from './publisher.reducer';
import { comments } from './comments.reducer';
import { publications } from './publications.reducer';

export const root = combineReducers({
  publisher,
  comments,
  publications
});