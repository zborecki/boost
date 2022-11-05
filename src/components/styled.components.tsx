import styled from 'styled-components';
import { FontWeightType } from '../types/common';
import {
  HeadlineProps, ParagraphProps, SectionProps, TypographyProps
} from '../types/props';

export const Feature = styled.p<TypographyProps>`
  margin: 0px;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? `${marginBottom}px` : '0px')};
  text-transform: uppercase;
  font-weight: ${FontWeightType.ExtraBold};
  font-size: 16px;
  line-height: 1.5em;
  letter-spacing: 0.01em;
  color: ${({ color }) => color};
`;

export const Headline = styled.h1.attrs(({ level }: HeadlineProps) => ({
  as: (level === 1 && 'h1')
  || (level === 2 && 'h2')
  || (level === 3 && 'h3')
  || (level === 4 && 'h4')
  || (level === 5 && 'h5')
  || (level === 6 && 'h6')
}))<HeadlineProps>`
  margin: 0;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? `${marginBottom}px` : '0px')};
  color: ${({ color }) => color};
  font-weight: ${({ level }) => (level === 6 ? FontWeightType.Bold : FontWeightType.ExtraBold)};
  font-size: ${
  ({ level }) => (
    (level === 1 && '68px')
    || (level === 2 && '48px')
    || (level === 3 && '40px')
    || (level === 4 && '24px')
    || (level === 5 && '18px')
    || (level === 6 && '14px')
  )};
  letter-spacing: ${
  ({ level }) => (
    (level === 1 && '-0.015em')
    || (level === 2 && '-0.01em')
    || (level === 3 && '-0.01em')
    || (level === 4 && '-0.005em')
  )};
  line-height: ${
  ({ level }) => (
    (level === 1 && '1.1em')
    || (level === 2 && '1.3em')
    || (level === 3 && '1.3em')
    || (level === 4 && '1.4em')
    || (level === 5 && '1.2em')
    || (level === 6 && '1.4em')
  )};
`;

export const Paragraph = styled.p<ParagraphProps>`
  margin: 0;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? `${marginBottom}px` : '0px')};
  color: ${({ color }) => color};
  font-weight: ${FontWeightType.Medium};
  font-size: ${
  ({ size }) => (
    (size === 'small' && '14px')
    || (size === 'standard' && '18px')
    || (size === 'large' && '24px')
  )};
  line-height: ${
  ({ size }) => (
    (size === 'small' && '1.5em')
    || (size === 'standard' && '1.7em')
    || (size === 'large' && '1.4em')
  )};
  letter-spacing: ${({ size }) => (size === 'large' && '0.002em')};
`;

export const Section = styled.section<SectionProps>`
  background-color: ${({ background }) => background};
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
