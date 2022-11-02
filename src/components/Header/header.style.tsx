import styled from 'styled-components';
import { Wrapper } from '../styled.components';

export const HeaderInteractive = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const HeaderWrapper = styled(Wrapper).attrs(({
  as: 'header'
}))`
  background-color: ${({ theme: { header } }) => header.background};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 25px;
`;
