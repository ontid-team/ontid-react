import { all } from 'redux-saga/effects';

import { languageWatchers } from './Language';

export function* rootSagas() {
  const watchers = [...languageWatchers];

  yield all(watchers);
}
