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
    navigation: {
      fontcolor: {
        default: colors.text,
        active: colors.purpleDark
      }
    }
  }
} as DefaultTheme;
