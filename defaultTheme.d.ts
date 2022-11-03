import 'styled-components';
import { Buttons, Logos } from './src/types/common';
import { WelcomeType } from './src/types/database';
import { LoadingProps, NavigationLinkProps } from './src/types/props';

declare module 'styled-components' {
  export interface DefaultTheme {
    button: Buttons,
    header: {
      background: string,
      navigation: NavigationLinkProps
    },
    loading: LoadingProps,
    logo: Logos,
    welcome: WelcomeType & {
      background: string;
    }
  }
}
