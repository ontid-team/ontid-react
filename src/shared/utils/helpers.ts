// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserHistory } from 'history';

export const capitalize = (s: string): string => {
  if (typeof s !== 'string') {
    return '';
  }
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const history = createBrowserHistory();
