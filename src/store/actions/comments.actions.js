// * Helpers
import {
  getRequest,
  deleteRequest
} from 'utils/helpers';

export const SET_COMMENTS = 'SET_COMMENTS';

export const setComments = comments => ({
  type: SET_COMMENTS,
  payload: comments
});

export const getComments = publicationId => async dispatch => {
  const { status, data } = await getRequest(`/comments/by-publication/${publicationId}`);

  if (status === 200)
    dispatch(setComments(data));
}

export const deleteComment = (commentId, publicationId) => async dispatch => {
  const { status } = await deleteRequest(`/comments/${commentId}`);

  if (status === 204)
    dispatch(getComments(publicationId));
}