import { useTheme } from 'styled-components';
import { SectionProps } from '../../types/props';
import Button from '../Button';
import { Feature, Headline, Paragraph } from '../styled.components';
import { WelcomeIntroduction } from './welcome.style';

const Welcome = (
  {
    data: {
      feature, headline, button, text
    },
    className
  }: SectionProps
): JSX.Element => {
  const { welcome } = useTheme();

  return (
    <WelcomeIntroduction className={className}>
      <Feature
        color={welcome.feature}
        marginBottom={20}
        className={`${className}__feature`}
      >
        { feature }
      </Feature>
      <Headline
        level={1}
        color={welcome.headline}
        marginBottom={20}
        className={`${className}__headline`}
      >
        { headline }
      </Headline>
      <Paragraph
        size="large"
        color={welcome.text}
        marginBottom={20}
        className={`${className}__text`}
      >
        { text }
      </Paragraph>
      <Button
        link="/"
        size="large"
        variant="primary"
        className={className}
      >
        { button }
      </Button>
    </WelcomeIntroduction>
  );
};

export default Welcome;
