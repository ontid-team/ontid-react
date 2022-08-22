import { all } from 'redux-saga/effects';

import { chatWatchers } from './Chat';
import { languageWatchers } from './Language';

export function* rootSagas() {
  yield all([...chatWatchers, ...languageWatchers]);
}
