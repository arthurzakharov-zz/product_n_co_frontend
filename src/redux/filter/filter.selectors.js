import { createSelector } from 'reselect';

const filter = (state) => state.filter;

export const selectFilterSearch = createSelector(
  [filter],
  (filter) => filter.search
);
