import { LoadingProps } from '../../types/props';
import { LoadingCircle, LoadingWrapper } from './loading.style';

const Loading = ({ background, color }: LoadingProps): JSX.Element => (
  <LoadingWrapper>
    <LoadingCircle
      background={background}
      color={color}
    />
  </LoadingWrapper>
);

export default Loading;
