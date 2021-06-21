import userReducer from './user.reducer';
import filterPublicationsReducer from './filterPublications.reducer';
import { combineReducers } from 'redux';

export default combineReducers({
    userReducer: userReducer,
    filterPublicationsReducer,

});