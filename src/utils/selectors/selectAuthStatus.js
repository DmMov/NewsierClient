import { createSelector } from "reselect";

export const selectAuthStatus = createSelector(
  state => state.publisher,
  publisher => !!publisher
);