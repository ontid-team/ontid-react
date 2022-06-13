import { ChatMessage, Chat, Dialog } from '@entities/Chat';

import {
  SET_CHAT,
  SET_NUMBER_OF_UNREAD,
  SET_CONNECTED_USER,
  SET_MESSAGE_RECEIVE,
  SET_MESSAGE_SEND,
  SET_DIALOG_ID,
  SET_DIALOG_USER,
  SET_ALL_MESSAGE,
} from './Chat.constant';

export interface IChatState {
  chatList: Chat[];
  dialogId: Dialog['id'] | null;
  dialogUser: Dialog['user'] | null;
  messageList: ChatMessage[];
  numberOfUnread: number;
}

interface ISetChat {
  payload: {
    chats: Chat[];
  };
  type: typeof SET_CHAT;
}

interface ISetNumberOfUnread {
  payload: {
    numberOfUnread: number;
  };
  type: typeof SET_NUMBER_OF_UNREAD;
}

interface ISetConnectedUser {
  payload: {
    connected: boolean;
    userId: number;
  };
  type: typeof SET_CONNECTED_USER;
}

interface ISetMessageReceive {
  payload: {
    chat: Chat;
  };
  type: typeof SET_MESSAGE_RECEIVE;
}

interface ISetMessageSend {
  payload: Pick<ChatMessage, 'message' | 'userId'>;
  type: typeof SET_MESSAGE_SEND;
}

interface ISetDialogId {
  payload: {
    id: number | null;
  };
  type: typeof SET_DIALOG_ID;
}

interface ISetDialogUser {
  payload: {
    user: Dialog['user'] | null;
  };
  type: typeof SET_DIALOG_USER;
}

interface ISetALLMessage {
  payload: {
    messages: ChatMessage[];
  };
  type: typeof SET_ALL_MESSAGE;
}

export type ChatActionsTypes =
  | ISetChat
  | ISetNumberOfUnread
  | ISetConnectedUser
  | ISetMessageReceive
  | ISetMessageSend
  | ISetDialogId
  | ISetDialogUser
  | ISetALLMessage;
