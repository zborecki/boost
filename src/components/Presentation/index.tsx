import { useTheme } from 'styled-components';
import { Section } from '../styled.components';

const Presentation = (): JSX.Element => {
  const { presentation } = useTheme();

  return (
    <Section
      background={presentation.background}
      setPadding
    >
      Test
    </Section>
  );
};

export default Presentation;
