import { createSelector } from "reselect";

const getPending1 = state => state.link.pending_;
const getPenging2 = state => state.link._pending;
export const getRefreshing = createSelector(
  getPending1,
  getPenging2,
  (pending1, peding2) => pending1 || peding2
);
