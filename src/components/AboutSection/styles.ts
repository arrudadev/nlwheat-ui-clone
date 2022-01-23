import styled from 'styled-components';

import DoWhileSVG from '../../assets/icons/do-while.svg';
import NlwSVG from '../../assets/icons/nlw.svg';

export const Section = styled.section`
  display: flex;
  justify-content: center;

  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('/images/backgrounds/astronauts-shaking-hands.png');

  @media (min-width: 320px) {
    padding: 80px 0;
  }

  @media (min-width: 768px) {
    padding: 160px 0 134px;
  }
`;

export const Container = styled.div`
  @media (min-width: 320px) {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    width: 1120px;

    margin: 0 24px;
  }

  @media (min-width: 992px) {
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    margin: unset;
  }
`;

export const Headline = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Logos = styled.div`
  display: flex;

  margin-bottom: 24px;

  @media (min-width: 320px) {
    align-items: flex-start;
    flex-direction: column;
  }

  @media (min-width: 576px) {
    align-items: center;
    flex-direction: row;
  }

  span {
    color: var(--white);

    margin: 0 32px;

    @media (min-width: 320px) {
      font-size: 24px;
    }

    @media (min-width: 576px) {
      line-height: 54px;
    }

    @media (min-width: 768px) {
      font-size: 32px;
    }
  }
`;

export const NlwIcon = styled(NlwSVG)`
  @media (min-width: 320px) {
    width: 80px;
    height: auto;
  }

  @media (min-width: 576px) {
    width: unset;
  }
`;

export const DoWhileIcon = styled(DoWhileSVG)`
  @media (min-width: 320px) {
    width: 200px;
    height: auto;
  }

  @media (min-width: 576px) {
    width: unset;
  }
`;

export const Title = styled.h3`
  color: var(--white);

  @media (min-width: 320px) {
    font-size: 30px;
    font-weight: 700;
    line-height: 35px;

    margin-bottom: 40px;
  }

  @media (min-width: 768px) {
    font-size: 48px;
    line-height: 54px;

    margin-bottom: 70px;
  }
`;

export const Paragraph = styled.p`
  color: var(--yellow);

  max-width: 511px;

  @media (min-width: 320px) {
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
  }

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 34px;
  }
`;

export const Content = styled.div`
  @media (min-width: 320px) {
    margin-top: 40px;
  }

  @media (min-width: 992px) {
    margin: unset;

    max-width: 350px;
  }

  @media (min-width: 1200px) {
    max-width: 480px;
  }

  p + p {
    @media (min-width: 320px) {
      margin-top: 25px;
    }

    @media (min-width: 768px) {
      margin-top: 26px;
    }
  }
`;

export const Description = styled.p`
  color: var(--white);

  @media (min-width: 320px) {
    font-size: var(--font-text);
    font-weight: 400;
    line-height: 26px;
  }

  @media (min-width: 1200px) {
    line-height: 25px;
  }
`;
