import { FullLanguage } from '@entities/Language';

import {
  GET_LIST_LANGUAGE_REQUEST,
  GET_LIST_LANGUAGE_SUCCESS,
  GET_LIST_LANGUAGE_FAILURE,
} from './Language.constant';

export interface ILanguageState {
  languageList: FullLanguage[];
  loading: boolean;
  loaded: boolean;
}

interface IGetListLanguageRequest {
  type: typeof GET_LIST_LANGUAGE_REQUEST;
}

interface IGetListLanguageSuccess {
  type: typeof GET_LIST_LANGUAGE_SUCCESS;
  payload: DataResponse<FullLanguage[]>;
}

interface IGetListLanguageFailure {
  type: typeof GET_LIST_LANGUAGE_FAILURE;
}

export type LanguageActionsTypes =
  | IGetListLanguageRequest
  | IGetListLanguageSuccess
  | IGetListLanguageFailure;
