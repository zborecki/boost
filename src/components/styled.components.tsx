import styled from 'styled-components';
import { FontWeight } from '../types/common';
import { TypographyProps } from '../types/props';

export const Feature = styled.p<TypographyProps>`
  margin: 0px;
  margin-bottom: ${({ marginBottom }) => `${marginBottom}px`};
  text-transform: uppercase;
  font-weight: ${FontWeight.ExtraBold};
  font-size: 16px;
  line-height: 1.5em;
  letter-spacing: 0.01em;
  color: ${({ color }) => color};
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
