import { ALERT_CLEAR, ALERT_SUCCESS, ALERT_ERROR } from './Alert.constant';
import { AlertActionsTypes } from './Alert.type';

export function alertSuccess(message: string): AlertActionsTypes {
  return {
    type: ALERT_SUCCESS,
    payload: {
      message,
    },
  };
}

export function alertError(message: string): AlertActionsTypes {
  return {
    type: ALERT_ERROR,
    payload: {
      message,
    },
  };
}

export function alertClear(): AlertActionsTypes {
  return {
    type: ALERT_CLEAR,
  };
}
