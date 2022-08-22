import cn from 'classnames';
import { useNavigate } from 'react-router-dom';

import { Props } from './index.type';

const UIButton = ({
  link,
  handleClick,
  children,
  className = '',
  disabled = false,
  defaultClassName = 'btn',
}: Props) => {
  const navigate = useNavigate();

  return (
    <button
      className={cn(defaultClassName, className)}
      disabled={disabled}
      onClick={link ? () => navigate(link) : handleClick}
    >
      {children}
    </button>
  );
};

export default UIButton;
