import { useDispatch } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { ENV_DEVELOPMENT } from '@shared/utils';

import { rootReducer } from './Root.reducer';
import { rootSagas } from './Root.saga';

const sagaMiddleware = createSagaMiddleware();

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const getMiddleware = () => {
  return applyMiddleware(sagaMiddleware);
};

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type RootState = ReturnType<typeof rootReducer>;

const getStore = () => {
  if (process.env.NODE_ENV === ENV_DEVELOPMENT) {
    return createStore(
      rootReducer,
      undefined,
      compose(getMiddleware(), composeEnhancers()),
    );
  }
  return createStore(rootReducer, getMiddleware());
};

const store = getStore();
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

sagaMiddleware.run(rootSagas);

export default store;
