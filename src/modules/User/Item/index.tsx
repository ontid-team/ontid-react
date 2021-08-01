import { UIName } from '../ui';
import { Props } from './index.type';

const UserItem = ({ user }: Props) => {
  return (
    <div>
      <UIName fullName={user?.profile?.fullName} />
    </div>
  );
};

export default UserItem;
