import { FullUser } from '@entities/User';

export type Login = Required<Pick<FullUser, 'email' | 'password'>>;
