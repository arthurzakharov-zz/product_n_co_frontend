import { combineReducers } from 'redux';

import productReducer from './product/product.reducer';
import filterReducer from './filter/filter.reducer';

export default combineReducers({
  product: productReducer,
  filter: filterReducer,
});
