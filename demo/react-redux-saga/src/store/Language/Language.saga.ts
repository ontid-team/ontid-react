import { ForkEffect, call, fork, put, takeLatest } from 'redux-saga/effects';

import { FullLanguage } from '@entities/Language';
import { LanguageHttp } from '@services/http';

import {
  getListLanguageFailure,
  getListLanguageSuccess,
} from './Language.action';
import { GET_LIST_LANGUAGE_REQUEST } from './Language.constant';

function* workerGetListLanguage() {
  try {
    const res: DataResponse<FullLanguage[]> = yield call(LanguageHttp.getList);

    yield put(getListLanguageSuccess(res));
  } catch {
    yield put(getListLanguageFailure());
  }
}

function* watchGetListLanguage() {
  yield takeLatest(GET_LIST_LANGUAGE_REQUEST, workerGetListLanguage);
}

export const languageWatchers: ForkEffect[] = [fork(watchGetListLanguage)];
