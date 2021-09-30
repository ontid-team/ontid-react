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
  messageList: ChatMessage[];
  dialogUser: Dialog['user'] | null;
  dialogId: Dialog['id'] | null;
  numberOfUnread: number;
}

interface ISetChat {
  type: typeof SET_CHAT;
  payload: {
    chats: Chat[];
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

interface ISetMessageReceive {
  type: typeof SET_MESSAGE_RECEIVE;
  payload: {
    chat: Chat;
  };
}

interface ISetMessageSend {
  type: typeof SET_MESSAGE_SEND;
  payload: Pick<ChatMessage, 'message' | 'userId'>;
}

interface ISetDialogId {
  type: typeof SET_DIALOG_ID;
  payload: {
    id: number | null;
  };
}

interface ISetDialogUser {
  type: typeof SET_DIALOG_USER;
  payload: {
    user: Dialog['user'] | null;
  };
}

interface ISetALLMessage {
  type: typeof SET_ALL_MESSAGE;
  payload: {
    messages: ChatMessage[];
  };
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
