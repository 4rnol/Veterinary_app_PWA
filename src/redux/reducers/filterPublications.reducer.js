import {FILTER_PUBLICATIONS,CLEAN_ALL_REDUCERS} from '../actions/actions';

const initState="";

function filterPublicationsReducer(state = initState,action){
    switch (action.type) {
        case FILTER_PUBLICATIONS: {
            return action.text;
        }
        case CLEAN_ALL_REDUCERS:{
            return initState;            
        }
        default:
            return state;
    }
}

export default filterPublicationsReducer;