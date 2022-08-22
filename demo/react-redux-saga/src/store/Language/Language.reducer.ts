import {
  GET_LIST_LANGUAGE_FAILURE,
  GET_LIST_LANGUAGE_REQUEST,
  GET_LIST_LANGUAGE_SUCCESS,
} from './Language.constant';
import { LanguageActionsTypes, LanguageState } from './Language.type';

const initialState: LanguageState = {
  languageList: [],
  loading: false,
  loaded: false,
};

export default function languageReducer(
  state = initialState,
  action: LanguageActionsTypes,
): LanguageState {
  switch (action.type) {
    case GET_LIST_LANGUAGE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_LIST_LANGUAGE_SUCCESS: {
      return {
        ...state,
        languageList: action.payload.data,
        loaded: true,
      };
    }
    case GET_LIST_LANGUAGE_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
