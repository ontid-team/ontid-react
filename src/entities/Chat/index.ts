export type Message = {
  senderId: number;
  receiverId: number;
  text: string;
  isRead: boolean;
  createdAt: Date | string;
};

export type ChatUser = Message & {
  userId: UserId;
  online: boolean;
};

export type FullChat = {
  users: ChatUser[];
  numberOfUnread: number;
};

export enum ChatEvent {
  CHAT = 'chat',
  USER_CONNECTED = 'user:connected',
  USER_DISCONNECTED = 'user:disconnected',
  MESSAGE_NUMBER_OF_UNREAD = 'message:numberOfUnread',
  MESSAGE_RECEIVE = 'message:receive',
  MESSAGE_SEND = 'message:send',
  DIALOG = 'dialog',
}
