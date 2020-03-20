import { SET_PUBLISHER } from 'store/actions';

const defaultState = null;

export const publisher = (state = defaultState, { type, payload }) => {
  switch(type) {
    case SET_PUBLISHER:
      return payload;
  }

  return state;
}
