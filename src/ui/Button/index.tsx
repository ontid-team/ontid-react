import cn from 'classnames';
import { useHistory } from 'react-router-dom';

import { Props } from './index.type';

const UIButton = ({
  link,
  handler,
  children,
  className = '',
  disabled = false,
  defaultClassName = 'btn',
}: Props) => {
  const history = useHistory();

  return (
    <button
      className={cn(defaultClassName, className)}
      disabled={disabled}
      onClick={link ? () => history.push(link) : handler}
    >
      {children}
    </button>
  );
};

export default UIButton;
