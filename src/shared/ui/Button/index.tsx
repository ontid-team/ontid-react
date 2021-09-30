import cn from 'classnames';
import { useHistory } from 'react-router-dom';

import { Props } from './index.type';

const UIButton = (props: Props) => {
  const history = useHistory();
  const {
    link,
    handler,
    children,
    className = '',
    disabled = false,
    defaultClassName = 'btn',
  } = props;

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
