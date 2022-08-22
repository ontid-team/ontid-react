import {
  SET_CHAT,
  SET_CONNECTED_USER,
  SET_COUNT_OF_UNREAD,
  SET_DIALOG,
  SET_DIALOG_ID,
  SET_MESSAGE_RECEIVE,
  SET_MESSAGE_SEND,
} from './Chat.constant';
import { ChatActionsTypes, ChatState } from './Chat.type';

const initialState: ChatState = {
  chatList: [],
  countOfUnread: 0,
  dialogId: null,
  dialog: null,
  loaded: false,
  loading: false,
};

export default function chatReducer(
  state = initialState,
  action: ChatActionsTypes,
): ChatState {
  switch (action.type) {
    case SET_CHAT: {
      return {
        ...state,
        chatList: action.payload.chats,
        loading: false,
        loaded: true,
      };
    }

    case SET_COUNT_OF_UNREAD: {
      return {
        ...state,
        chatList: state.chatList.map((item) => ({
          ...item,
          ...(item.id === state?.dialogId && {
            message: { ...item.message, isRead: true },
          }),
        })),
        countOfUnread: action.payload.countOfUnread,
      };
    }

    case SET_CONNECTED_USER: {
      const { userId, connected: online } = action.payload;

      return {
        ...state,
        chatList: state.chatList.map((item) => ({
          ...item,
          ...(item?.user?.id === userId && {
            user: { ...item.user, online },
          }),
        })),
        ...(state?.dialog?.user?.id === userId && {
          dialog: { ...state.dialog, user: { ...state.dialog.user, online } },
        }),
      };
    }

    case SET_MESSAGE_RECEIVE: {
      const { chat } = action.payload;

      return {
        ...state,
        chatList: [
          chat,
          ...state.chatList.filter((item) => item.id !== chat.id),
        ],
        ...(state?.dialog?.id === chat.id && {
          dialog: {
            ...state.dialog,
            messages: [
              ...state.dialog.messages.map((item) => ({
                ...item,
                isRead: true,
              })),
              chat.message,
            ],
          },
        }),
      };
    }

    case SET_MESSAGE_SEND: {
      const { dialogId, chatList, dialog } = state;

      const message = {
        id: null,
        message: action.payload.message,
        userId: action.payload.userId,
        isRead: false,
        createdAt: new Date(),
      };

      return {
        ...state,
        ...(dialog && {
          chatList: [
            {
              id: dialogId,
              user: dialog.user,
              message,
            },
            ...chatList.filter((item) => item.id !== dialogId),
          ],
          dialog: {
            ...dialog,
            messages: [...dialog.messages, message],
          },
        }),
      };
    }

    case SET_DIALOG_ID: {
      return {
        ...state,
        dialogId: action.payload.id,
        dialog: null,
      };
    }

    case SET_DIALOG: {
      return {
        ...state,
        dialog: action.payload,
      };
    }

    default:
      return state;
  }
}
