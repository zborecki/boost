import { SectionProps } from '../../types/props';
import Button from '../Button';

const Welcome = (
  {
    data: {
      feature, headline, button, text
    }
  }: SectionProps
): JSX.Element => (
  <div>
    <p>{ feature }</p>
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

export default Welcome;
