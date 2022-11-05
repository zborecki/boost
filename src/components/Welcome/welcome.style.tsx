import styled from 'styled-components';

export const WelcomeIntroduction = styled.div`
  max-width: 680px;
  padding-top: 120px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;

  .welcome {
    &__text, &__headline {
      text-align: center;
    }
  }
`;
