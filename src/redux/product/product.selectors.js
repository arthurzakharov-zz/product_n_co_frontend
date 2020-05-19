import { createSelector } from 'reselect';

const products = (state) => state.product;

export const selectProducts = createSelector([products], (p) => {
  return p.products;
});
