import { INavigationItem } from './common';
import { WelcomeType } from './database';

export interface BaseProps {
  className: string;
}

export interface ButtonProps extends BaseProps, ButtonWrapperProps {
  children: string;
  link: string;
}

export interface ButtonWrapperProps {
  size: 'standard' | 'large';
  variant: 'primary'
}

export interface HeadlineProps extends TypographyProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface ImageProps extends BaseProps, ImageWrapperProps {
  src: string;
  alt: string;
}

export interface ImageWrapperProps {
  width: number;
  height: number;
}

export type LoadingProps = {
  [key in 'background' | 'color']: string;
};

export interface LogoProps {
  variant: 'primary' | 'secondary';
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

export interface ParagraphProps extends TypographyProps {
  size: 'small' | 'standard' | 'large';
}

export interface SectionProps extends BaseProps {
  data: WelcomeType;
}

export interface TypographyProps {
  color: string;
  marginBottom?: number;
}
