export enum FontWeight {
  'Medium' = 500,
  'SemiBold' = 600,
  'Bold' = 700,
  'ExtraBold' = 800
}

export type Colors = {
  [key in 'text' | 'purpleDark']: string
};

export interface INavigationItem {
  label: string;
  link: string;
}
