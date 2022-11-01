export type Buttons = {
  [key in 'primary']: {
    background: {
      default: string;
      hovered: string;
    }
    color: string;
  }
};

export type Colors = {
  [key in 'text' | 'purpleDark' | 'purple' | 'white' | 'red']: string
};

export enum FontWeight {
  'Medium' = 500,
  'SemiBold' = 600,
  'Bold' = 700,
  'ExtraBold' = 800
}

export interface INavigationItem {
  label: string;
  link: string;
}
