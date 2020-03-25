import { combineReducers } from 'redux';
import { publisher } from './publisher.reducer';
import { publications } from './publications.reducer';
import { slides } from './slides.reducer';

export const root = combineReducers({
  publisher,
  publications,
  slides
});