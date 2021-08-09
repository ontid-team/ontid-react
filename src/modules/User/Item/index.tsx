import { UserUIName } from '../ui';
import { Props } from './index.type';

const UserItem = ({ user }: Props) => {
  return (
    <div>
      <UserUIName fullName={user?.profile?.fullName} />
    </div>
  );
};

export default UserItem;
