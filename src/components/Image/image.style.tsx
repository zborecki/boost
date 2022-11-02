import styled from 'styled-components';
import { ImageWrapperProps } from '../../types/props';

export const ImageWrapper = styled.div<ImageWrapperProps>`
  max-width: ${({ width }) => `${width}px`};
  max-height: ${({ height }) => `${height}px`};
`;
