import { SET_PUBLICATIONS } from 'store/actions';

const defaultState = null;

export const publications = (state = defaultState, { type, payload }) => {
  switch(type) {
    case SET_PUBLICATIONS:
      return payload;
  }

  return state;
}