import { useTheme } from 'styled-components';
import { BaseProps } from '../../types/props';
import Button from '../Button';
import Logo from '../Logo';
import Navigation from '../Navigation';
import { HeaderInteractive, HeaderWrapper } from './header.style';

const Header = ({ className }: BaseProps): JSX.Element => {
  const { header } = useTheme();
  const { navigation } = header;

  return (
    <HeaderWrapper className={className}>
      <Logo
        variant="primary"
        className={`${className}__logo`}
      />
      <HeaderInteractive className={`${className}__interactive`}>
        <Navigation
          style={
          {
            horizontal: true,
            gap: 30,
            fontcolor: {
              default: navigation.fontcolor.default,
              active: navigation.fontcolor.active
            }
          }
        }
          data={
          [
            {
              label: 'Home',
              link: '/'
            }
          ]
        }
          className={className}
        />
        <Button
          link="/"
          size="standard"
          variant="primary"
          className={className}
        >
          Use template
        </Button>
      </HeaderInteractive>
    </HeaderWrapper>
  );
};

export default Header;
