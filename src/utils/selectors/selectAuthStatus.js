import { createSelector } from "reselect";

// * Utils
import { isEmpty } from 'utils/helpers';

export const selectAuthStatus = createSelector(
  state => state.publisher,
  publisher => !!publisher && !isEmpty(publisher)
);