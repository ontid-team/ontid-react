import { ALERT_SUCCESS, ALERT_ERROR, ALERT_CLEAR } from './Alert.constant';

export interface IAlertState {
  message: string;
  type: 'success' | 'error' | null;
}

interface IAlertSuccess {
  payload: {
    message: string;
  };
  type: typeof ALERT_SUCCESS;
}

interface IAlertError {
  payload: {
    message: string;
  };
  type: typeof ALERT_ERROR;
}

interface IAlertClear {
  type: typeof ALERT_CLEAR;
}

export type AlertActionsTypes = IAlertSuccess | IAlertError | IAlertClear;
