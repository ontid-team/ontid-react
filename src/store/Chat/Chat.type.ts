import { ChatUser, Message } from '@entities/Chat';

import {
  SET_USER,
  SET_NUMBER_OF_UNREAD,
  SET_CONNECTED_USER,
  SET_MESSAGE_SEND,
} from './Chat.constant';

export interface IChatState {
  users: ChatUser[];
  numberOfUnread: number;
  messages: Message[];
}

interface ISetUser {
  type: typeof SET_USER;
  payload: {
    users: ChatUser[];
  };
}

interface ISetNumberOfUnread {
  type: typeof SET_NUMBER_OF_UNREAD;
  payload: {
    numberOfUnread: number;
  };
}

interface ISetConnectedUser {
  type: typeof SET_CONNECTED_USER;
  payload: {
    userId: number;
    connected: boolean;
  };
}

interface ISetMessageSend {
  type: typeof SET_MESSAGE_SEND;
  payload: {
    message: Message;
  };
}

export type ChatActionsTypes =
  | ISetUser
  | ISetNumberOfUnread
  | ISetConnectedUser
  | ISetMessageSend;
