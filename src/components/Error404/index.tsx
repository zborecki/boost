import { useTheme } from 'styled-components';
import { useError404 } from '../../services';
import Button from '../Button';
import Loading from '../Loading';
import { Headline, Paragraph } from '../styled.components';
import { Error404StatusCode, Error404Wrapper, Error404Container } from './error404.style';

const Error404 = (): JSX.Element => {
  const {
    data: {
      button, description, message, statusCode
    }, isLoading
  } = useError404();
  const { loading: { background, color }, error404 } = useTheme();

  return (
    isLoading ? (
      <Loading
        background={background}
        color={color}
      />
    ) : (
      <Error404Container>
        <Error404Wrapper>
          <Error404StatusCode className="error404__statusCode">{ statusCode }</Error404StatusCode>
          <Headline
            level={1}
            color={error404.message}
            marginBottom={20}
            className="error404__message"
          >
            { message }
          </Headline>
          <Paragraph
            size="large"
            color={error404.description}
            marginBottom={20}
            className="error404__description"
          >
            { description }
          </Paragraph>
          <Button
            link="/"
            size="large"
            variant="primary"
            className="error404"
          >
            { button }
          </Button>
        </Error404Wrapper>
      </Error404Container>
    )
  );
};

export default Error404;
