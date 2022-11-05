import { ImageType, NavigationItemType } from './common';
import { WelcomeTextType } from './database';

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
  data: NavigationItemType[];
}

export interface ParagraphProps extends TypographyProps {
  size: 'small' | 'standard' | 'large';
}

export interface SectionProps {
  background: string;
  marginBottom?: number;
}

export interface SlideshowProps extends BaseProps, ImageWrapperProps {
  images: ImageType[];
  gap: number;
  slidesPerView: number;
}

export interface TypographyProps {
  color: string;
  marginBottom?: number;
}

export interface WelcomeProps extends BaseProps, SectionProps {
  data: WelcomeTextType & {
    slideshow: ImageType[];
  }
}
