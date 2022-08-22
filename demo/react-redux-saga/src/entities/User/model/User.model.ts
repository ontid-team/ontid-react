import { Role } from '@utils';

import { FullProfile } from './Profile.model';

type User = {
  email: string;
  password: string;
  profile: FullProfile;
  role: Role.USER;
};

export type FullUser = User;

export type UploadFile = {
  file: Blob;
  image: 'avatar';
};
