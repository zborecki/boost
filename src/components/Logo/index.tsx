import { useTheme } from 'styled-components';
import { BaseProps, LogoProps } from '../../types/props';
import { LogoWrapper, Logotype } from './logo.style';

const Logo = ({ variant, className }: LogoProps & BaseProps): JSX.Element => {
  const { logo } = useTheme();

  return (
    <LogoWrapper className={className}>
      <svg
        width="24"
        height="21"
        viewBox="0 0 24 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo__logomark"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.64787 1.53136C6.64787 0.685613 7.34324 0 8.20102 0H16.2442C20.5277 0 24 3.42359 24 7.6469C24 11.8701 20.5277 15.2937 16.2442 15.2937H7.31067C6.45288 15.2937 5.75751 14.6081 5.75751 13.7624C5.75751 12.9166 6.45288 12.231 7.31067 12.231H16.2442C18.8121 12.231 20.8937 10.1786 20.8937 7.6469C20.8937 5.11509 18.8121 3.06272 16.2442 3.06272H8.20102C7.34324 3.06272 6.64787 2.3771 6.64787 1.53136ZM0 13.3531C0 9.12986 3.47234 5.70628 7.75576 5.70628H15.799C16.6568 5.70628 17.3521 6.39189 17.3521 7.23764C17.3521 8.08338 16.6568 8.769 15.799 8.769H7.75576C5.18788 8.769 3.10631 10.8214 3.10631 13.3531C3.10631 15.8849 5.1879 17.9373 7.75576 17.9373H15.799C16.6568 17.9373 17.3521 18.6229 17.3521 19.4686C17.3521 20.3144 16.6568 21 15.799 21H7.75576C3.47233 21 0 17.5764 0 13.3531Z"
          fill={
            variant === 'primary'
              ? logo.primary.logomark
              : logo.secondary.logomark
          }
        />
      </svg>
      <Logotype
        variant={variant}
        className="logo__logotype"
      >
        Boost
      </Logotype>
    </LogoWrapper>
  );
};

export default Logo;
