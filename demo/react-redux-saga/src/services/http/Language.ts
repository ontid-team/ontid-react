import { FullLanguage } from '@entities/Language';
import { http } from '@utils';

const basePath = '/api/languages';

export const getList = async (): Promise<DataResponse<FullLanguage[]>> => {
  const { data } = await http.get<DataResponse<FullLanguage[]>>(basePath);

  return data;
};
