import { INavigationItem } from './common';

export interface BaseProps {
  className: string;
}

export interface ButtonProps extends BaseProps, ButtonWrapperProps {
  children: string;
  link: string;
}

export interface ButtonWrapperProps {
  size: 'standard';
  variant: 'primary'
}

export interface NavigationLinkProps {
  fontcolor: {
    default: string;
    active: string;
  };
}

export interface NavigationListProps {
  horizontal: boolean;
  gap: number;
}

export interface NavigationProps extends BaseProps {
  style: NavigationListProps & NavigationLinkProps;
  data: INavigationItem[];
}
