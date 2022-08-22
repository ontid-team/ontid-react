import { ALERT_CLEAR, ALERT_ERROR, ALERT_SUCCESS } from './Alert.constant';
import { AlertActionsTypes, AlertState } from './Alert.type';

const initialState: AlertState = {
  message: '',
  type: null,
};

export default function alertReducer(
  state = initialState,
  action: AlertActionsTypes,
): AlertState {
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
