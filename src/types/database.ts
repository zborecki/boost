export type HomeType = {
  welcome: WelcomeType
};

export type WelcomeType = {
  [key in 'button' | 'feature' | 'headline' | 'text']: string
};
