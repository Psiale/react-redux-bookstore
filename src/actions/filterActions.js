import { CHANGE_FILTER } from '../types/bookTypes';

const changeFilter = category => {
  // eslint-disable-next-line no-console
  console.log('changeFilter');
  return {
    type: CHANGE_FILTER,
    payload: category,
  };
};

export default changeFilter;
