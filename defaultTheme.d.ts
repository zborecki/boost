import 'styled-components';
import { NavigationLinkProps } from './src/types/props';

declare module 'styled-components' {
  export interface DefaultTheme {
    header: {
      navigation: NavigationLinkProps
    }
  }
}
