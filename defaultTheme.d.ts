import 'styled-components';
import { Buttons } from './src/types/common';
import { NavigationLinkProps } from './src/types/props';

declare module 'styled-components' {
  export interface DefaultTheme {
    button: Buttons,
    header: {
      navigation: NavigationLinkProps
    }
  }
}
