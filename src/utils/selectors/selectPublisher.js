import { createSelector } from "reselect";

export const selectPublisher = createSelector(
  state => state.publisher,
  publisher => publisher
);