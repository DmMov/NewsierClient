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
  const response = await getRequest(`/comments/by-publication/${publicationId}`);

  if (response.status == 200)
    dispatch(setComments(response.data));
}

export const deleteComment = (commentId, publicationId) => async dispatch => {
  const response = await deleteRequest(`/comments/${commentId}`);

  if (response.status == 204)
    dispatch(getComments(publicationId));
}