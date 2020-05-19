import { ProductActionTypes } from './product.types';

export const setProducts = (products) => ({
  type: ProductActionTypes,
  payload: products,
});
