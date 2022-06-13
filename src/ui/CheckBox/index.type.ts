export type Props = {
  checked?: boolean;
  className?: string;
  id?: string;
  label?: string;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  value?: number | string;
};
