import { Profile } from '../User';

export type ChatUser = {
  id: number;
  online?: boolean;
  profile?: Pick<Profile, 'firstName' | 'lastName'>;
};

export type ChatMessage = {
  createdAt: Date | string;
  id: number | null;
  isRead: boolean;
  message: string;
  userId: number;
};

export type Chat = Pick<ChatMessage, 'id'> & {
  message: ChatMessage;
  user: ChatUser | null;
};

export type Dialog = Id & {
  messages: ChatMessage[];
  user: ChatUser;
};

export type FullChat = {
  chats: Chat[];
  numberOfUnread: number;
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export enum chatEvent {
  CHAT = 'chat',
  DIALOG = 'dialog',
  MESSAGE_NUMBER_OF_UNREAD = 'message:numberOfUnread',
  MESSAGE_RECEIVE = 'message:receive',
  MESSAGE_SEND = 'message:send',
  USER_CONNECTED = 'user:connected',
  USER_DISCONNECTED = 'user:disconnected',
}
