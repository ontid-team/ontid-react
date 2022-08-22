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
  handleChange,
  handleBlur,
  handleKeyPress,
  isValid = true,
  validateText,
  validationTextPosition = 'bottom',
  prop,
}: Props) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (handleChange) {
      handleChange(event);
    }
  };

  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (handleKeyPress && event.key === 'Enter') {
      handleKeyPress(value);
    }
  };

  const onBlur = () => {
    if (handleBlur) {
      handleBlur(value);
    }
  };

  return (
    <div className={cn({ 'validate-error': !isValid }, className)}>
      <textarea
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        onKeyPress={onKeyPress}
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
