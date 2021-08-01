import { Dispatch } from 'redux';
import { Socket } from 'socket.io-client';

import { FullChat, ChatEvent, ChatUser, Message } from '@entities/Chat';
import {
  setUser,
  setNumberOfUnread,
  setConnectedUser,
  setMessageSend,
} from '@store/Chat';

export const initChatSubscribe = (params: {
  socket: Socket;
  dispatch: Dispatch;
}) => {
  const { socket, dispatch } = params;

  socket.on(ChatEvent.CHAT, (data: FullChat) => {
    dispatch(setUser(data.users));
    dispatch(setNumberOfUnread(data.numberOfUnread));
  });

  socket.on(ChatEvent.USER_CONNECTED, (data: Pick<ChatUser, 'userId'>) => {
    dispatch(setConnectedUser(data.userId, true));
  });

  socket.on(ChatEvent.USER_DISCONNECTED, (data: Pick<ChatUser, 'userId'>) => {
    dispatch(setConnectedUser(data.userId, false));
  });
};

export const sendMessage = (params: {
  message: Message;
  socket: Socket;
  dispatch: Dispatch;
}) => {
  const { socket, message, dispatch } = params;

  socket.emit(ChatEvent.MESSAGE_SEND, {
    receiverId: message.receiverId,
    text: message.text,
  });

  dispatch(setMessageSend(message));
};
