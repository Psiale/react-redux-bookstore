import { CHANGE_FILTER } from '../types/bookTypes';

const changeFilter = category => ({
  type: CHANGE_FILTER,
  payload: category,
});

export default changeFilter;
