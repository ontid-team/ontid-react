import { FullLanguage } from '@entities/Language';

import {
  GET_LIST_LANGUAGE_FAILURE,
  GET_LIST_LANGUAGE_REQUEST,
  GET_LIST_LANGUAGE_SUCCESS,
} from './Language.constant';

export type LanguageState = {
  languageList: FullLanguage[];
  loaded: boolean;
  loading: boolean;
};

type GetListLanguageRequest = {
  type: typeof GET_LIST_LANGUAGE_REQUEST;
};

type GetListLanguageSuccess = {
  payload: DataResponse<FullLanguage[]>;
  type: typeof GET_LIST_LANGUAGE_SUCCESS;
};

type GetListLanguageFailure = {
  type: typeof GET_LIST_LANGUAGE_FAILURE;
};

export type LanguageActionsTypes =
  | GetListLanguageRequest
  | GetListLanguageSuccess
  | GetListLanguageFailure;
