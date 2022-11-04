export type HomeType = {
  welcome: WelcomeTextType
};

export type WelcomeTextType = {
  [key in 'button' | 'feature' | 'headline' | 'text']: string
};
