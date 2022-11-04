export type ButtonType = {
  [key in 'primary']: {
    background: {
      default: string;
      hovered: string;
    }
    color: string;
  }
};

export enum FontWeightType {
  'Medium' = 500,
  'SemiBold' = 600,
  'Bold' = 700,
  'ExtraBold' = 800
}

export type ImageType = {
  alt: string;
  src: string;
};

export type LogoType = {
  [key in 'primary' | 'secondary']: {
    logomark: string;
    logotype: string;
  }
};

export type NavigationItemType = {
  label: string;
  link: string;
};
