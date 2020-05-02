import { createSelector } from "reselect";

export const selectPublications = createSelector(
  state => state.publications,
  publications => publications
);