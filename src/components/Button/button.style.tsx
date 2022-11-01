import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontWeight } from '../../types/common';
import { ButtonWrapperProps } from '../../types/props';

export const ButtonWrapper = styled(Link)<ButtonWrapperProps>`
  display: inline-block;
  border-radius: 10px;
  text-decoration: none;
  font-weight: ${FontWeight.Bold};
  transition: background-color .2s ease-out;
  padding: ${
  ({ size }) => (
    (size === 'standard' && '15px 20px 15px 20px')
  )};
  font-size: ${
  ({ size }) => (
    (size === 'standard' && '16px')
  )};
  background-color: ${
  ({ variant, theme: { button: { primary } } }) => (
    (variant === 'primary' && primary.background.default)
  )};
  color: ${
  ({ variant, theme: { button: { primary } } }) => (
    (variant === 'primary' && primary.color)
  )};

  &:hover {
    background-color: ${
  ({ variant, theme: { button: { primary } } }) => (
    (variant === 'primary' && primary.background.hovered)
  )};
  }
`;
