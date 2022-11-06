import { ImageType } from './common';

export type Error404Type = {
  [key in 'button' | 'description' | 'message' | 'statusCode']: string;
};

export type HomeType = {
  welcome: WelcomeTextType & {
    slideshow: ImageType[];
  }
};

export type WelcomeTextType = {
  [key in 'button' | 'feature' | 'headline' | 'text']: string
};
