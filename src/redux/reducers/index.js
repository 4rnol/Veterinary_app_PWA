import appReducer from './app.reducer';
import { combineReducers } from 'redux';

export default combineReducers({
    app: appReducer,
});