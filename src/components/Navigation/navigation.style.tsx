import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FontWeight } from '../../types/common';
import { NavigationLinkProps, NavigationListProps } from '../../types/props';

export const NavigationLink = styled(NavLink)<NavigationLinkProps>`
  text-decoration: none;
  font-weight: ${FontWeight.SemiBold};
  font-size: 16px;
  line-height: 1em;
  color: ${({ fontcolor }) => fontcolor.default};
  transition: color 0.2s ease-out;

  &.active {
    color: ${({ fontcolor }) => fontcolor.active};
  }
  
  &:hover {
    color: ${({ fontcolor }) => fontcolor.active};
  }
`;

export const NavigationList = styled.ul<NavigationListProps>`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: ${({ horizontal }) => (horizontal ? 'row' : 'column')};
  gap: ${({ gap }) => `${gap}px`}
`;
