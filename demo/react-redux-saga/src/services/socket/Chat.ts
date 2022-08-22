import { Dispatch } from 'redux';
import { Socket } from 'socket.io-client';

import { Chat, ChatEvent, Dialog, FullChat } from '@entities/Chat';
import {
  setChat,
  setConnectedUser,
  setCountOfUnread,
  setDialog,
  setMessageReceive,
} from '@store/Chat';

export const initChatSubscribe = (params: {
  dispatch: Dispatch;
  socket: Socket;
}) => {
  const { socket, dispatch } = params;

  socket.on(ChatEvent.CHAT, (data: FullChat) => {
    dispatch(setChat(data.chats));
    dispatch(setCountOfUnread(data.countOfUnread));
  });

  socket.on(ChatEvent.USER_CONNECTED, (data: { userId: number }) => {
    dispatch(setConnectedUser(data.userId, true));
  });

  socket.on(ChatEvent.USER_DISCONNECTED, (data: { userId: number }) => {
    dispatch(setConnectedUser(data.userId, false));
  });

  socket.on(
    ChatEvent.MESSAGE_COUNT_OF_UNREAD,
    (data: Pick<FullChat, 'countOfUnread'>) => {
      dispatch(setCountOfUnread(data.countOfUnread));
    },
  );

  socket.on(ChatEvent.MESSAGE_RECEIVE, (data: Chat) => {
    dispatch(setMessageReceive(data));
  });

  socket.on(ChatEvent.DIALOG, (data: Dialog) => {
    dispatch(setDialog(data));
  });
};
