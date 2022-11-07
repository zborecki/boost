import 'styled-components';
import { ButtonType, LogoType } from './src/types/common';
import { Error404Type, WelcomeType } from './src/types/database';
import { LoadingProps, NavigationLinkProps } from './src/types/props';

declare module 'styled-components' {
  export interface DefaultTheme {
    button: ButtonType,
    error404: Error404Type & {
      background: string;
    },
    header: {
      background: string,
      navigation: NavigationLinkProps
    },
    loading: LoadingProps,
    logo: LogoType,
    presentation: {
      background: string
    },
    welcome: WelcomeType & {
      background: string;
    }
  }
}
