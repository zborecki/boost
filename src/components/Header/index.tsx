import { useTheme } from 'styled-components';
import { BaseProps } from '../../types/props';
import Button from '../Button';
import Navigation from '../Navigation';

const Header = ({ className }: BaseProps): JSX.Element => {
  const { header } = useTheme();
  const { navigation } = header;

  return (
    <header className={className}>
      <div className={`${className}__logo`}>Logo</div>
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
    </header>
  );
};

export default Header;
