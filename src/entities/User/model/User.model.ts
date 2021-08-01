import { Role } from '@shared/utils';

import { FullProfile } from './Profile.model';

type User = {
  email: string;
  password: string;
  role: Role.USER;
  profile: FullProfile;
};

export type FullUser = User;

export type UploadFile = {
  file: Blob;
  image: 'avatar';
};
