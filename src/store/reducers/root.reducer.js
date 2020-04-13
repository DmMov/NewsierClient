import { combineReducers } from 'redux';

// * Reducers
import { publisher } from './publisher.reducer';
import { comments } from './comments.reducer';
import { replyAim } from './replyAim.reducer';

export const root = combineReducers({
  publisher,
  comments,
  replyAim
});