import Axios, { AxiosError } from 'axios';

import { LocalStorageService } from '../services/storage';
import { API_URL } from './constants';

const defaultConfig = {
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

const clearToken = () => {
  LocalStorageService.clearToken();
  window.location.href = '/login';
};

const http = Axios.create(defaultConfig);
// const refreshTokenService = Axios.create(defaultConfig);

http.interceptors.request.use((config) => {
  const AccessToken = LocalStorageService.getAccessToken();
  // eslint-disable-next-line no-param-reassign
  config.headers = {
    ...config.headers,
    ...(AccessToken && { Authorization: `Bearer ${AccessToken}` }),
  };
  return config;
});

http.interceptors.response.use(
  undefined,
  (error: AxiosError<DataResponse<string>>) => {
    if (
      error.response?.status === 401 &&
      error.response?.data.code === 'TOKEN_EXPIRED_ERROR'
    ) {
      // const refreshToken = StorageSergice.getRefreshToken();
      // if (refreshToken) {
      //   const originalRequest = error.config;

      //   return refreshTokenService({
      //     method: 'POST',
      //     url: '/auth/refresh',
      //     data: {
      //       refreshToken,
      //     },
      //   })
      //     .then((res: AxiosResponse<TokenType>) => {
      //       StorageSergice.setToken(res.data);
      //       return server(originalRequest);
      //     })
      //     .catch(() => {
      //       clearToken();
      //     });
      // }
      clearToken();
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
