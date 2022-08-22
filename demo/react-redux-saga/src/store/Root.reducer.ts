import { combineReducers } from 'redux';

import { AlertReducer } from './Alert';
import { ChatReducer } from './Chat';
import { LanguageReducer } from './Language';

export const rootReducer = combineReducers({
  alert: AlertReducer,
  chat: ChatReducer,
  language: LanguageReducer,
});
