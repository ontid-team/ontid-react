import { ForkEffect, fork, put, takeLatest } from 'redux-saga/effects';

import { ChatEvent } from '@entities/index';

import {
  createMessageFailure,
  getDialogFailure,
  setMessageSend,
} from './Chat.action';
import { CREATE_MESSAGE_REQUEST, GET_DIALOG_REQUEST } from './Chat.constant';
import { CreateMessageRequest, GetDialogRequest } from './Chat.type';

function* workerGetDialog({ payload }: GetDialogRequest) {
  try {
    const { socket, chatId } = payload;

    socket.emit(ChatEvent.DIALOG, { chatId });
  } catch {
    yield put(getDialogFailure());
  }
}

function* watcherGetDialog() {
  yield takeLatest(GET_DIALOG_REQUEST, workerGetDialog);
}

function* workerCreateMessage({ payload }: CreateMessageRequest) {
  try {
    const {
      socket,
      message: { chatId, message, userId },
    } = payload;

    socket.emit(ChatEvent.MESSAGE_SEND, {
      chatId,
      message,
    });
    yield put(setMessageSend({ message, userId }));
  } catch {
    yield put(createMessageFailure());
  }
}

function* watcherCreateMessage() {
  yield takeLatest(CREATE_MESSAGE_REQUEST, workerCreateMessage);
}

export const chatWatchers: ForkEffect[] = [
  fork(watcherGetDialog),
  fork(watcherCreateMessage),
];
