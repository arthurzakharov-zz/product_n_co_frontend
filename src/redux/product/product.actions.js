import { ProductActionTypes } from './product.types';
import { HTTPS } from '../../axios';

export const fetchProductsStart = () => ({
  type: ProductActionTypes.FETCH_PRODUCTS_START,
});

export const fetchProductsSuccess = (products) => ({
  type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (errorMessage) => ({
  type: ProductActionTypes.FETCH_PRODUCTS_FAILURE,
  payload: errorMessage,
});

export const fetchProductsStartAsync = () => {
  return async (dispatch) => {
    dispatch(fetchProductsStart());
    try {
      const { status, data } = await HTTPS.get('/product');
      if (status === 200) {
        dispatch(fetchProductsSuccess(data.payload));
      } else {
        dispatch(fetchProductsFailure(data.message));
      }
    } catch (e) {
      dispatch(fetchProductsFailure(e.message));
    }
  };
};
