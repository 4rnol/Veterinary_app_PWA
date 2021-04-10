  
import { applyMiddleware, compose, createStore } from 'redux';
import reducer from '../reducers';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // development
// const composeEnhancers = compose;

export const store = createStore(reducer, {}, composeEnhancers(applyMiddleware(thunk.withExtraArgument({}))));