import type { Chat, ChatMessage, Dialog } from '@entities/index';

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
import {
  ChatActionsTypes,
  CreateMessageRequest,
  GetDialogRequest,
} from './Chat.type';

export function setChat(chats: Chat[]): ChatActionsTypes {
  return {
    type: SET_CHAT,
    payload: {
      chats,
    },
  };
}

export function setCountOfUnread(countOfUnread: number): ChatActionsTypes {
  return {
    type: SET_COUNT_OF_UNREAD,
    payload: {
      countOfUnread,
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

export function setMessageReceive(chat: Chat): ChatActionsTypes {
  return {
    type: SET_MESSAGE_RECEIVE,
    payload: {
      chat,
    },
  };
}

export function setMessageSend(
  payload: Pick<ChatMessage, 'message' | 'userId'>,
): ChatActionsTypes {
  return {
    type: SET_MESSAGE_SEND,
    payload,
  };
}

export function setDialogId(id: number | null): ChatActionsTypes {
  return {
    type: SET_DIALOG_ID,
    payload: {
      id,
    },
  };
}

export function setDialog(payload: Dialog | null): ChatActionsTypes {
  return {
    type: SET_DIALOG,
    payload,
  };
}

export function getDialogRequest(
  payload: GetDialogRequest['payload'],
): ChatActionsTypes {
  return {
    type: GET_DIALOG_REQUEST,
    payload,
  };
}

export function getDialogSuccess(): ChatActionsTypes {
  return {
    type: GET_DIALOG_SUCCESS,
  };
}

export function getDialogFailure(): ChatActionsTypes {
  return {
    type: GET_DIALOG_FAILURE,
  };
}

export function createMessageRequest(
  payload: CreateMessageRequest['payload'],
): ChatActionsTypes {
  return {
    type: CREATE_MESSAGE_REQUEST,
    payload,
  };
}

export function createMessageSuccess(): ChatActionsTypes {
  return {
    type: CREATE_MESSAGE_SUCCESS,
  };
}

export function createMessageFailure(): ChatActionsTypes {
  return {
    type: CREATE_MESSAGE_FAILURE,
  };
}
