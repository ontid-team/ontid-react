import { Chat, ChatMessage, Dialog } from '@entities/Chat';

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
import { ChatActionsTypes } from './Chat.type';

export function setChat(chats: Chat[]): ChatActionsTypes {
  return {
    type: SET_CHAT,
    payload: {
      chats,
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

export function setDialogUser(user: Dialog['user'] | null): ChatActionsTypes {
  return {
    type: SET_DIALOG_USER,
    payload: {
      user,
    },
  };
}

export function setAllMessage(messages: ChatMessage[]): ChatActionsTypes {
  return {
    type: SET_ALL_MESSAGE,
    payload: {
      messages,
    },
  };
}
