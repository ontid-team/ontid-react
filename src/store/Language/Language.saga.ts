import { put, takeLatest, fork, call, ForkEffect } from 'redux-saga/effects';

import { FullLanguage } from '@entities/Language';
import { LanguageHttp } from '@shared/services/http';

import {
  getListLanguageSuccess,
  getListLanguageFailure,
} from './Language.action';
import { GET_LIST_LANGUAGE_REQUEST } from './Language.constant';

function* workerGetListLanguage() {
  try {
    const languages: FullLanguage[] = yield call(LanguageHttp.getList);

    yield put(getListLanguageSuccess(languages));
  } catch (error) {
    yield put(getListLanguageFailure());
  }
}

function* watchGetListLanguage() {
  yield takeLatest(GET_LIST_LANGUAGE_REQUEST, workerGetListLanguage);
}

export const languageWatchers: ForkEffect[] = [fork(watchGetListLanguage)];
