import { Dispatch } from 'redux';
import { Socket } from 'socket.io-client';

import { FullChat, chatEvent, ChatMessage, Dialog, Chat } from '@entities/Chat';
import {
  setChat,
  setNumberOfUnread,
  setConnectedUser,
  setMessageReceive,
  setMessageSend,
  setAllMessage,
  setDialogUser,
} from '@store/Chat';

export const initChatSubscribe = (params: {
  dispatch: Dispatch;
  socket: Socket;
}) => {
  const { socket, dispatch } = params;

  socket.on(chatEvent.CHAT, (data: FullChat) => {
    dispatch(setChat(data.chats));
    dispatch(setNumberOfUnread(data.numberOfUnread));
  });

  socket.on(chatEvent.USER_CONNECTED, (data: { userId: number }) => {
    dispatch(setConnectedUser(data.userId, true));
  });

  socket.on(chatEvent.USER_DISCONNECTED, (data: { userId: number }) => {
    dispatch(setConnectedUser(data.userId, false));
  });

  socket.on(
    chatEvent.MESSAGE_NUMBER_OF_UNREAD,
    (data: Pick<FullChat, 'numberOfUnread'>) => {
      dispatch(setNumberOfUnread(data.numberOfUnread));
    },
  );

  socket.on(chatEvent.MESSAGE_RECEIVE, (data: Chat) => {
    dispatch(setMessageReceive(data));
  });

  socket.on(
    chatEvent.DIALOG,
    (data: { messages: ChatMessage[]; user: Dialog['user'] }) => {
      dispatch(setAllMessage(data.messages));
      dispatch(setDialogUser(data.user));
    },
  );
};

export const getDialog = (params: { chatId: number; socket: Socket }) => {
  const { chatId, socket } = params;

  socket.emit(chatEvent.DIALOG, { chatId });
};

export const sendMessage = (params: {
  dispatch: Dispatch;
  message: Pick<ChatMessage, 'message' | 'userId'> & { chatId: number };
  socket: Socket;
}) => {
  const {
    socket,
    message: { chatId, message, userId },
    dispatch,
  } = params;

  socket.emit(chatEvent.MESSAGE_SEND, {
    chatId,
    message,
  });

  dispatch(setMessageSend({ message, userId }));
};
