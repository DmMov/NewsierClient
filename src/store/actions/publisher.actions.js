// * Helpers
import { getRequest } from 'utils/helpers';

export const SET_PUBLISHER = 'SET_PUBLISHER';

export const setPublisher = publisher => ({
  type: SET_PUBLISHER,
  payload: publisher
});

export const getPublisher = () => async dispatch => {
  const response = await getRequest('/auth');

  if (response.status == 200)
    dispatch(setPublisher(response.data));
}