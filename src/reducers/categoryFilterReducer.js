import { CHANGE_FILTER } from '../types/bookTypes';

const initialState = {
  filter: 'ALL',
};

const filterReducer = (state = initialState, action) => {
// eslint-disable-next-line no-console
  console.log(`fuck this shit: ${action.payload}`);
  switch (action.type) {
    case CHANGE_FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return {
        ...state,
        filter: 'All',
      };
  }
};

export default filterReducer;
