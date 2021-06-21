import * as actions from './actions';

export const changeUser = (user) => {
  return { type: actions.CHANGE_USER, user };
};
export const cleanAllReducers = () => {
  return { type: actions.CLEAN_ALL_REDUCERS };
};
export const filterPublications = (text) =>{
  return { type: actions.FILTER_PUBLICATIONS,text };
};