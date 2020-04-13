import { createSelector } from "reselect";

export const selectReplyAim = createSelector(
  state => state.replyAim,
  replyAim => replyAim
);