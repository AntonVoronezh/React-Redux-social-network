import { createStore, applyMiddleware } from 'redux';
// @ts-ignore
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducers/root';

export const store = () => createStore(rootReducer, applyMiddleware(thunk, logger));

// export type RootState = typeof store.getState;
// export type AppDispatch = typeof store.dispatch;
