export type Props = {
  label?: string;
  name: string;
  value: string | number | undefined;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (value?: string | number) => void;
  onKeyPress?: (value?: string | number) => void;
  isValid?: boolean;
  validateText?: string;
  validationTextPosition?: 'top' | 'bottom';
  prop?: any;
};
