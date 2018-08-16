import reducer,{initialState} from '../reducers/reducer';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(logger,thunk)
);

export default store;