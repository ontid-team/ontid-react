import { ChatUser, Message } from '@entities/Chat';

import {
  SET_USER,
  SET_NUMBER_OF_UNREAD,
  SET_CONNECTED_USER,
  SET_MESSAGE_SEND,
} from './Chat.constant';
import { ChatActionsTypes } from './Chat.type';

export function setUser(users: ChatUser[]): ChatActionsTypes {
  return {
    type: SET_USER,
    payload: {
      users,
    },
  };
}

export function setNumberOfUnread(numberOfUnread: number): ChatActionsTypes {
  return {
    type: SET_NUMBER_OF_UNREAD,
    payload: {
      numberOfUnread,
    },
  };
}

export function setConnectedUser(
  userId: number,
  connected: boolean,
): ChatActionsTypes {
  return {
    type: SET_CONNECTED_USER,
    payload: {
      userId,
      connected,
    },
  };
}

export function setMessageSend(message: Message): ChatActionsTypes {
  return {
    type: SET_MESSAGE_SEND,
    payload: {
      message,
    },
  };
}
