import cn from 'classnames';

import { Props } from './index.type';
import style from './style.module.scss';

const UIError = ({ isValid = true, textPosition = 'top', text }: Props) => {
  return !isValid ? (
    <span
      className={cn(style['validate-text'], {
        [style['validate-top']]: textPosition === 'top',
        [style['validate-bottom']]: textPosition === 'bottom',
      })}
    >
      {text}
    </span>
  ) : null;
};

export default UIError;
