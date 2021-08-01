import {
  SET_USER,
  SET_NUMBER_OF_UNREAD,
  SET_CONNECTED_USER,
  SET_MESSAGE_SEND,
} from './Chat.constant';
import { IChatState, ChatActionsTypes } from './Chat.type';

const initialState: IChatState = {
  users: [],
  numberOfUnread: 0,
  messages: [],
};

export default function chatReducer(
  state = initialState,
  action: ChatActionsTypes,
): IChatState {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        users: action.payload.users,
      };
    case SET_NUMBER_OF_UNREAD:
      return {
        ...state,
        numberOfUnread: action.payload.numberOfUnread,
      };
    case SET_CONNECTED_USER: {
      const { userId, connected } = action.payload;

      const users = state.users.map((user) => ({
        ...user,
        ...(user.userId === userId && { online: connected }),
      }));

      return {
        ...state,
        users,
      };
    }
    case SET_MESSAGE_SEND: {
      const { message } = action.payload;
      let index = null;

      const users = state.users.filter((item, i) => {
        if (item.userId === message.receiverId) {
          index = i;
        }
        return item.userId !== message.receiverId;
      });

      return {
        ...state,
        ...(index !== null && {
          users: [{ ...state.users[index], ...message }, ...users],
        }),
      };
    }
    default:
      return state;
  }
}
