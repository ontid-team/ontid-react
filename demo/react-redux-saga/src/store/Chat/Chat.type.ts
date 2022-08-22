import type { Socket } from 'socket.io-client';

import { Chat, ChatMessage, Dialog } from '@entities/Chat';

import {
  CREATE_MESSAGE_FAILURE,
  CREATE_MESSAGE_REQUEST,
  CREATE_MESSAGE_SUCCESS,
  GET_DIALOG_FAILURE,
  GET_DIALOG_REQUEST,
  GET_DIALOG_SUCCESS,
  SET_CHAT,
  SET_CONNECTED_USER,
  SET_COUNT_OF_UNREAD,
  SET_DIALOG,
  SET_DIALOG_ID,
  SET_MESSAGE_RECEIVE,
  SET_MESSAGE_SEND,
} from './Chat.constant';

export type ChatState = {
  chatList: Chat[];
  countOfUnread: number;
  dialog: Dialog | null;
  dialogId: Dialog['id'] | null;
  loaded: boolean;
  loading: boolean;
};

type SetChat = {
  payload: {
    chats: Chat[];
  };
  type: typeof SET_CHAT;
};

type SetCountOfUnread = {
  payload: {
    countOfUnread: number;
  };
  type: typeof SET_COUNT_OF_UNREAD;
};

type SetConnectedUser = {
  payload: {
    connected: boolean;
    userId: number;
  };
  type: typeof SET_CONNECTED_USER;
};

type SetMessageReceive = {
  payload: {
    chat: Chat;
  };
  type: typeof SET_MESSAGE_RECEIVE;
};

type SetMessageSend = {
  payload: Pick<ChatMessage, 'message' | 'userId'>;
  type: typeof SET_MESSAGE_SEND;
};

type SetDialogId = {
  payload: {
    id: number | null;
  };
  type: typeof SET_DIALOG_ID;
};

type SetDialog = {
  payload: Dialog | null;
  type: typeof SET_DIALOG;
};

export type GetDialogRequest = {
  payload: { chatId: number; socket: Socket };
  type: typeof GET_DIALOG_REQUEST;
};

type GetDialogSuccess = {
  type: typeof GET_DIALOG_SUCCESS;
};

type GetDialogFailure = {
  type: typeof GET_DIALOG_FAILURE;
};

export type CreateMessageRequest = {
  payload: {
    message: Pick<ChatMessage, 'message' | 'userId'> & {
      chatId: number;
    };
    socket: Socket;
  };
  type: typeof CREATE_MESSAGE_REQUEST;
};

type CreateMessageSuccess = {
  type: typeof CREATE_MESSAGE_SUCCESS;
};

type CreateMessageFailure = {
  type: typeof CREATE_MESSAGE_FAILURE;
};

export type ChatActionsTypes =
  | SetChat
  | SetCountOfUnread
  | SetConnectedUser
  | SetMessageReceive
  | SetMessageSend
  | SetDialogId
  | SetDialog
  | GetDialogRequest
  | GetDialogSuccess
  | GetDialogFailure
  | CreateMessageRequest
  | CreateMessageSuccess
  | CreateMessageFailure;
