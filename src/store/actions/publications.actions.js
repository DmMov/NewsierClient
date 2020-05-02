// * Helpers
import { getRequest } from 'utils/helpers';

export const SET_PUBLICATIONS = 'SET_PUBLICATIONS';

export const setPublications = publications => ({
  type: SET_PUBLICATIONS,
  payload: publications
});

export const getPublications = url => async dispatch => {
  const response = await getRequest(`${url}`);

  if (response.status == 200)
    dispatch(setPublications(response.data));
}