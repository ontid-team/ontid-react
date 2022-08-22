import { ALERT_CLEAR, ALERT_ERROR, ALERT_SUCCESS } from './Alert.constant';

export type AlertState = {
  message: string;
  type: 'success' | 'error' | null;
};

type AlertSuccess = {
  payload: {
    message: string;
  };
  type: typeof ALERT_SUCCESS;
};

type AlertError = {
  payload: {
    message: string;
  };
  type: typeof ALERT_ERROR;
};

type AlertClear = {
  type: typeof ALERT_CLEAR;
};

export type AlertActionsTypes = AlertSuccess | AlertError | AlertClear;
