import { ReactNode } from 'react';

export type Props = {
  children?: ReactNode | string;
  className?: string;
  defaultClassName?: string;
  disabled?: boolean;
  handler?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  link?: string;
};
