import { ALERT_CLEAR, ALERT_ERROR, ALERT_SUCCESS } from './Alert.constant';
import { IAlertState, AlertActionsTypes } from './Alert.type';

const initialState: IAlertState = {
  message: '',
  type: null,
};

export default function alertReducer(
  state = initialState,
  action: AlertActionsTypes,
): IAlertState {
  switch (action.type) {
    case ALERT_SUCCESS:
      return {
        type: 'success',
        message: action.payload.message,
      };
    case ALERT_ERROR:
      return {
        type: 'error',
        message: action.payload.message,
      };
    case ALERT_CLEAR:
      return {
        message: '',
        type: null,
      };
    default:
      return state;
  }
}
