import { FullLanguage } from '@entities/Language';

import {
  GET_LIST_LANGUAGE_REQUEST,
  GET_LIST_LANGUAGE_SUCCESS,
  GET_LIST_LANGUAGE_FAILURE,
} from './Language.constant';

export interface ILanguageState {
  languageList: FullLanguage[];
  loaded: boolean;
  loading: boolean;
}

interface IGetListLanguageRequest {
  type: typeof GET_LIST_LANGUAGE_REQUEST;
}

interface IGetListLanguageSuccess {
  payload: DataResponse<FullLanguage[]>;
  type: typeof GET_LIST_LANGUAGE_SUCCESS;
}

interface IGetListLanguageFailure {
  type: typeof GET_LIST_LANGUAGE_FAILURE;
}

export type LanguageActionsTypes =
  | IGetListLanguageRequest
  | IGetListLanguageSuccess
  | IGetListLanguageFailure;
