import {
  GET_LIST_LANGUAGE_REQUEST,
  GET_LIST_LANGUAGE_SUCCESS,
  GET_LIST_LANGUAGE_FAILURE,
} from './Language.constant';
import { ILanguageState, LanguageActionsTypes } from './Language.type';

const initialState: ILanguageState = {
  languageList: [],
  loading: false,
  loaded: false,
};

export default function languageReducer(
  state = initialState,
  action: LanguageActionsTypes,
): ILanguageState {
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
