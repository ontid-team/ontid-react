import {
  SET_CHAT,
  SET_NUMBER_OF_UNREAD,
  SET_CONNECTED_USER,
  SET_MESSAGE_RECEIVE,
  SET_MESSAGE_SEND,
  SET_ALL_MESSAGE,
  SET_DIALOG_ID,
  SET_DIALOG_USER,
} from './Chat.constant';
import { IChatState, ChatActionsTypes } from './Chat.type';

const initialState: IChatState = {
  chatList: [],
  messageList: [],
  dialogId: null,
  dialogUser: null,
  numberOfUnread: 0,
};

export default function chatReducer(
  state = initialState,
  action: ChatActionsTypes,
): IChatState {
  switch (action.type) {
    case SET_CHAT:
      return {
        ...state,
        chatList: action.payload.chats,
      };
    case SET_NUMBER_OF_UNREAD: {
      const { numberOfUnread } = action.payload;
      const { chatList, dialogId } = state;

      const chats = chatList.map((item) => ({
        ...item,
        ...(item.id === dialogId && { isRead: true }),
      }));

      return {
        ...state,
        chatList: chats,
        numberOfUnread,
      };
    }
    case SET_CONNECTED_USER: {
      const { userId, connected: online } = action.payload;
      const { dialogUser } = state;

      const chatList = state.chatList.map((item) => ({
        ...item,
        ...(item?.user?.id === userId && {
          user: { ...item.user, online },
        }),
      }));

      return {
        ...state,
        chatList,
        ...(dialogUser?.id === userId && {
          dialogUser: { ...dialogUser, online },
        }),
      };
    }
    case SET_MESSAGE_RECEIVE: {
      const { chat } = action.payload;
      const { messageList, chatList, dialogId } = state;

      return {
        ...state,
        chatList: [chat, ...chatList.filter((item) => item.id !== chat.id)],
        ...(dialogId === chat.id && {
          messageList: [...messageList, chat.message],
        }),
      };
    }
    case SET_MESSAGE_SEND: {
      const { message, userId } = action.payload;
      const { messageList, dialogId, dialogUser, chatList } = state;

      const data = {
        id: null,
        message,
        userId,
        isRead: true,
        createdAt: new Date(),
      };

      return {
        ...state,
        chatList: [
          {
            id: dialogId,
            user: dialogUser,
            message: data,
          },
          ...chatList.filter((item) => item.id !== dialogId),
        ],
        messageList: [...messageList, data],
      };
    }
    case SET_DIALOG_ID: {
      return {
        ...state,
        dialogId: action.payload.id || null,
        dialogUser: null,
        messageList: [],
      };
    }
    case SET_DIALOG_USER: {
      return {
        ...state,
        dialogUser: action.payload.user || null,
      };
    }
    case SET_ALL_MESSAGE:
      return {
        ...state,
        messageList: action.payload.messages || [],
      };
    default:
      return state;
  }
}
