import { SET_COMMENTS } from 'store/actions';

const defaultState = null;

export const comments = (state = defaultState, { type, payload }) => {
  switch(type) {
    case SET_COMMENTS:
      return payload;
  }

  return state;
}