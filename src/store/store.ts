import { createStore, applyMiddleware } from 'redux';
// @ts-ignore
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducers/root';

export const storeI = () => createStore(rootReducer, applyMiddleware(thunk, logger));

