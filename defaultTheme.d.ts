import 'styled-components';
import { ButtonType, LogoType } from './src/types/common';
import { WelcomeType } from './src/types/database';
import { LoadingProps, NavigationLinkProps } from './src/types/props';

declare module 'styled-components' {
  export interface DefaultTheme {
    button: ButtonType,
    header: {
      background: string,
      navigation: NavigationLinkProps
    },
    loading: LoadingProps,
    logo: LogoType,
    welcome: WelcomeType & {
      background: string;
    }
  }
}
