import cn from 'classnames';

import UIError from '../Error';
import { Props } from './index.type';

const UITextarea = ({
  label,
  name,
  value,
  className,
  placeholder,
  disabled = false,
  required = true,
  onChange,
  onBlur,
  onKeyPress,
  isValid = true,
  validateText,
  validationTextPosition = 'bottom',
  prop,
}: Props) => {
  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  const handlerKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (onKeyPress && event.key === 'Enter') {
      onKeyPress(value);
    }
  };

  const handlerBlur = () => {
    if (onBlur) {
      onBlur(value);
    }
  };

  return (
    <div className={cn({ 'validate-error': !isValid }, className)}>
      <textarea
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handlerChange}
        onBlur={handlerBlur}
        onKeyPress={handlerKeyPress}
        disabled={disabled}
        required={required}
        {...prop}
      />
      {label && <label>{label}</label>}
      <UIError
        isValid={isValid}
        textPosition={validationTextPosition}
        text={validateText}
      />
    </div>
  );
};

export default UITextarea;
