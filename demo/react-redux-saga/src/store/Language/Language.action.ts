import { FullLanguage } from '@entities/Language';

import {
  GET_LIST_LANGUAGE_FAILURE,
  GET_LIST_LANGUAGE_REQUEST,
  GET_LIST_LANGUAGE_SUCCESS,
} from './Language.constant';
import { LanguageActionsTypes } from './Language.type';

export function getListLanguageRequest(): LanguageActionsTypes {
  return {
    type: GET_LIST_LANGUAGE_REQUEST,
  };
}

export function getListLanguageSuccess(
  payload: DataResponse<FullLanguage[]>,
): LanguageActionsTypes {
  return {
    type: GET_LIST_LANGUAGE_SUCCESS,
    payload,
  };
}

export function getListLanguageFailure(): LanguageActionsTypes {
  return {
    type: GET_LIST_LANGUAGE_FAILURE,
  };
}
