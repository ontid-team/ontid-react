type Id = {
  id: number;
};

type Params<P> = {
  location: {
    search: string;
  };
  match: {
    params: P;
  };
};

type Token = {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
};

type PageType = {
  currentPage: number;
  limit: number;
};

type MetaType = PageType & {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPage: number;
  prevPage: number;
  totalItems: number;
  totalPages: number;
};

type TokenPayload = {
  email: string;
  role: string;
  userId: string;
};

type DataResponse<T> = {
  code: string;
  data: T;
  errors?: { [key: string]: string };
  message: string;
  meta: MetaType;
  status: number;
};

type Query = {
  query: string;
};

type DateCtx = string | number | Date;
