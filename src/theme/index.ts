import { DefaultTheme } from 'styled-components';
import colors from './colors';

export default {
  button: {
    primary: {
      background: {
        default: colors.purple,
        hovered: colors.red
      },
      color: colors.white
    }
  },
  header: {
    background: colors.white,
    navigation: {
      fontcolor: {
        default: colors.text,
        active: colors.purpleDark
      }
    }
  },
  logo: {
    primary: {
      logomark: colors.purple,
      logotype: colors.text
    },
    secondary: {
      logomark: colors.white,
      logotype: colors.white
    }
  },
  welcome: {
    feature: colors.purple
  }
} as DefaultTheme;
