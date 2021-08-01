import { FullLanguage } from '@entities/Language';

import {
  GET_LIST_LANGUAGE_REQUEST,
  GET_LIST_LANGUAGE_SUCCESS,
  GET_LIST_LANGUAGE_FAILURE,
} from './Language.constant';
import { LanguageActionsTypes } from './Language.type';

export function getListLanguageRequest(): LanguageActionsTypes {
  return {
    type: GET_LIST_LANGUAGE_REQUEST,
  };
}

export function getListLanguageSuccess(
  languages: FullLanguage[],
): LanguageActionsTypes {
  return {
    type: GET_LIST_LANGUAGE_SUCCESS,
    payload: {
      languages,
    },
  };
}

export function getListLanguageFailure(): LanguageActionsTypes {
  return {
    type: GET_LIST_LANGUAGE_FAILURE,
  };
}
