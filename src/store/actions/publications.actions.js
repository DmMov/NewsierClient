// * Helpers
import {
  getRequest,
  deleteRequest
} from 'utils/helpers';

export const SET_PUBLICATIONS = 'SET_PUBLICATIONS';

export const setPublications = publications => ({
  type: SET_PUBLICATIONS,
  payload: publications
});

export const getPublications = url => async dispatch => {
  const { status, data } = await getRequest(`${url}`);

  if (status === 200)
    dispatch(setPublications(data));
}

export const deletePublication = publicationId => async dispatch => {
  const { status } = await deleteRequest(`/publications/${publicationId}`);

  if (status === 204)
    dispatch(getPublications('/publications/by-publisher'));
}