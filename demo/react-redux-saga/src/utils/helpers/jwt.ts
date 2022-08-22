import jwt from 'jwt-decode';

export const decode = <T>(token: string) => {
  try {
    return jwt<T>(token);
  } catch {
    return null;
  }
};
