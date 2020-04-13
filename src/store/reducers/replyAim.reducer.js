import { SET_REPLY_AIM } from 'store/actions';

const defaultState = null;

export const replyAim = (state = defaultState, { type, payload }) => {
  switch(type) {
    case SET_REPLY_AIM:
      return payload;
  }

  return state;
}