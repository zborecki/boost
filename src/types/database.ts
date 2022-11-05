import { ImageType } from './common';

export type HomeType = {
  welcome: WelcomeTextType & {
    slideshow: ImageType[];
  }
};

export type WelcomeTextType = {
  [key in 'button' | 'feature' | 'headline' | 'text']: string
};
