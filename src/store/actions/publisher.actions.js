// * Helpers
import { getRequest } from 'utils/helpers';

export const SET_PUBLISHER = 'SET_PUBLISHER';

export const setPublisher = publisher => ({
  type: SET_PUBLISHER,
  payload: publisher
});

export const getPublisher = () => async dispatch => {
  const { status, data } = await getRequest('/publishers');

  if (status === 200)
    dispatch(setPublisher(data));
}