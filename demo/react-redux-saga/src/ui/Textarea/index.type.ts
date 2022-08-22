export type Props = {
  className?: string;
  disabled?: boolean;
  handleBlur?: (value?: string | number) => void;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress?: (value?: string | number) => void;
  isValid?: boolean;
  label?: string;
  name: string;
  placeholder?: string;
  prop?: any;
  required?: boolean;
  validateText?: string;
  validationTextPosition?: 'top' | 'bottom';
  value: string | number | undefined;
};
