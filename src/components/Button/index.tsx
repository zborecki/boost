import { ButtonProps } from '../../types/props';
import { ButtonWrapper } from './button.style';

const Button = (
  {
    children,
    link,
    variant,
    size,
    className
  }: ButtonProps
)
: JSX.Element => (
  <ButtonWrapper
    size={size}
    variant={variant}
    className={`${className}__button`}
    to={link}
  >
    { children }
  </ButtonWrapper>
);

export default Button;
