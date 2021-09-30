import { UserUIName } from '../ui';
import { Props } from './index.type';

const UserItem = ({ user }: Props) => {
  return <UserUIName fullName={user?.profile?.fullName} />;
};

export default UserItem;
