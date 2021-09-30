import { AxiosResponse } from 'axios';

import { FullLanguage } from '@entities/Language';
import { http } from '@shared/utils';

export const getList = async (): Promise<DataResponse<FullLanguage[]>> => {
  const { data }: AxiosResponse<DataResponse<FullLanguage[]>> = await http({
    method: 'GET',
    url: '/api/languages',
  });

  return data;
};
