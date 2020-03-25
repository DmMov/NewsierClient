import { combineReducers } from 'redux';
import { publisher } from './publisher.reducer';

export const root = combineReducers({
  publisher
});