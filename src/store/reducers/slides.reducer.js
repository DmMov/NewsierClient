import { SET_SLIDES } from 'store/actions';

const defaultState = null;

export const slides = (state = defaultState, { type, payload }) => {
  switch(type) {
    case SET_SLIDES:
      return payload;
  }

  return state;
}
