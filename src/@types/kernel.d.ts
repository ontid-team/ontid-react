type AngelId = number;
type UserId = number;
type CardId = number;
type BookingId = number;
type Email = string;
type Phone = string;

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
  tokenType: string;
  accessToken: string;
  refreshToken: string;
};

type PageType = {
  limit: number;
  currentPage: number;
};

type MetaType = PageType & {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPage: number;
  prevPage: number;
  totalPages: number;
  totalItems: number;
};

type DataResponse<T> = {
  status: number;
  code: string;
  message: string;
  errors?: { [key: string]: string };
  data: T;
  meta: MetaType;
};

type Query = {
  query: string;
};
