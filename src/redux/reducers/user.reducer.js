import {CHANGE_USER,CLEAN_ALL_REDUCERS} from '../actions/actions';

const initState={
    user:null,
};

function userReducer(state = initState,action){
    switch (action.type) {
        case CHANGE_USER: {
            return {
                ...state,
                user:action.user,
            };
        }
        case CLEAN_ALL_REDUCERS:{
            return initState;            
        }
        default:
            return state;
    }
}

export default userReducer;