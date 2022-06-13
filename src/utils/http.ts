import Axios, { AxiosError } from 'axios';

import { CookieStorage } from '@services/storage';

import { API_URL } from './constants';
import { LINK_LOGIN } from './link';
import { HttpExceptionType, HttpStatus } from './utility-types';

const defaultConfig = {
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
};
const refreshTokenUrl = '/api/auth/refresh-token';

const http = Axios.create(defaultConfig);
const refreshTokenService = Axios.create(defaultConfig);

let refreshTokenPromise: Promise<any>;
let isRefreshFinished = true;

http.interceptors.response.use(
  undefined,
  (error: AxiosError<DataResponse<string>>) => {
    if (
      error.response?.status === HttpStatus.Unauthorized &&
      error.response?.data.code === HttpExceptionType.TOKEN_EXPIRED
    ) {
      if (CookieStorage.parseToken()) {
        const originalRequest = error.config;

        if (isRefreshFinished) {
          isRefreshFinished = false;

          refreshTokenPromise = refreshTokenService({
            method: 'POST',
            url: refreshTokenUrl,
          })
            .then(() => {
              isRefreshFinished = true;

              return http(originalRequest);
            })
            .catch(() => {
              isRefreshFinished = true;
              window.location.href = LINK_LOGIN;
            });

          return refreshTokenPromise;
        }

        return refreshTokenPromise.then(() => {
          return http(originalRequest);
        });
      }
    } else if (
      error.response?.status === HttpStatus.Unauthorized &&
      (error.response?.data.code === HttpExceptionType.REFRESH_TOKEN_EXPIRED ||
        error.response?.data.code === HttpExceptionType.REFRESH_TOKEN_VERIFY)
    ) {
      window.location.href = LINK_LOGIN;

      return Promise.reject();
    }

    if (
      error.response?.status === HttpStatus.UnprocessableEntity &&
      error.response?.data?.errors
    ) {
      let message = '';

      for (const prop in error.response.data.errors) {
        if (
          Object.prototype.hasOwnProperty.call(error.response.data.errors, prop)
        ) {
          message += `${prop}: ${error.response.data.errors[prop]}. `;
        }
      }

      return Promise.reject(message);
    }

    return Promise.reject(error.response?.data.message || error.toString());
  },
);

export default http;
