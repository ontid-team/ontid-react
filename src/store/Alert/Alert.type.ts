import { ALERT_SUCCESS, ALERT_ERROR, ALERT_CLEAR } from './Alert.constant';

export interface IAlertState {
  message: string;
  type: 'success' | 'error' | null;
}

interface IAlertSuccess {
  type: typeof ALERT_SUCCESS;
  payload: {
    message: string;
  };
}

interface IAlertError {
  type: typeof ALERT_ERROR;
  payload: {
    message: string;
  };
}

interface IAlertClear {
  type: typeof ALERT_CLEAR;
}

export type AlertActionsTypes = IAlertSuccess | IAlertError | IAlertClear;
