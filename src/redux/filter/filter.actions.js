import { FilterActionTypes } from './filter.types';

export const setFilterSearch = (search) => ({
  type: FilterActionTypes.SET_FILTER_SEARCH,
  payload: search,
});
