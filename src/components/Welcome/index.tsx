import { useTheme } from 'styled-components';
import { SectionProps } from '../../types/props';
import Button from '../Button';
import { Feature } from '../styled.components';

const Welcome = (
  {
    data: {
      feature, headline, button, text
    }
  }: SectionProps
): JSX.Element => {
  const { welcome } = useTheme();

  return (
    <div>
      <Feature
        color={welcome.feature}
        marginBottom={20}
      >
        { feature }
      </Feature>
      <p>{ headline }</p>
      <p>{ text }</p>
      <Button
        link="/"
        size="large"
        variant="primary"
        className="btn"
      >
        { button }
      </Button>
    </div>
  );
};

export default Welcome;
