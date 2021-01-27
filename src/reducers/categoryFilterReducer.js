import { CHANGE_FILTER } from '../types/bookTypes';

const initialState = {
  filter: 'All',
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      if (action.payload === 'All') {
        return {
          ...state,
          filter: '',
        };
      }
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return {
        ...state,
        filter: '',
      };
  }
};

export default filterReducer;
