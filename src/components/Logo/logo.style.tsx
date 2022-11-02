import styled from 'styled-components';
import { FontWeight } from '../../types/common';
import { LogoProps } from '../../types/props';

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Logotype = styled.p<LogoProps>`
  margin: 0px;
  margin-left: 10px;
  font-weight: ${FontWeight.ExtraBold};
  font-size: 20px;
  line-height: 19.2px;
  letter-spacing: -0.003em;
  color: ${
  ({ variant, theme: { logo } }) => (
    (variant === 'primary' && logo.primary.logotype)
    || (variant === 'secondary' && logo.secondary.logotype)
  )};
`;
