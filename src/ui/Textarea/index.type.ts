export type Props = {
  className?: string;
  disabled?: boolean;
  isValid?: boolean;
  label?: string;
  name: string;
  onBlur?: (value?: string | number) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (value?: string | number) => void;
  placeholder?: string;
  prop?: any;
  required?: boolean;
  validateText?: string;
  validationTextPosition?: 'top' | 'bottom';
  value: string | number | undefined;
};
