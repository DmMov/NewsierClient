import { combineReducers } from 'redux';
import { publisher } from './publisher.reducer';
import { comments } from './comments.reducer';

export const root = combineReducers({
  publisher,
  comments
});