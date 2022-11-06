import styled from 'styled-components';
import { FontWeightType } from '../../types/common';

export const Error404Container = styled.div`
  background-color: ${({ theme: { error404 } }) => error404.background};
  padding: 110px 0px 190px 0px;
`;

export const Error404StatusCode = styled.h2`
  font-weight: ${FontWeightType.ExtraBold};
  font-size: 145px;
  line-height: 1.1em;
  letter-spacing: -0.1em;
  margin: 0px 0px 20px 0px;
  color: ${({ theme: { error404 } }) => error404.statusCode};
`;

export const Error404Wrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
`;
