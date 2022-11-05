import { useTheme } from 'styled-components';
import { WelcomeProps } from '../../types/props';
import Button from '../Button';
import Slideshow from '../Slideshow';
import {
  Feature, Headline, Paragraph, Section
} from '../styled.components';
import { WelcomeIntroduction } from './welcome.style';

const Welcome = (
  {
    data: {
      feature, headline, button, text, slideshow
    },
    className,
    background
  }: WelcomeProps
): JSX.Element => {
  const { welcome } = useTheme();

  return (
    <Section background={background}>
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
      <Slideshow
        images={slideshow}
        className={className}
        gap={20}
        slidesPerView={3}
        width={475}
        height={343}
      />
    </Section>
  );
};

export default Welcome;
