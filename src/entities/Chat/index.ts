import { Profile } from '../User';

export type ChatUser = {
  id: number;
  online?: boolean;
  profile?: Pick<Profile, 'firstName' | 'lastName'>;
};

export type ChatMessage = {
  id: number | null;
  isRead: boolean;
  userId: number;
  message: string;
  createdAt: Date | string;
};

export type Chat = Pick<ChatMessage, 'id'> & {
  user: ChatUser | null;
  message: ChatMessage;
};

export type Dialog = Id & {
  user: ChatUser;
  messages: ChatMessage[];
};

export type FullChat = {
  chats: Chat[];
  numberOfUnread: number;
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export enum chatEvent {
  CHAT = 'chat',
  USER_CONNECTED = 'user:connected',
  USER_DISCONNECTED = 'user:disconnected',
  MESSAGE_NUMBER_OF_UNREAD = 'message:numberOfUnread',
  MESSAGE_RECEIVE = 'message:receive',
  MESSAGE_SEND = 'message:send',
  DIALOG = 'dialog',
}
