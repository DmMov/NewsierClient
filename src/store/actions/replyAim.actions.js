// * Helpers
import { getRequest } from 'utils/helpers';

export const SET_REPLY_AIM = 'SET_REPLY_AIM';

export const setReplyAim = aim => ({
  type: SET_REPLY_AIM,
  payload: aim
});

export const replyToComment = commentId => async dispatch => {
  const response = await getRequest(`/comments/${commentId}`);

  if (response.status == 200)
    dispatch(setReplyAim(response.data));
}