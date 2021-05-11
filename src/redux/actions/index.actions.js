import * as actions from './actions';

export const changeUser =(user)=>{
    return {type:actions.CHANGE_USER,user}
};
export const cleanAllReducers = () => {
    return { type: actions.CLEAN_ALL_REDUCERS };
  };
  