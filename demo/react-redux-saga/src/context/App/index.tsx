import { createContext, useEffect } from 'react';

import { useAppDispatch } from '@store/index';
import { getListLanguageRequest } from '@store/Language';

import { Props } from './index.type';

export const AppContext = createContext<null>(null);

export const AppProvider = ({ children }: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getListLanguageRequest());
  }, [dispatch]);

  return <AppContext.Provider value={null}>{children}</AppContext.Provider>;
};
