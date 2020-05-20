import { FilterActionTypes } from './filter.types';

const INITIAL_STATE = {
  search: '',
};

const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FilterActionTypes.SET_FILTER_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
