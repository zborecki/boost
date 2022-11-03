import styled from 'styled-components';
import colors from '../../theme/colors';

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 36px 0px;
`;

export const LoadingCircle = styled.div`
  width: 36px;
  height: 36px;
  border: 4px solid ${colors.purple};
  border-radius: 50%;
  border-right: 4px solid ${colors.green};

  animation-name: rotation;
  animation-duration: 850ms;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67);

  @keyframes rotation {
    0% { 
      -webkit-transform: rotate(0deg);
    }
    100% { 
      -webkit-transform: rotate(360deg); 
    }
  }
`;
