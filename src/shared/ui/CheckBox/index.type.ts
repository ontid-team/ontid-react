export type Props = {
  id?: string;
  name: string;
  value?: number | string;
  checked?: boolean;
  readOnly?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  label?: string;
};
