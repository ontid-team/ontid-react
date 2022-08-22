import cn from 'classnames';

import { Props } from './index.type';

const LayoutModal = ({ className, children }: Props) => {
  return (
    <div className={cn('modal', className, 'is-visible')}>
      <div className="modal-dialog">{children}</div>
    </div>
  );
};

export default LayoutModal;
