import Axios, { AxiosError } from 'axios';

import { CookieStorage } from '@services/storage';

import { API_URL } from './constants';

const defaultConfig = {
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
};

const http = Axios.create(defaultConfig);
const refreshTokenService = Axios.create(defaultConfig);

let refreshTokenPromise: Promise<any>;
let isRefreshFinished = true;

http.interceptors.response.use(
  undefined,
  (error: AxiosError<DataResponse<string>>) => {
    if (
      error.response?.status === 401 &&
      error.response?.data.code === 'TOKEN_EXPIRED'
    ) {
      if (CookieStorage.getUserId()) {
        const originalRequest = error.config;

        if (isRefreshFinished) {
          isRefreshFinished = false;

          refreshTokenPromise = refreshTokenService({
            method: 'POST',
            url: '/api/auth/refresh-token',
          })
            .then(() => {
              isRefreshFinished = true;

              return http(originalRequest);
            })
            .catch(() => {
              isRefreshFinished = true;
              window.location.href = '/login';
            });

          return refreshTokenPromise;
        }

        return refreshTokenPromise.then(() => {
          return http(originalRequest);
        });
      }
    }

    if (error.response?.status === 422 && error.response?.data?.errors) {
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
