import { ReactNode } from 'react';

export type Props = {
  children?: ReactNode | string;
  link?: string;
  defaultClassName?: string;
  className?: string;
  handler?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
};
